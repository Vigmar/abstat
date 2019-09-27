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
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

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
		this.setState({ isOpen: false, });
	};
	 

	render()
	{	
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
					News
				  </Typography>
				  <Button color="inherit">Login</Button>
				</Toolbar>
			  </AppBar>
			  <Menu
				  id="simple-menu"
				  open={this.state.isOpen}
				     
				>
				  <MenuItem onClick={()=>this.handleClose("")}>Profile</MenuItem>
				  <MenuItem onClick={()=>this.handleClose("products")}>Products</MenuItem>
				  <MenuItem onClick={()=>this.handleClose("sellpoints")}>Sell points</MenuItem>
				  <MenuItem onClick={()=>this.handleClose("login")}>Logout</MenuItem>
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