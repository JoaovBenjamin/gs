import axios from 'axios'; 

const handleCadastroCredencial= async (usuario, senha) => {
    try {
      const response = await axios.post('http://localhost:8080/credencial', { usuario, senha });
      console.log('Resposta da API Cadastro Credencial:', response.data);
    
    } catch (error) {
      console.error('Erro ao cadastrar credencial:', error);
    }
  };

  export default handleCadastroCredencial ;