//importando o axios

import axios from 'axios'; 

const handleCadastroContato = async (nome, telefone, email) => {
     //Tentando acessar a API

  try {
        //Se acessar vai dar um post no banco

      const response = await axios.post('http://localhost:8080/contato', { nome, telefone, email });
      console.log('Resposta da API (Cadastro Contato Paciente):', response.data);
        //Se der erro vai aparecer isso

    } catch (error) {
      console.error('Erro ao cadastrar contato do paciente:', error);
    }
  };

  export default handleCadastroContato ;