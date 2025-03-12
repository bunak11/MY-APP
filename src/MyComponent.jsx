import {useState} from 'react'

//const getTimeFromDate = (date) => date.toISOString().substring(11, 19);
export const MyComponent = () => {
	const [date, setDate] = useState(Math.random())

	setTimeout (() => {
		setDate(Math.random());
	}, 1000);



	return (
		<div>{date}</div>
	);
}
