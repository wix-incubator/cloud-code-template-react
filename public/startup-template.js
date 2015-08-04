export default React.createClass({
	displayName: 'StartupTemplate',
	render: function () {
		return ( < p className = "container-text" > {
			this.props.message
		} < /p>);
	}
});
