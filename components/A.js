import Link from "next/link";
import styles from '../styles/A.module.css'

export default function ({ text, href, isLegasy = false }) {
	if (isLegasy)
		return (
			<Link legacyBehavior href={href}>
				<a className={styles.link}>{text}</a>
			</Link>
		)
	else
		return (
			<Link href={href}>
				{text}
			</Link>
		)

}