import axios from 'axios'; 

const handleCadastroPlanoDeSaude= async (nome, nivel) => {
    try {
      const response = await axios.post('http://localhost:8080/planosaude', { nome, nivel });
      console.log('Resposta da API Plano de Saude:', response.data);
    
    } catch (error) {
      console.error('Erro ao cadastrar Plano de saude:', error);
    }
  };

  export default handleCadastroPlanoDeSaude ;