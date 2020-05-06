import React, { Component } from 'react';
import ListUsers from './ListUsers';

class ListMovies extends Component {
  render() {
    const { usersByMovie, users, movies } = this.props;
    
    return (
      	<ul>
      	{Object.keys(movies).map(id => 
			<li key={id}>
				<ListUsers 
       				usersByMovie={usersByMovie}
  					users={users}
					movie={movies[id]}
					id={id}
				/>
			</li>
    	)}
		</ul>
    )
    
  }
}

export default ListMovies