import React from 'react';

function SearchBar(props) {

    const dataSearch = e => {
      const value = e.target.value.toLowerCase();

      const filter = props.data.filter(user => {
        return user.name.toLowerCase().includes(value);
      });

      props.update({
        data: filter,
        active: 0,
        term: value
      });
    };

  	return (
    	<div className="searchbar">
      		<input
        		value={props.term}
        		type="text"
        		className="input-search"
        		placeholder="Search people by name..."
        		onChange={dataSearch}
      		/>
    	</div>
  	)

}

export default SearchBar;