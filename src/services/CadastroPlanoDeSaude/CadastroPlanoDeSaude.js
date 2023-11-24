import axios from 'axios'; 

const handleCadastroPlanoDeSaude= async (nome, nivel) => {
    try {
      const response = await axios.post('http://localhost:8080/planosaude', { nome, nivel });
      console.log('Resposta da API (Cadastro Paciente):', response.data);
    
    } catch (error) {
      console.error('Erro ao cadastrar paciente:', error);
    }
  };

  export default handleCadastroPlanoDeSaude ;