
import axios from 'axios'; 

const handleCadastroPaciente = async (nome, telefone, idade) => {
    try {
      const response = await axios.post('http://localhost:8080/paciente', { nome, telefone, idade });
      console.log('Resposta da API (Cadastro Paciente):', response.data);
    
    } catch (error) {
      console.error('Erro ao cadastrar paciente:', error);
    }
  };

  export default handleCadastroPaciente ;