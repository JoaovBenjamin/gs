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
                    <li className={styles.footer_membros__item}>João Vitor Vicente</li>
                    <li className={styles.footer_membros__item}>RM98938</li>
                    <li className={styles.footer_membros__item}>1TDSPZ</li>
                    <li className={styles.footer_membros__item}>Resposive Web Developer</li>
                </ul> 
                <ul className={styles.footer__membros}>
                    <li className={styles.footer_membros__item}>João Vitor Vicente</li>
                    <li className={styles.footer_membros__item}>RM98938</li>
                    <li className={styles.footer_membros__item}>1TDSPZ</li>
                    <li className={styles.footer_membros__item}>Resposive Web Developer</li>
                </ul> 
                <ul className={styles.footer__membros}>
                    <li className={styles.footer_membros__item}>João Vitor Vicente</li>
                    <li className={styles.footer_membros__item}>RM98938</li>
                    <li className={styles.footer_membros__item}>1TDSPZ</li>
                    <li className={styles.footer_membros__item}>Resposive Web Developer</li>
                </ul>   
                <ul className={styles.footer__membros}>
                    <li className={styles.footer_membros__item}>João Vitor Vicente</li>
                    <li className={styles.footer_membros__item}>RM98938</li>
                    <li className={styles.footer_membros__item}>1TDSPZ</li>
                    <li className={styles.footer_membros__item}>Resposive Web Developer</li>
                </ul>     
            </footer>       
        </>
    )
}