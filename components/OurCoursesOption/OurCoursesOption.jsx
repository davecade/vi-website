import React from "react";
import styles from "./OurCoursesOption.module.scss";
import Image from "next/image";

const OurCoursesOption = ({ url, label }) => {
	return (
		<div>
			<div className={styles.our_courses_option_container}>
				<Image
					src={url} // replace with your image path
					alt={""}
					width={50} // set your image's width
					height={50} // set your image's height
				/>
				<h4>{label}</h4>
			</div>
		</div>
	);
};

export default OurCoursesOption;
