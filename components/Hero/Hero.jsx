import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
	return (
		<div className={styles.hero_container}>
			<div className={styles.hero_content}>
				<h1 className={styles.hero_content_message}>Learn the skills of tomorrow, today</h1>
			</div>
			<div className={styles.hero_portrait}>
				<div className={styles.hero_portrait_image}></div>
			</div>
		</div>
	);
};

export default Hero;
