import React, {Component} from 'react'

export default class HomePage extends Component {
	render() {
		return (
			<div>
				<h1>Home</h1>

				<a href="/auth/meetup">Login with Meetup</a> <br/>
				<a href="/auth/logout">Logout</a>
			</div>
		)
	}
}
