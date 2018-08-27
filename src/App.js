import React, { Component } from "react";
import Login from './Login';
import Home from './Home';
import './w3.css';
import './fontawesome/font-awesome.min.css'; 
import { connect } from 'react-redux';

class App extends Component {


		componentDidMount(){
			console.log(this.props.isloggedin);
		}


	render() {
		if(this.props.isloggedin === false)
			return(
				<Login
				/>
			);
		
		

		if(this.props.isloggedin === true)
			return(
				
					<Home
					/>
				
			);
		}
	}		

const mapStateToProps = state => ({
	isloggedin: state.isloggedin
})	


export default connect(mapStateToProps)(App);
			
