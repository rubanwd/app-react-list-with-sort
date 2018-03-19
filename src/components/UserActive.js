import React from 'react';
import loader from '../img/throbber_13.gif';

function UserActive(props) {

	if (!props.data) { return <h3 className="loader"><img src={loader} width="100" height="100" alt="loading..." /></h3> }
	
	let user = props.data[props.active];

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