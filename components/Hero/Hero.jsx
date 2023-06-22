import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
	return (
		<div className={`${styles.hero_portrait_container} ${styles.cart}`}>
			<div className={styles.hero_content}></div>
			<div className={styles.hero_portrait}>
				<div className={styles.portrait_image}></div>
			</div>
		</div>
	);
};

export default Hero;
