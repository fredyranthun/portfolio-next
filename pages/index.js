import styles from '../styles/Home.module.scss'
import Layout from '../components/layout';
import { motion } from 'framer-motion';


export default function Home() {
  const homeWords = [
    'FrontEnd',
    '&#8614;',
    'code',
    '&#8614;',
    'HTML',
    '&#8651;',
    'CSS',
    '&#8651;',
    'JS',
    '&#8611;',
    'React',
    '&#8611;',
    'SASS',
    '&#8649;',
    'Modules',
    '&#8649;',
    'Bootstrap',
    '&#8649;',
    'Next',
    '&#8674;',
    'Fullstack',
    '&#8674;',
    'toBe'
  ]

  const homeSpans = homeWords.map((value, index) => (
    <motion.span
      key={index}
      className={styles.homeText}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeOut', delay: index/5, duration: 1 }} 
    >
      {value.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec))}
    </motion.span>
  ))
  return (
    <Layout>

      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, type: 'spring', damping: 5, stiffness: 100}}
      >
        <a href="https://github.com/fredyranthun">freddy's.home</a>
      </motion.h1>

      <motion.div className={styles.grid}>
        {homeSpans}
      </motion.div>

    </Layout>
  )
}


