//Importando meus arquivos e o use client
"use client"
import styles from "../../styles/cadastros.module.css"
import handleCadastroContato from "@/services/CadastroContato/CadastroContato";
import { useState } from "react";
import Footer from "../Footer/Footer";


const CadastroContatoPaciente = () => {
    //Armazenando estado e criando const
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

   
  //Exportando minha api e invocando os objetos
    const handleClick = async () => {
        const nomeContatoPaciente = nome;
        const telefoneContatoPaciente = telefone;
        const emailContatoPaciente = email;
        await handleCadastroContato(nomeContatoPaciente, telefoneContatoPaciente, emailContatoPaciente);

        //Mensagem de acerto
        setMensagem('Contato Registrado com Sucesso');

        //Deixando vazios os inputs
        setNome('');
        setTelefone('');
        setEmail('');
        
      };
      
      //Criando meu componente
    return (
        <>
         <section className={styles.container}>
          <h1 className={styles.container__titulo}>Cadastro de Contato de Emergencia para o Paciente</h1>
          <label>
          <p className={styles.container__texto}>Nome: </p>            <input className={styles.container__input} type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          </label>
          <br />
          <label>
          <p className={styles.container__texto}>Numero:  </p>
            <input className={styles.container__input}type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          </label>
          <br />
          <label>
          <p className={styles.container__texto}>Email: </p>
            <input className={styles.container__input} type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <button className={styles.container__button} onClick={handleClick}>Cadastrar Contato</button>
          {mensagem && <p className={styles.mensagem}>{mensagem} <br></br> <a className={styles.mensagem__link} href="/CadastroPlanoSaude">Clique aqui para continar</a></p>
                        
                      }

        </section>
        <Footer></Footer>
        </>
      )

}

export default CadastroContatoPaciente;