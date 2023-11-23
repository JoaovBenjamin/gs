"use client"
import handleCadastroPaciente from "@/services/Cadastro/CadastroPaciente";
import { useState } from "react";


const CadastroPaciente = () => {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [idade, setIdade] = useState('');
    const [mensagem, setMensagem] = useState('');

   
  
    const handleClick = async () => {
        const nomePaciente = nome;
        const telefonePaciente = telefone;
        const idadePaciente = idade;
        await handleCadastroPaciente(nomePaciente, telefonePaciente, idadePaciente);

        setMensagem('Cliente cadastrado com sucesso!');


        setNome('');
        setTelefone('');
        setIdade('');
        
      };
      
    return (
        <div>
          <h1>Cadastro de Paciente</h1>
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
            Idade:
            <input type="text" value={idade} onChange={(e) => setIdade(e.target.value)} />
          </label>
          <br />
          <button onClick={handleClick}>Cadastrar Paciente</button>
          {mensagem && <p>{mensagem}</p>}

        </div>
      )

}

export default CadastroPaciente;