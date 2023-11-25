//importando o axios

import axios from 'axios'; 

const handleCadastroPlanoDeSaude= async (nome, nivel) => {
     //Tentando acessar a API

  try {
        //Se acessar vai dar um post no banco

      const response = await axios.post('http://localhost:8080/planosaude', { nome, nivel });
      console.log('Resposta da API Plano de Saude:', response.data);
    
    } catch (error) {
          //Se der erro vai aparecer isso

      console.error('Erro ao cadastrar Plano de saude:', error);
    }
  };

  export default handleCadastroPlanoDeSaude ;