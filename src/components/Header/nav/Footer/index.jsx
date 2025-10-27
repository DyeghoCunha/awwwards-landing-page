import styles from "./style.module.scss";

export default function index() {
	return (
		<div className={styles.footer}>
			<a href="https://www.linkedin.com/in/dyeghocunha" target="_blank">
				<p>LinkedIn</p>
			</a>
			<a
				href="https://wa.me/554792756286?text=Hello%2C%20I%20came%20from%20your%20website"
				target="_blank"
			>
				<p>WhatsApp</p>
			</a>
			<a href="https://github.com/DyeghoCunha" target="_blank">
				<p>GitHub</p>
			</a>
		</div>
	);
}
