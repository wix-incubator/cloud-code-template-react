import StartupTemplate from 'public/startup-template';

React.render(
	React.createElement(StartupTemplate, {
		message: "Add your HTML here."
	}),
	document.getElementById('container')
);
