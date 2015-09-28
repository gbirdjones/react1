'use strict';
var React = require('react');
var HelloComponent = require('./components/helloComponent.js');
var FormComponent = require('./components/jobForm.js');
var HeaderComponent = require('./components/HeaderComponent.js');


var mainElement = document.getElementById('main-content');

React.render(
	<div>
	<HeaderComponent></HeaderComponent>
	<div className="divAlign">
		<FormComponent></FormComponent>
	</div>
	<div className="divAlign">
		<HelloComponent></HelloComponent>
	</div>
	</div>,
	mainElement
);