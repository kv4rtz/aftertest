import Container from "@/components/Container/Container"
import styles from './NavBar.module.css'
import Link from "next/link"
import links from "@/components/NavBar/Links"

const NavBar = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.wrapper}>
                    <Link href={'/'} className={styles.logo}>AFTER 2033</Link>
                    <nav className={styles.nav}>
                        <ul className={styles.list}>
                            {links.map((el, idx) => (
                                idx === 0 ? <li key={idx} className={styles.item}><Link href={el.link}>{el.text}</Link></li> : null
                            ))}
                            <div className={styles.right}>
                                {links.map((el, idx) => (
                                    idx > 0 ? <li key={idx} className={styles.item}><Link href={el.link}>{el.text}</Link></li> : null
                                ))}
                            </div>
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    )
}

export default NavBar