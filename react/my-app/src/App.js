import React, {Component} from 'react';
import './App.css';
import Startpage from './components/StartPage.js';
import Header from './components/Header.js';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			StartPageID: null,
			ImageURL: null,
			children: []
		}
	}
	
	componentDidMount(){
		if(this.props.apiBase){
			fetch(this.props.apiBase + '/site', {
				headers:{
					'Accept': 'application/json'
				}
			})
			.then( response => response.json() )
			.then( (responseData) =>
			{this.setState({StartPageID : responseData[0].contentRoots.startPage.id })
			
				fetch(this.props.apiBase + '/content/' + this.state.StartPageID, {
					headers:{
						'Accept': 'application/json'
					}
				})
				.then(response => response.json())
				.then((responseData) =>
				{this.setState({ImageURL : responseData.siteLogotype.url.value})})
					fetch(this.props.apiBase + '/content/' + this.state.StartPageID + '/children', {
						headers: {
							'Accept': 'application/json',
							'Accept-Language': 'en'
						}
					})
					.then( response => response.json() )
					.then( (responseData) => this.setState({children : [...responseData]}))
			})
		}
	}
	
	render(){
		return(
		<Router>
			<div className="App">
				<img src={'http://localhost:58645/' + this.state.ImageURL} className="App-logo" alt="logo" />
				<Startpage apiBase={this.props.apiBase} startPageID={5} />
			</div>
		</Router>
		);
	}
}

export default App;
