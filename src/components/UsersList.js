import React from 'react';
import loader from '../img/throbber_13.gif';

function UsersList(props) {

	let users = props.data;

	console.log('datka', props.data);
	
    if (users) {

      	return (<ul> {users.map((item) => 
        			<li key={item.id} className="listItem" onClick={() => props.update({ active: item.id })}>
        				<img src={ require('../img/faces/' + item.image + '.svg') } width="80" height="80" alt={item.image} />
		            	<h4><b>{item.name}</b></h4>
		            	<h5>Age: {item.age}</h5>
		            	<h5>Phone: {item.phone}</h5>
		          	</li>)}
      			</ul>)
    }
    
    return <h3 className="loader"><img src={loader} width="100" height="100" alt="loading..." /></h3>;

};
export default UsersList;