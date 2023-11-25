import styles from "./button.module.css"

export default  function ButtonNav2(){
    return(
        <>
            <button className={styles.button_nav2}><a className={styles.link} href="/Cadastro">Cadastro</a></button>
        </>
    )
}