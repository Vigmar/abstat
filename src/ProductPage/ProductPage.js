import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import { AppBar } from '../AppBar/AppBar';


class ProductPage extends React.Component {

	constructor(props)
	{
		super(props);
		   this.state = {
      coords: [],
      zoom: 13,
    };
	
	}
    
    
  onMapClick(event) {
  
  
    this.setState(state => {
    
       
    
      return {
        coords: [event.get("coords")],
        coord: event.get("coords"),
        zoom:16
      };
    });
  }
  
    componentDidMount() {
        //this.props.dispatch(userActions.getAll());
    }
	
	
	

    render() {
        const { user, users } = this.props;
        return (
			<div>
			<AppBar/>
            <div>
               
               <YMaps >
        <Map onClick={this.onMapClick.bind(this)}
        style={{ width: 800  }}
        state={{ center: this.state.coord?this.state.coord:[55.7, 37.57], zoom: this.state.zoom }}
        >
          {this.state.coords.map(coords => (
            <Placemark
              key={coords.join(",")}
              geometry={{ coordinates: coords }}
            />
          ))}
        </Map>
      </YMaps>
                  </div>
			</div>
			
        );
    }
}

/*

				<ReactModal 
					isOpen={users.showModal}
					ariaHideApp={false}
				><div><span>AAA</span></div>
				<a onClick={this.hideModal()}>Hide</a>	
				</ReactModal>
			*/

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedProductPage = connect(mapStateToProps)(ProductPage);
export { connectedProductPage as ProductPage };