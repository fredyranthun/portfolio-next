import styles from './layout.module.scss';
import Stars from './Stars';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Home from '../pages';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Fredy's next App</title>
                <meta name="Fredy Ranthun Portfolio Website" content="Next website portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Stars />
            <nav className={styles.navBar}>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/contact'>Contact</Link>
            </nav>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
                <a
                    href="https://twitter.com/fredy_ranthun"
                    target="_blank"
                ><FaTwitter className={styles.icon} /></a>
                <a
                    href="https://github.com/fredyranthun"
                    target="_blank"
                ><FaGithub className={styles.icon} /></a>
            </footer>
        </div>
    )
}