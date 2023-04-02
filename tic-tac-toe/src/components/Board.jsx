import React, { useRef, useState } from "react";

const list = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function Board() {
	const [xMarkedBoxes, setXMarkedBoxes] = useState({});
	const xMarkedRef = useRef({});

	const handleClick = index => {
		xMarkedRef.current[index].classList.add("x-marked");
		setXMarkedBoxes(old => ({ ...old, [index]: true }));
	};

	return (
		<main className="grid">
			{list.map((item, index) => (
				<button
					key={index}
					className="box"
					ref={el => (xMarkedRef.current[index] = el)}
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
					{/* <i className="fa-solid fa-o"></i> */}
				</button>
			))}
		</main>
	);
}

export default Board;
