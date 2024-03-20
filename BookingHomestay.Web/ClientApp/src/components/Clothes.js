import React, { Component } from 'react';

const Clothes = (props) => {
	console.log(props);

	return (
		<div>
			<h1> {props.children} </h1>
			<ul>
				<li>
					<b>Name: </b> {props.name}
				</li>
				<li>
					<b>Type: </b> {props.type}
				</li>
				<li>
					<b>Color:</b> {props.color}
				</li>
			</ul>
		</div>
	);
};

export default Clothes;