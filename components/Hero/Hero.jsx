import React from "react";
import styles from "./Hero.module.scss";
import Button from "../Button/Button";

const Hero = () => {
	return (
		<div className={styles.hero_container}>
			<div className={styles.hero_content}>
				<div className={styles.hero_content_container}>
					<h1 className={styles.hero_content_message}>
						Learn the skills of tomorrow, today
					</h1>
					<p className={styles.hero_content_description}>
						Convallis vivamus at cras porta nibh velit aliquam eget
						in faucibus mi tristique aliquam ultrices sit cras
						nascetur in elementum placerat sed viverra risus in
						turpis vitae sed est tincidunt vitae.
					</p>
                    <div className={styles.button_container}>
                        <Button>Explore Courses</Button>
                        <Button type='secondary'>Explore Courses</Button>
                    </div>
				</div>
			</div>
			<div className={styles.hero_portrait}>
				<div className={styles.hero_portrait_image}></div>
			</div>
		</div>
	);
};

export default Hero;
