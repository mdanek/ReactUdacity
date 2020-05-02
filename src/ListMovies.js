import React, { Component } from 'react';

class ListMovies extends Component {
	render() {
    	return (
       		<ul>
          	{this.props.profiles.map(profile=>             
           	<li key={profile.id}>
          	{this.props.users[profile.userID].name} favorite movie is {this.props.movies[profile.favoriteMovieID].name}.
          	</li>
        	)}
        	</ul>
        );
    }
}

export default ListMovies;