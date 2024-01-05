import React from "react";
import styles from "./OurCourses.module.scss";
import CoursesCategoryCard from "../CoursesCategoryCard/CoursesCategoryCard";
import { capitalizeFirstLetter } from "../../utils/utils";

const categoryURLs = {
	all: "/icons/all-categories-icon-learnbook.svg",
	design: "/icons/design-category-icon-learnbook.svg",
	development: "/icons/development-category-icon-learnbook.svg",
	marketing: "/icons/marketing-category-icon-learnbook.svg",
};

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
			<div className={styles.our_courses_category_tabs}>
				{Object.keys(categoryURLs).map((category, i) => {
					return (
						<CoursesCategoryCard
							key={i}
							url={categoryURLs[category]}
							label={capitalizeFirstLetter(category)}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default OurCourses;
