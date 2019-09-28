import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { userActions } from '../_actions';
import { userService } from '../_services';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconLeft from '@material-ui/icons/ArrowLeft';
import IconRight from '@material-ui/icons/ArrowRight';

import IconButton from '@material-ui/core/IconButton';



import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
  Lines,
  Line,
  Annotation
} from "react-simple-maps"

import { AppBar } from '../AppBar/AppBar';


class HomePage extends React.Component {

	constructor(props)
	{
		super(props);
		this.state = {showModal:false,
        steps:['Текст 1','Текст 2','Текст 3','Текст 4'],
		activeStep:0,
            stepX:0,
        };
		
   
	
	}
    
   

    componentDidMount() {
   	
    }
	
	componentWillReceiveProps(props)
	{
		console.log(props);
	}
	
	clickLeft = () =>
	{
		let { activeStep, stepX } = this.state;
		
		if (activeStep>0)
		{
			this.setState({activeStep:activeStep-1,stepX:stepX-window.innerWidth});
		}
		
	}
	
	clickRight = () => 
	{
		let { activeStep, stepX } = this.state;
		
		if (activeStep<3)
		{
			this.setState({activeStep:activeStep+1,stepX:stepX+window.innerWidth});
		}
	}
 

    render() {
        const { user, users } = this.props;
        
        let { activeStep } = this.state;
        
        var self = this;
            
		console.log(this.state);
        
        return (
			<div>
			<AppBar/>
			<div>
			<div>
			{activeStep == 0 && <img src="../images/home1.png" style={{width:window.innerWidth, height: window.innerHeight-70}}/>  }
			{activeStep == 1 && <img src="../images/home2.png" style={{width:window.innerWidth, height: window.innerHeight-70}}/>  }
			{activeStep == 2 && <img src="../images/home3.png" style={{width:window.innerWidth, height: window.innerHeight-70}}/>  }
			{activeStep == 3 && <img src="../images/home4.png" style={{width:window.innerWidth, height: window.innerHeight-70}}/>  }
						
			</div>
			<IconButton color="primary"
                                                        style={{width: 60, height: 60, position: 'absolute',  right: 10, top: window.innerHeight/2}}
                                                     onClick={this.clickRight}
                                            >
			  <IconRight style={{width: 40,height: 40}}/>
			  </IconButton>
			  	<IconButton color="primary"
                                                        style={{width: 60, height: 60, position: 'absolute', left: 10, top: window.innerHeight/2}}
                                                     onClick={this.clickLeft}
                                            >
			  <IconLeft style={{width: 40,height: 40}}/>
			  </IconButton>
            </div>
			</div>
			
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };