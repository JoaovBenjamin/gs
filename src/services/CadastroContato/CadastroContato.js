import axios from 'axios'; 

const handleCadastroContato = async (nome, telefone, email) => {
    try {
      const response = await axios.post('http://localhost:8080/contato', { nome, telefone, email });
      console.log('Resposta da API (Cadastro Contato Paciente):', response.data);
    
    } catch (error) {
      console.error('Erro ao cadastrar contato do paciente:', error);
    }
  };

  export default handleCadastroContato ;