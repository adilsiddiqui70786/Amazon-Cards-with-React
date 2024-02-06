import Card from "./Card";

function CardBox() {
	let styles = {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
	};

	return (
		<div style={styles} className="CardBox">
			<Card title="Logitech MX master" idx={0} />
			<Card title="Apple Watch (1st Gen)" idx={1} />
			<Card title="Boat Rozers 255ANC" idx={2} />
			<Card title="Petronics V2 2k23" idx={3} />
		</div>
	);
}

export default CardBox;
