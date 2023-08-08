import React from "react";
import styles from "./OurCourses.module.scss";
import OurCoursesOption from "../OurCoursesOption/OurCoursesOption";

const OurCourses = () => {
	return (
		<div className={styles.our_courses_container}>
			<div className={styles.heading_container}>
				<h1 className={styles.heading}>OUR COURSES</h1>
			</div>
			<h2 className={styles.subtitle}>Browse our popular courses</h2>
			<p className={styles.message}>
				Sed sit mauris habitant pellentesque leo ac donec sit interdum accumsan
				morbi gravida hendrerit amet iaculis nibh nibh proin a vulputate turpis
				amet.
			</p>
			<div className={styles.our_courses_options}>
				<OurCoursesOption
					url={"/icons/all-categories-icon-learnbook.svg"}
					label={"All"}
				/>
				<OurCoursesOption
					url={"/icons/design-category-icon-learnbook.svg"}
					label={"All"}
				/>
				<OurCoursesOption
					url={"/icons/development-category-icon-learnbook.svg"}
					label={"All"}
				/>
				<OurCoursesOption
					url={"/icons/marketing-category-icon-learnbook.svg"}
					label={"All"}
				/>
			</div>
		</div>
	);
};

export default OurCourses;
