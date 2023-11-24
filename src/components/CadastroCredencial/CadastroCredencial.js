"use client"
import handleCadastroCredencial from "@/services/CadastroCredencial/Cadastro"
import { useState } from "react"

const CadastroCredencial = () => {
    const [usario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")
    const [mensagem, setMensagem] = useState('');


    const handleClick = async () => {
        const usarioCadastrado = usario
        const senhaCadastrada = senha

        await handleCadastroCredencial(usarioCadastrado, senhaCadastrada)
        setMensagem('Credenciais cadastrada com sucesso');


        setUsuario('')
        setSenha('')
    }

    return(
      <>
    <div>
 <h1>Cadastro de Contato com o Paciente</h1>
 <label>
   Nome:
   <input type="text" value={usario} onChange={(e) => setUsuario(e.target.value)} />
 </label>
 <br />
 <label>
   Senha:
   <input type="text" value={senha} onChange={(e) => setSenha(e.target.value)} />
 </label>
 <br />
 <button onClick={handleClick}>Cadastrar Paciente</button>
 {mensagem && <p>{mensagem}</p>}

</div>
</>
    )
}


export default CadastroCredencial;