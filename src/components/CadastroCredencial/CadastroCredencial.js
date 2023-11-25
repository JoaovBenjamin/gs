//Importando meus arquivos e o use client

"use client"
import styles from "../../styles/cadastros.module.css"
import handleCadastroCredencial from "@/services/CadastroCredencial/Cadastro"
import { useState } from "react"
import Footer from "../Footer/Footer"

const CadastroCredencial = () => {
      //Armazenando estado e criando const

    const [usario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")
    const [mensagem, setMensagem] = useState('');

  //Exportando minha api e invocando os objetos

    const handleClick = async () => {
        const usarioCadastrado = usario
        const senhaCadastrada = senha

        await handleCadastroCredencial(usarioCadastrado, senhaCadastrada)
                //Mensagem de acerto

        setMensagem('Credenciais cadastrada com sucesso');

                //Deixando vazios os inputs

        setUsuario('')
        setSenha('')
    }

          //Criando meu componente

    return(
      <>
        <section className={styles.container}>
          <h1 className={styles.container__titulo}>Cadastro de Credenciais</h1>
          <label>
          <p className={styles.container__texto}>Usuario: </p>
            <input className={styles.container__input} type="text" value={usario} onChange={(e) => setUsuario(e.target.value)} />
          </label>
          <br />
          <label>
          <p className={styles.container__texto}>Senha: </p>:
            <input className={styles.container__input} type="text" value={senha} onChange={(e) => setSenha(e.target.value)} />
          </label>
          <br />
          <button className={styles.container__button} onClick={handleClick}>Cadastrar Paciente</button>
          {mensagem && <p className={styles.mensagem}>{mensagem} <br></br> <a className={styles.mensagem__link} href="/">Clique aqui para continar</a></p>
                        
                      }
          </section>
          <Footer></Footer>
      </>
    )
}


export default CadastroCredencial;