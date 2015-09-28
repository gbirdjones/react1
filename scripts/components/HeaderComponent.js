var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div id="nav">
				<div id="innerNav">
					<div id="logoCont">
						<img src="../../images/logo.png" id="logo"></img>
						<div id="logoText">Fresh Jobs</div>
					</div>
					<div className="nawElements">Jobs</div>
					<div className="nawElements">Companies</div>
					<div className="nawElements">Cities</div>
					<div className="nawElements">Why Fresh?</div>
					<div className="nawElements">For Employees</div>

				</div>
			</div>
			);
	}
});	