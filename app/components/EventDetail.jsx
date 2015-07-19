import React, {Component, PropTypes, findDOMNode} from 'react'

export default class StreamPage extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		var attendees = []
		return (
			<div>
				<h1>Single event</h1>

				<ul>
				{attendees.map(function(attendee){
					return (
							<li>{attendee}</li>
					)
				})}
				</ul>
			</div>
		)
	}
}
