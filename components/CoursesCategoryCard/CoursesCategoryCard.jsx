import React from "react";
import styles from "./CoursesCategoryCard.module.scss";
import Image from "next/image";

const CoursesCategoryCard = ({ url, label }) => {
	return (
		<div className={styles.our_courses_option_container}>
			<Image
				src={url} // replace with your image path
				alt={""}
				width={50} // set your image's width
				height={50} // set your image's height
				className={styles.image}
			/>
			<h4>{label}</h4>
		</div>
	);
};

export default CoursesCategoryCard;
