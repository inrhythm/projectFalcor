import React from "react";

export default props => {

	const changeHandler = event => props.setFilter((event.target).value)

	return (
		<div className="filter-dropdown-div">
			<label>Take a look at all our awesome people</label> 
			<select className="filter-dropdown" id="filterDropdown" onChange={changeHandler}>
				<option value="all">Everyone</option>
				<option value="dev">Development</option>
				<option value="ops">Operations</option>
				<option value="sales">Sales</option>
			</select>
		</div>
	)
};
