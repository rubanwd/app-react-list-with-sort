import React from 'react';

function UserActive(props) {

	
	if (!props.data) { return <h3>Nothing found :(</h3>; }
	

	let users = props.data;

	let active = props.active;

	let user = users[active];



	console.log('datka11', user);
	
    return (

    	<div>

    		<img className="active-image" src={ require('../img/faces/' + user.image + '.svg') } width="200" height="200" alt={user.image} />

    		<div className="active-info">
    			<h2>{user.name}</h2>
    			<h3>{user.age} years</h3>
    			<h3>{user.name} says: {user.phrase}</h3>
    		</div>

    	</div>
    	)

};
export default UserActive;