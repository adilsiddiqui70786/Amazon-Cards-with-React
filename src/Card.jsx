import "./Card.css";
import Price from "./Price.jsx";

function Card({ title, idx }) {
	let oldPrice = ["13,500", "20,000", "5,999", "5,499"];
	let newPrice = ["9,999", "14,999", "3,999", "4,499"];
	let description = [
		["Logitech G 402 Hyperion", "LeightWeight with Wireless"],
		["Logitech G 502 Hero", "RGB with 11 Buttons"],
		["Redgear A-20", "RGB with 6 Buttons"],
		["Devcool M-20", "RGB with 7 Buttons"],
	];

	return (
		<div className="Card">
			<h2>{title}</h2>
			<p>{description[idx][0]}</p>
			<p>{description[idx][1]}</p>
			<Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
		</div>
	);
}

export default Card;
