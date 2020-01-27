import React, {Component} from 'react';

class JumbotronBlock extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
    }

    componentDidMount(){
		this.setState({data : this.props.block})
    }

    render(){
		return(
            <div className="block  jumbotronblock full span12">
                <div className="row">
                    <div className="span4 hidden-tablet hidden-phone">
                        <img src={this.state.data ? 'http://localhost:58645/' + this.state.data.image.value.url : null} alt=""/>
                    </div>
                    <div className="span8">
                        <h1 className="jumbotron">{this.state.data ? this.state.data.heading.value : 'Loading...'}</h1>
                        <p className="subHeader">{this.state.data ? this.state.data.subHeading.value : 'Loading...'}</p>
                        <a className="btn-blue right" href={this.state.data ? 'http://localhost:58645/' + this.state.data.buttonLink.value : null} id="jumboLink">Read more</a>
                    </div>
                </div>
            </div>
		);
	}
}
export default JumbotronBlock;