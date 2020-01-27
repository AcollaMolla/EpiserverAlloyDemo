import React, {Component} from 'react';
import JumbotronBlock from './JumbotronBlock'

class Block extends Component{
    constructor(props){
        super(props)
        this.state = {
            children: []
        }
    }

    componentDidMount(){
        this.props.children.forEach(element => {
            fetch(this.props.apiBase + '/content/' + element.contentLink.id, {
                headers:{
                    'Accept': 'application/json',
                    'Accept-Language' : 'en'
                }
            })
            .then( response => response.json() )
            .then( (responseData) => this.state.children.push(responseData))
        });
    }

    render(){
		return(
            this.state.children.length > 0 ? <JumbotronBlock block={this.state.children[0]}/> : <p>Loading block...</p>
		);
	}

}

export default Block