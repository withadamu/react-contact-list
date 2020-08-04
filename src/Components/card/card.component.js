import React from 'react';
import './card.style.css';


export const Card = props => (
	<div className="card-container">
		<img alt="monsters" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
		<h2> { props.monster.name } </h2>
		<p><i className="fa fa-envelope"></i> { props.monster.email } </p>
		<p><i className="fa fa-phone"></i> { props.monster.phone } </p>
	</div>
)