
"use server"
import "./TelaLogin.module.css"


export default async function TelaLogin(){
    return(
        <>
        <section className="container">
            <h1 className="container__titulo">Bem Vindo ao Bay Chronic</h1>
            <image className="container_image" alt="medico mexendo no computador"></image>
            <article className="container__login">
                <h2 className="container__login__subtitulo">Realize o Login</h2>
                <form className="container__login_form">
                    <label htmlFor="usuario">Usuário:</label><br/><input type="text" name="usuario"/>
                    <label htmlFor="senha">Senha:</label><br/><input type="password" name="senha"/>
                    <button></button>
                </form>
            </article>
        </section>
            
        </>
    )
}