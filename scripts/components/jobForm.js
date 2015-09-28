var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="formDiv">
			<form>
				<h3>Post Your Job</h3>
				<div>
				<div className="formHeader">Title</div>
				<input type="text" id="title" className="inputForm"/>
				</div>
				<div>
				<div className="formHeader">Company Name</div>
				<input type="text" id="compNmae" className="inputForm"/>
				</div>
				<div>
				<div className="formHeader">Location</div>
				<input type="text" id="location" className="inputForm"/>
				</div>
				<div>
				<div className="formHeader">Description</div>
				<textarea id="description" className="textarea"></textarea>
				</div>
				<div>
				<div className="formHeader">Title</div>
				<input type="tags" id="title" className="inputForm"/>
				</div>
				<button className="submit">Submit Job</button>

			</form>
			</div>

			);
	}
});	