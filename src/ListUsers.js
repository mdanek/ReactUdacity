import React, { Component } from 'react';

class ListUsers extends Component {
	render() {
    const { usersByMovie, users, movie, id } = this.props;

    return (
    <div>
    	<h4>{movie.name}</h4>
		<p>Liked by:</p>
		{usersByMovie[id] ?
			usersByMovie[id].map(i => `${users[i].name} `) :
			`No one liked this movie yet.`
    	}
	</div>
    )
    }
}

export default ListUsers