var React = require('react')
	, App = require('./components/App.jsx')
	, HomePage = require('./components/HomePage.jsx')

window.React = React

if (typeof window !== 'undefined') {
	React.render(React.createElement(App, data), document.getElementById('app'))
}
