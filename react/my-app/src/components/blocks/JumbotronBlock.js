import React, {Component} from 'react';

class JumbotronBlock extends Component{
    constructor(props){
        super(props)
        this.state = {
            children: null
        }
    }

    componentDidMount(){
        fetch(this.props.apiBase + '/content/' + this.props.children.contentLink.id, {
            headers:{
                'Accept': 'application/json',
                'Accept-Language' : 'en'
            }
        })
        .then( response => response.json() )
		.then( (responseData) =>
		{this.setState({children : responseData})})
    }

    render(){
		return(
            <div className="block  jumbotronblock full span12">
                <div className="row">
                    <div className="span4 hidden-tablet hidden-phone">
                        <img src={this.state.children ? 'http://localhost:58645/' + this.state.children.image.value.url : null} alt=""/>
                    </div>
                    <div className="span8">
                        <h1 className="jumbotron">{this.state.children ? this.state.children.heading.value : 'Loading...'}</h1>
                        <p className="subHeader">{this.state.children ? this.state.children.subHeading.value : 'Loading...'}</p>
                        <a className="btn-blue right" href={this.state.children ? 'http://localhost:58645/' + this.state.children.buttonLink.value : null} id="jumboLink">Read more</a>
                    </div>
                </div>
            </div>
		);
	}
}
export default JumbotronBlock;