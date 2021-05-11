
import styles from '../styles/About.module.scss'
import Layout from '../components/layout';
import { useElementScroll, motion, useSpring, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';


export default function About() {
    const ref = useRef();
    const { scrollYProgress } = useElementScroll(ref);
    const [isComplete, setIsComplete] = useState(false);
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

    useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);
    return (
        <Layout>
            <div className={styles.aboutContainer}>
                <svg className={styles.progressIcon} viewBox="0 0 60 60">
                    <motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="royalBlue"
                        strokeDasharray="0 1"
                        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                        style={{
                            pathLength,
                            rotate: 90,
                            translateX: 5,
                            translateY: 5,
                            scaleX: -1 // Reverse direction of line animation
                        }}
                    />
                    <motion.path
                        fill="none"
                        strokeWidth="5"
                        stroke="royalBlue"
                        d="M14,26 L 22,33 L 35,16"
                        initial={false}
                        strokeDasharray="0 1"
                        animate={{ pathLength: isComplete ? 1 : 0 }}
                    />
                </svg>
                <motion.div
                    ref={ref}
                    className={styles.aboutText}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, type: 'spring', damping: 5, stiffness: 100 }}
                >
                    <p>Hello there :) My Name is Fredy, and I'm a Frontend Developer based in Curitiba, Brazil.</p>
                    <p>Currently, I am studying and working, and my objective is becoming a Fullstack
                developer and help community with open source projects.</p>
                    <p>I'm looking for fulltime jobs in web development, and I intend to study constantly to
                    enhance my knowledge, both in technologies I already work with and new technologies and
                frameworks.</p>
                    <p>Wanna check some of my skills and Projects?</p>
                </motion.div>
            </div>
        </Layout>
    )
}
