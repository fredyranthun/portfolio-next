import styles from '../styles/Projects.module.scss'
import Layout from '../components/layout'
import Thumbnail from '../components/thumbnail'
import fetchFromCMS from '../lib/service';
import processMarkdown from '../lib/processMarkdown';

export default function Projects({ portfolioItems }) {
    console.log(portfolioItems)

    return (
        <Layout>
            <div className={styles.projectsContainer}>
                {portfolioItems.map((portfolio, index) => (
                    <Thumbnail
                        title={portfolio.Headline}
                        description={(portfolio.Content)}
                        key={index}
                        imageUrl={`/${portfolio.image.name}`}
                        linkProject={portfolio.link}
                    />
                ))
                }
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const portfolioItems = await fetchFromCMS('portfolios');


    return {
        props: { portfolioItems },
        revalidate: 1
    }
}