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
        profile: [
            {name:'lastname',title:'Фамилия',val:"",type:"text"},
            {name:'firstname',title:'Имя',val:"",type:"text"},    
            {name:'middlename',title:'Отчество',val:"",type:"text"},    
            {name:'bdate',title:'Дата рождения',val:"",type:"date"},    
            {name:'city',title:'Место проживания',val:"",type:"select_place"},    
            {name:'profession',title:'Вид деятельности',val:"",type:"select_job"},    
            {name:'monthincome',title:'Предолагаемый месячный доход',val:"",type:"number"},    
            {name:'employers',title:'Количество наемных работников',val:"",type:"number"}, 
            {name:'employersincome',title:'Средняя зарплата наемных работников',val:"",type:"number"}, 
        ],
        
        cities: [
            {id: 0,name:'Москва'},
            {id: 1,name:'Спб'},
            {id: 2,name:'Регион 1'},
            {id: 3,name:'Регион 2'},
            ],
            
        };
		
   
	
	}
    
   

    componentDidMount() {
   	
    }
	
	componentWillReceiveProps(props)
	{
		console.log(props);
	}
	
 

    render() {
        const { user, users } = this.props;
        
        let { profile, cities } = this.state;
        
        var self = this;
            
    
        
        return (
			<div>
			<AppBar/>
			<div>
			  <img src="../images/home1.png" style={{width:window.innerWidth, height: window.innerHeight-70}}/>        
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