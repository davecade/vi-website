import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLayerGroup,
	faSearch,
	faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

const Navbar = () => {
	const [isHovered, setHovered] = useState(false);

	return (
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
						icon={faChevronDown}
						size={"1x"}
						className={`${styles.chevron} ${
							isHovered ? styles.rotate : ""
						}`}
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
				<Button type='primary'>Get Started</Button>
			</div>
		</div>
	);
};

export default Navbar;
