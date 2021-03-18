import React from "react";
import Proptypes from "prop-types";

const Todo = ({ todo, index, deleteTodo }) => {
	return (
		<>
			<div className="list">
				<h3>{todo}</h3>{" "}
				<button
					className="btn-delete"
					onClick={() => deleteTodo(index)}>
					x
				</button>
			</div>
		</>
	);
};

export default Todo;

Todo.propTypes = {
	todo: Proptypes.string,
	index: Proptypes.string,
	deleteTodo: Proptypes.string
};
