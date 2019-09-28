import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { connect } from 'react-redux';

import { userActions } from '../_actions';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const mainMenuItems = ["Перепись 2010","Текущая демографическая статистика","Перепись 2020","Социальная инфраструктура"];

const menu2010 = ["Численность","Плотность населения по субъектам","Соотношение город/село","Изменение чисденности населения по субъектам",
"Половозрастной состав населения","Состояние в браке","Национальный состав","Экономически активное население","Рождаемость"];


class ButtonAppBar extends React.Component {

	constructor(props)
	{
		super(props);
		this.props = props;
		this.clickMenu = this.clickMenu.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.state = {   isOpen:false};
	}
	
	clickMenu()
	{
		this.setState({isOpen:!this.state.isOpen});
	}
	
	handleClose(url)
	{
		this.setState({ isOpen: false });
		this.props.dispatch(userActions.moveTo(url));
		//console.log(this.props);
		
	}
	
	  handleClickAway = () => {
		//this.setState({ isOpen: false, });
	};
	 

	render()
	{	
	
	
	/*
	
				  <MenuItem onClick={()=>this.handleClose("")}>Profile</MenuItem>
				  <MenuItem onClick={()=>this.handleClose("products")}>Products</MenuItem>
				  <MenuItem onClick={()=>this.handleClose("sellpoints")}>Sell points</MenuItem>
				  <MenuItem onClick={()=>this.handleClose("login")}>Logout</MenuItem>
				
				*/
	
	var self = this;
	const { classes } = this.props;
		  return (
			<div className={classes.root}>
			 <ClickAwayListener onClickAway={this.handleClickAway}>
			  <AppBar position="static">
				<Toolbar>
				  <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
					<MenuIcon 
					onClick={this.clickMenu}
					/>
				  </IconButton>
				  <Typography variant="h6" color="inherit" className={classes.grow}>
					Перепись 2020
				  </Typography>
				  <Button color="inherit">Login</Button>
				</Toolbar>
			  </AppBar>
			  <Menu
				  id="simple-menu"
				  open={this.state.isOpen}
				     
				>
				  
				  
				  { mainMenuItems.map(function(mItem,mIndex)
					  {
				  
						return (
							   <ExpansionPanel>
					<ExpansionPanelSummary
					  expandIcon={<ExpandMoreIcon />}
					  aria-controls="panel1a-content"
					  id="panel1a-header"
					>
					{mItem}
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
					<MenuList>
					{ mIndex == 0 && menu2010.map(function(item,index)
						{
							return (
					 <MenuItem onClick={()=>self.handleClose("products/"+index)}>{item}</MenuItem>)
					 
					}) }
					{ mIndex == 2 &&  <MenuItem onClick={()=>self.handleClose("sellpoints")}>Информация</MenuItem> }
					</MenuList>
					</ExpansionPanelDetails>
				  </ExpansionPanel>)
	  
				  }) }
    
				  
				</Menu>
				
				</ClickAwayListener>
			</div>
		  );
  }
}


function mapStateToProps(state) {
    const { users } = state;
    
    return {
    
        users
    };
}


//export default withStyles(styles)(ButtonAppBar);
const AppBar1 = connect(mapStateToProps)(withStyles(styles)(ButtonAppBar));
export { AppBar1 as AppBar }; 