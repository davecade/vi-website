import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLayerGroup,
	faSearch,
	faChevronUp,
	faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	const [isHovered, setHovered] = useState(false);

	return (
		//Left Side
		//  Learnify Logo with Learnify X
		//  Home
		//  About
		//  Blog
		//  Pages with down shevron
		//  Cart with number of items
		//Right Side
		//  Search Bar
		// Custom Button
		<div className={styles.navbar_container}>
			<div className={styles.left_side}>
				<div className={styles.title}>
					<FontAwesomeIcon
						icon={faLayerGroup}
						size={"2x"}
						className={styles.title_icon}
					/>
					<h2>Vi's Learning</h2>
				</div>
				<div className={styles.navbar_link}>Home</div>
				<div className={styles.navbar_link}>About</div>
				<div className={styles.navbar_link}>Blog</div>
				<div
					className={styles.navbar_link}
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
				>
					<p>Pages</p>
					<FontAwesomeIcon
						icon={isHovered ? faChevronDown : faChevronUp}
						size={"1x"}
						className={styles.chevron}
					/>
				</div>
				<div className={styles.navbar_link}>Cart(0)</div>
			</div>
			<div className={styles.right_side}>
				<div className={styles.search}>
					<FontAwesomeIcon
						icon={faSearch}
						size={"2x"}
						className={styles.search_icon}
					/>
				</div>
				<button className={styles.title_button}>Get Started</button>
			</div>
		</div>
	);
};

export default Navbar;
