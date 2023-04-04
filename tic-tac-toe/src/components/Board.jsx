import React from "react";

const list = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function Board(props) {
	const { handleClick, boxesRef, xMarkedBoxes, oMarkedBoxes } = props;
	return (
		<main className="grid">
			{list.map((item, index) => (
				<button
					key={index}
					className="box player-turn"
					ref={el => (boxesRef.current[index] = el)}
					onClick={() => handleClick(index)}
				>
					{xMarkedBoxes[index] ? (
						<>
							<div className="background blue"></div>
							<i className="fa-sharp fa-solid fa-xmark"></i>
						</>
					) : (
						""
					)}
					{oMarkedBoxes[index] ? (
						<>
							<div className="background red"></div>
							<i className="fa-solid fa-o"></i>
						</>
					) : (
						""
					)}
				</button>
			))}
		</main>
	);
}

export default Board;
