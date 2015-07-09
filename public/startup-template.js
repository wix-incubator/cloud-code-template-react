export default React.createClass({
	displayName: 'StartupTemplate',
	render: function () {
		return ( < p class = "container-text" > {
			this.props.message
		} < /p>);
	}
});
