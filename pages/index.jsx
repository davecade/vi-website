import React, { useEffect, useState } from "react";
import Home from "./home";

const index = () => {
	const [firstLoad, setFirstLoad] = useState(true);

	useEffect(() => {
		setTimeout(() => setFirstLoad(false), 1000);
	}, []);

	return firstLoad ? <div></div> : <Home />;
};

export default index;
