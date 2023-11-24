import axios from 'axios'; 

const handleCadastroCredencial= async (usuario, senha) => {
    try {
      const response = await axios.post('http://localhost:8080/credencial/login', { usuario, senha });
      console.log('Resposta da API (Cadastro Paciente):', response.data);
    
    } catch (error) {
      console.error('Erro ao cadastrar paciente:', error);
    }
  };

  export default handleCadastroCredencial ;