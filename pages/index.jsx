import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.scss";
import Head from "next/head";

export default function Home() {
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
				<Navbar />
				<Hero />
			</div>
		</>
	);
}
