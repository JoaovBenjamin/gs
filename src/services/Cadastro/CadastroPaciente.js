//importando o axios
import axios from 'axios'; 


const handleCadastroPaciente = async (nome, telefone, idade) => {
  //Tentando acessar a API
  try {
    //Se acessar vai dar um post no banco
      const response = await axios.post('http://localhost:8080/paciente', { nome, telefone, idade });
      console.log('Resposta da API (Cadastro Paciente):', response.data);
    //Se der erro vai aparecer isso
    } catch (error) {
      console.error('Erro ao cadastrar paciente:', error);
    }
  };

  export default handleCadastroPaciente ;