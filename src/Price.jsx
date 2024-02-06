export default function Price({ oldPrice, newPrice }) {
	let oldstyle = {
		textDecorationLine: "line-through",
		color: "grey",
	};

	let newstyle = {
		color: "green",
		fontWeight: "bolder",
	};

	let style = {
		backgroundColor: "#e0c367",
		height: "30px",
		borderBottomLeftRadius: "10px",
		borderBottomRightRadius: "10px",
	};

	return (
		<div style={style}>
			<span style={oldstyle}>{oldPrice} </span>
			&nbsp; &nbsp; &nbsp;
			<span style={newstyle}>{newPrice}</span>
		</div>
	);
}
