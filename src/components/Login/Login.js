"use client"

import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Faz a requisição para o servidor com as credenciais
      const response = await axios.post('http://localhost:8080/credencial/login', {
        username,
        password,
      });

      // Se o servidor responder com sucesso, pode-se prosseguir
      if (response.status === 201) {
        const token = response.data.token;
        sessionStorage.setItem('token', token);

        // Lógica para tratar a resposta do servidor, por exemplo, redirecionar para outra página
        console.log('Login bem-sucedido:', response.data);
      } else {
        // Lógica para tratar casos em que o servidor não responde com sucesso
        console.error('Erro ao fazer login. Resposta do servidor:', response.status, response.data);
      }
    } catch (error) {
      // Lógica para tratar erros, por exemplo, exibir uma mensagem de erro
      console.error('Erro ao fazer login:', error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Usuário:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Senha:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;