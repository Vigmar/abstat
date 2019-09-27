import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userService } from '../_services';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";

import { AppBar } from '../AppBar/AppBar';


import Switch from "@material-ui/core/Switch";



class SellPointPage extends React.Component {

		static propTypes = {
			classes: PropTypes.object.isRequired
		  };

	constructor(props)
	{
		super(props);
	
		this.state = {showModal:false};
		
	
	}

    componentDidMount() {
        //this.props.dispatch(sellpointActions.getAll("sellpoint_get_list",{}));
		
		userService.getData("sellpoint_get_list",{}).then((_res) => {
        //console.log(_res.data);	
      });
		
    }
	


    render() {
	
		// <MuiTreeView tree={tree} onLeafClick={(e)=>this.leafClick(e)}/>
	
       
        return (
		<div>TEST</div>
        );
    }
}


function mapStateToProps(state) {
    const { sPoints, authentication } = state;
    const { sPoint } = authentication;
    return {
        sPoint,
        sPoints
    };
}

const connectedSellPointPage = connect(mapStateToProps)(SellPointPage);
export { connectedSellPointPage as SellPointPage };