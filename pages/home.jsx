import { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.scss";
import Head from "next/head";

export default function Home() {
	const [loadingBarWidth, setLoadingBarWidth] = useState("0%");
	const [loadingBarOpacity, setLoadingBarOpacity] = useState(1);

	useEffect(() => {
		setLoadingBarWidth("100%");
		const timer = setTimeout(() => {
			setLoadingBarOpacity(0);
		}, 900);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<Head>
				<title>Vi's Learning</title>
				<meta
					name="description"
					content="Learn about really cool stuff!!"
				/>
			</Head>
			<div className={styles.home_container}>
				<div
					className={styles.loading_bar}
					style={{
						width: loadingBarWidth,
						opacity: loadingBarOpacity,
					}}
				></div>
				<Navbar />
				<Hero />
			</div>
		</>
	);
}
