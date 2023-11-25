import styles from "./button.module.css"

export default  function ButtonNav(){
    return(
        <>
         <button className={styles.button_nav}><a className={styles.link} href="/Login">Login</a></button>
        </>
    )
}