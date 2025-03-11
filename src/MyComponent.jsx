//import {useEffect} from "react"
export const MyComponent = (props) => {
	const date = new Date().toLocaleString();

	// useEffect(() => {
	// 	console.log(date);

	// }, []);

	return (
		<div>{date}</div>
	);
}
