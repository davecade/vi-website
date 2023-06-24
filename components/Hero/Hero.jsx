import React from "react";
import styles from "./Hero.module.scss";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
	return (
		<div className={styles.hero_container}>
			<div className={styles.hero_content}>
				<div className={styles.hero_content_container}>
					<div>
						<div>
							<img
								src="../../public/assets/avatar1.jpg"
								alt=""
								height={100}
								width={100}
							/>
						</div>
						<div>
							<div>
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
								<FontAwesomeIcon icon={faStar} />
							</div>
							<p>Rated 5 out of 5 by 15,000+ students</p>
						</div>
					</div>
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
						<Button
							type="secondary"
							className={styles.learn_more_button}
						>
							Learn more
						</Button>
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
