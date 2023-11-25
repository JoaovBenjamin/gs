import styles from "./Footer.module.css"

export default function Footer(){
    return(
        <>
            <hr className={styles.linha}></hr>        
            <footer className={styles.footer}>
                <ul className={styles.footer__membros}>
                    <li className={styles.footer_membros__item}>João Vitor Vicente</li>
                    <li className={styles.footer_membros__item}>RM98938</li>
                    <li className={styles.footer_membros__item}>1TDSPZ</li>
                    <li className={styles.footer_membros__item}>Resposive Web Developer</li>
                </ul>
                <ul className={styles.footer__membros}>
                    <li className={styles.footer_membros__item}>Silas Henrique</li>
                    <li className={styles.footer_membros__item}>RM98965</li>
                    <li className={styles.footer_membros__item}>1TDSPZ</li>
                    <li className={styles.footer_membros__item}>TX</li>
                </ul> 
                <ul className={styles.footer__membros}>
                    <li className={styles.footer_membros__item}>Eduardo</li>
                    <li className={styles.footer_membros__item}>RM98890</li>
                    <li className={styles.footer_membros__item}>1TDSPZ</li>
                    <li className={styles.footer_membros__item}>Python e Banco</li>
                </ul> 
                <ul className={styles.footer__membros}>
                    <li className={styles.footer_membros__item}>Luiz Felipe Biozzola</li>
                    <li className={styles.footer_membros__item}>RM99250</li>
                    <li className={styles.footer_membros__item}>1TDSPZ</li>
                    <li className={styles.footer_membros__item}>Java e Banco</li>
                </ul>   
                <ul className={styles.footer__membros}>
                    <li className={styles.footer_membros__item}>Jeffeson Mendes</li>
                    <li className={styles.footer_membros__item}>RM552052</li>
                    <li className={styles.footer_membros__item}>1TDSPZ</li>
                    <li className={styles.footer_membros__item}>Ia e ChatBot</li>
                </ul>     
            </footer>       
        </>
    )
}