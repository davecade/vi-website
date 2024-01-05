import React from "react";
import styles from "./Hero.module.scss";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const mini_portraits = [
	"/images/avatar1.jpg",
	"/images/avatar2.jpg",
	"/images/avatar3.jpg",
	"/images/avatar4.jpg",
];

const Hero = () => {
	return (
		<div className={styles.hero_container}>
			<div className={styles.hero_content}>
				<div className={styles.hero_content_container}>
					<div className={styles.ratings_container}>
						<div className={styles.image_container}>
							{mini_portraits.map((url, i) => {
								return (
									<Image
										key={i}
										src={url}
										height={50}
										width={50}
										alt="Description for the image"
										className={styles.mini_portrait}
									/>
								);
							})}
						</div>
						<div className={styles.star_ratings_container}>
							<div className={styles.stars_container}>
								{Array(5)
									.fill()
									.map((_, i) => (
										<FontAwesomeIcon key={i} icon={faStar} color="#ffba07" />
									))}
							</div>
							<p className={styles.ratings_text}>
								Rated 5 out of 5 by 15,000+ students
							</p>
						</div>
					</div>
					<h1 className={styles.hero_content_message}>
						Learn the skills of tomorrow, today
					</h1>
					<p className={styles.hero_content_description}>
						Convallis vivamus at cras porta nibh velit aliquam eget in faucibus
						mi tristique aliquam ultrices sit cras nascetur in elementum
						placerat sed viverra risus in turpis vitae sed est tincidunt vitae.
					</p>
					<div className={styles.button_container}>
						<Button>Explore Courses</Button>
						<Button type="secondary" className={styles.learn_more_button}>
							Learn more
						</Button>
					</div>
				</div>
			</div>
			<div className={styles.hero_portrait}>
				<Image
					src={"/images/portrait.png"}
					height={735}
					width={690}
					alt="Description for the image"
					className={styles.hero_portrait_image}
				/>
				<div className={styles.hero_portrait_image}></div>
			</div>
		</div>
	);
};

export default Hero;
