"use client"
import handleCadastroPlanoDeSaude from "@/services/CadastroPlanoDeSaude/CadastroPlanoDeSaude";
import { useState } from "react";

const CadastroPlanoSaude = () => {
    const [nome, setNome] = useState("");
    const [nivel, setNivel] = useState("")
    const [mensagem, setMsg] = useState("");

    const handleClick = async () =>{
        const nomePlano = nome;
        const nivelPlano = nivel
        await handleCadastroPlanoDeSaude(nomePlano,nivelPlano)

        setMsg("Plano Registrado com Sucesso")

        setNome('')
        setNivel('')
    }
    return(
        <>
             <div>
          <h1>Cadastro de Contato com o Paciente</h1>
          <label>
            Nome:
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          </label>
          <br />
          <label>
            Nivel:
            <input type="text" value={nivel} onChange={(e) => setNivel(e.target.value)} />
          </label>
          <br />
          <button onClick={handleClick}>Cadastrar Paciente</button>
          {mensagem && <p>{mensagem}</p>}

        </div>
        </>
        
    )
}

export default CadastroPlanoSaude