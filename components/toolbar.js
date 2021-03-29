import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css';
import Link from 'next/link'



function toolbar() {
    
    return (
        <>
        <div className={styles.logocontainer}>
            <img src="https://logodix.com/logo/570888.png" className={styles.logo}/>
        </div>
        <div className={styles.main}>
            <div><Link href="/" className={styles.links}>Home</Link></div>
            <div><Link href="/feed/1" className={styles.links}>Feed</Link></div>
            <div><Link href="/about" className={styles.links}>About</Link></div>
            <div><Link href="https://www.mozanta.com" className={styles.links} >Mozanta</Link></div>
        </div>
        </>
       
    )
}

export default toolbar
