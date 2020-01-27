import React, {Component} from 'react';
import Block from './blocks/Block';

class StartPage extends Component{
	constructor(props) {
		super(props)
		this.state = {
			PageDescription: null,
			MainContentAreaItems: null
		}
	}
	
	componentDidMount(){
			fetch(this.props.apiBase + '/content/' + this.props.startPageID, {
				headers:{
					'Accept': 'application/json',
					'Accept-Language' : 'en'
				}
			})
			.then( response => response.json() )
			.then( (responseData) =>
			{this.setState({PageDescription : responseData.teaserText.value, MainContentAreaItems : responseData.mainContentArea.value })})
	}
	
	render(){
		return(
			<div className="container">
				<div className="row"></div>
				<div className="row equal-height">
						{this.state.MainContentAreaItems ? <Block apiBase={this.props.apiBase} children={this.state.MainContentAreaItems}/> : null}
				</div>
				<div className="row"></div>
			</div>
		);
	}
}

export default StartPage;