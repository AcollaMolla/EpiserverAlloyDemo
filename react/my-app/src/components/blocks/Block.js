import React, {Component} from 'react';

class Block extends Component{
    constructor(props){
        super(props)
        this.state = {
            children: null
        }
    }

    componentDidMount(){
        var children = [];
        this.props.children.forEach(element => {
            fetch(this.props.apiBase + '/content/' + element.contentLink.id, {
                headers:{
                    'Accept': 'application/json',
                    'Accept-Language' : 'en'
                }
            })
            .then( response => response.json() )
            .then( (responseData) => children.push(responseData))
        });
        this.setState({children : children});
        console.log(this.state);
    }

    render(){
        console.log(this.state.children);
		return(
            <h1>{this.state.children ? this.state.children[0].name : 'Loading...'}</h1>
		);
	}

}

export default Block