
//importando o axios

import axios from 'axios'; 

const handleCadastroCredencial= async (usuario, senha) => {
      //Tentando acessar a API
  try {
         //Se acessar vai dar um post no banco
      const response = await axios.post('http://localhost:8080/credencial', { usuario, senha });
      console.log('Resposta da API Cadastro Credencial:', response.data);
    
    } catch (error) {
        //Tentando acessar a API

      console.error('Erro ao cadastrar credencial:', error);
    }
  };

  export default handleCadastroCredencial ;