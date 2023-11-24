"use client"
import handleCadastroContato from "@/services/CadastroContato/CadastroContato";
import { useState } from "react";


const CadastroContatoPaciente = () => {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

   
  
    const handleClick = async () => {
        const nomeContatoPaciente = nome;
        const telefoneContatoPaciente = telefone;
        const emailContatoPaciente = email;
        await handleCadastroContato(nomeContatoPaciente, telefoneContatoPaciente, emailContatoPaciente);

        setMensagem('Contato Registrado com Sucesso');


        setNome('');
        setTelefone('');
        setEmail('');
        
      };
      
    return (
        <div>
          <h1>Cadastro de Contato com o Paciente</h1>
          <label>
            Nome:
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          </label>
          <br />
          <label>
            Número:
            <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <button onClick={handleClick}>Cadastrar Paciente</button>
          {mensagem && <p>{mensagem}</p>}

        </div>
      )

}

export default CadastroContatoPaciente;