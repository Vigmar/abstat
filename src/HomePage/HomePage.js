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
		
        this.SendReq = this.SendReq.bind(this);
        this.ClickSave = this.ClickSave.bind(this);
        this.ClickCancel = this.ClickCancel.bind(this);
	
	}
    
    SendReq()
    {
        /*
        fetch('https://search-maps.yandex.ru/v1/?apikey=51bfe2f3-7a69-4bb0-aa3a-559ddd16d17d&lang=ru_RU&text=Магнолия Липецк')
          .then(response => response.json())
          .then(commits => console.log(commits));
          */
          
          let jsonData = {};
          
          userService.getData("set_list",jsonData).then((_res) => { 
          console.log(_res);
          });
    }
    
    SetSelectItem = (e,ind) => {
    
    
        console.log(e);
         let { profile } = this.state;
        
        profile[ind].val = e.target.value;
        this.setState({profile});
        
    }

    componentDidMount() {
        this.props.dispatch(userActions.getCustomerInfo());
    }
	
	componentWillReceiveProps(props)
	{
		console.log(props);
	}
	
    textChange = (e, ind) => {
    
        let { profile } = this.state;
        
        profile[ind].val = e.target.value;
        this.setState({profile});
    
    }
	
	ClickSave()
	{
		
	}
	
	ClickCancel()
	{
		
	}

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        
        let { profile, cities } = this.state;
        
        var self = this;
            
    
        
        return (
			<div>
			<AppBar/>
            <div className="col-md-8 col-md-offset-2">
            <h2>Анкета предпринимателя</h2>
            {  profile && profile.map(function(item,index){
                
                
                if (item.type == "date")
                return  (<div>  <TextField 
                id="date"
                label="Дата рождения"
                type="date"
                 onChange={(e)=>self.textChange(e,index)}
                defaultValue="2017-01-01"
                InputLabelProps={{
                  shrink: true,
                }} />
              </div>)
             
              
                
                if (item.type=="text")
                return (
                   <div style={{ display: 'flex',flex:1,flexDirection: 'row', paddingTop: 5}}>
                    <TextField
                              autoFocus
                              margin="dense"
                              name="name"
                              label={item.title}
                              fullWidth
                              value={profile[index].val}
                               onChange={(e)=>self.textChange(e,index)}
                            />
                   </div>
                )
                
                if (item.type=="number")
                return (
                   <div style={{ display: 'flex',flex:1,flexDirection: 'row', paddingTop: 5}}>
                    <TextField
                              autoFocus
                              type="number"
                              margin="dense"
                              name={item.name}
                              label={item.title}
                              fullWidth
                              value={profile[index].val}
                               onChange={(e)=>self.textChange(e,index)}
                            />
                   </div>
                )
                
                
                 if (item.type.indexOf("select")>=0)
                return (
                
                <div style={{display: 'flex', flex:1, flexDirection: 'row', borderRadius: 1, marginTop: 5, width: '100%'}}>
                <FormControl style={{ width: '100%'}}>
				<InputLabel htmlFor="age-simple">{item.title}</InputLabel>
				
				<Select
                value={profile[index].val}
			     onChange={(e)=>self.SetSelectItem(e,index)}
                              inputProps={{
                    name: "select",
                    id: {index},
					style: {fontSize: 12}
                  }}
                >
				<MenuItem value="">
					<em>Не выбрано</em>
				  </MenuItem>
                {cities.map(function(item0){
                    return (
                     <MenuItem value={item0.id}>{item0.name}</MenuItem>   
					)})}
                </Select>	
                </FormControl>
			</div>)
            
           
            
            })
            }     
            <div style={{marginTop: 20}}>
            <Button onClick={this.ClickCancel}>Отмена</Button>
                    <Button style={{paddingLeft: 10}} onClick={this.ClickSave} variant="contained" color="primary">Сохранить</Button>            
            </div>        
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