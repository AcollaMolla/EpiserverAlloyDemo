import React, {Component} from 'react';
import './App.css';

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			StartPageID: null,
			ImageURL: null
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
			})
		}
	}
	
	render(){
		return(
			<div className="App">
			<header className="App-header">
				<img src={'http://localhost:58645/' + this.state.ImageURL} className="App-logo" alt="logo" />
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
