import React, {Component} from 'react';

class JumbotronBlock extends Component{
    constructor(props){
        super(props)
        //State comes here...
    }

    componentDidMount(){
        console.log("jumbotronblock" + this.props);
    }

    render(){
		return(
			<h1>todo</h1>
		);
	}
}
export default JumbotronBlock;