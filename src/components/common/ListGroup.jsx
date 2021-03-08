import React from "react";

export default function ListGroup({
	items,
	valueProperty,
	textProperty,
	selectedItem,
	onItemSelect,
}) {
	return (
		<ul className="list-group">
			{items.map((item) => (
				<li
					key={item[valueProperty]}
					className={item === selectedItem ? "list-group-item active" : "list-group-item"}
					onClick={() => onItemSelect(item)}>
					{item[textProperty]}
				</li>
			))}
		</ul>
	);
}

ListGroup.defaultProps = {
	valueProperty: "_id",
	textProperty: "name",
};
