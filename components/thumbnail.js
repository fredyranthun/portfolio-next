import Image from 'next/image'
import styles from './thumbnail.module.scss'
import Link from 'next/link'

export default function Thumbnail(props) {

    return (
        <div className={styles.thumbnailContainer}>
            <Image
                className={styles.thumbnailImage}
                src={props.imageUrl}
                alt={props.title}
                width={344 / 2}
                height={611 / 2}
                quality={100}
            ></Image>
            <div className={styles.thumbnailText}>
                <Link
                    href={props.linkProject}

                ><a className={styles.titleLink}>{props.title}</a></Link>
                <div>{props.description}</div>
            </div>
        </div>
    )
}