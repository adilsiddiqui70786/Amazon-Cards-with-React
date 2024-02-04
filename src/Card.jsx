import "./Card.css";
import Price from "./Price.jsx";

function Card() {
	return (
		<div className="Card">
			<p>Title</p>
			<p>Description</p>
			<Price />
		</div>
	);
}

export default Card;
