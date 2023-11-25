"use client"
// importando os arquivos necessarios
import styles from "../../styles/cadastros.module.css"
import React, { useState } from 'react';
import axios from 'axios';
import Footer from "../Footer/Footer";

const LoginForm = () => {
  //Criando os estados para armazenar a api

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
    <>
      <section className={styles.container}>
          <h1 className={styles.container__titulo}>Login</h1>
          
      <label>
      <p className={styles.container__texto}>Usuario: </p>
            <input className={styles.container__input} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
      <br />
      <label>
      <p className={styles.container__texto}>Senha: </p>:
            <input className={styles.container__input} type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button className={styles.container__button} onClick={handleLogin} type="submit">Login</button>

      </section>
      <Footer></Footer>
    </>
  );
};

export default LoginForm;