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
				{this.state.children ? <Header pages={this.state.children} StartPageId={ this.state.StartPageId }/> : <p>Loading...</p>}
				<img src={'http://localhost:58645/' + this.state.ImageURL} className="App-logo" alt="logo" />
				<Startpage apiBase={this.props.apiBase} startPageID={5} />
			</div>
		</Router>
		);
	}
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
