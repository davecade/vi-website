import React from "react";
import styles from "./OurCourses.module.scss";

const OurCourses = () => {
	return (
		<div className={styles.our_courses_container}>
			<div className={styles.heading_container}>
				<h1 className={styles.heading}>OUR COURSES</h1>
			</div>
			<h2 className={styles.subtitle}>Browse our popular courses</h2>
		</div>
	);
};

export default OurCourses;
