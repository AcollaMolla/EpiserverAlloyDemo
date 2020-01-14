import React, {Component} from 'react';

class StartPage extends Component{
	constructor(props) {
		super(props)
		this.state = {
			PageDescription: null
		}
	}
	
	componentDidMount(){
		console.log(this.props.apiBase);
		console.log(this.props.startPageID);
			fetch(this.props.apiBase + '/content/' + this.props.startPageID, {
				headers:{
					'Accept': 'application/json',
					'Accept-Language' : 'en'
				}
			})
			.then( response => response.json() )
			.then( (responseData) =>
			{this.setState({PageDescription : responseData.teaserText.value })})
	}
	
	render(){
		return(
			<div class="page-description">
				{this.state.PageDescription ? <p>{this.state.PageDescription}</p> : <p>Loading...</p>}
			</div>
		);
	}
}

export default StartPage;