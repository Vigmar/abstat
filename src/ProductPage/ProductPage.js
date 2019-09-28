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

import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries,
 
  VerticalBarSeriesCanvas,
 VerticalBarSeries, VerticalGridLines, MarkSeries, ArcSeries,Sunburst,   DiscreteColorLegend, RadialChart } from 'react-vis';

const myData = [{angle: 1,label:'Текст 1'}, {angle: 5,label:'Текст 2'}, {angle: 2,label:'Текст 3'}]

  const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ];
	


class ProductPage extends React.Component {

	constructor(props)
	{
		super(props);
		   this.state = {
      coords: [],
      zoom: 13,
    };
	
	}
    
    componentDidMount() {
        //this.props.dispatch(userActions.getAll());
    }
	
	
	

    render() {
		
		  
        const { user, users } = this.props;
		
		console.log(this.props);
		
		let pageId = 0;
		
		if (this.props.location) 
		{
			let tmpS = this.props.location.pathname;
		
			let tmpA = tmpS.split('/');
			pageId = tmpA[tmpA.length-1];
			//alert(pageId);
		}
		
        return (
			<div>
			<AppBar/>
            <div>
			{ pageId % 2 == 0 && <XYPlot height={window.innerHeight-100} width={window.innerWidth-20}>
		      <DiscreteColorLegend
            style={{position: 'absolute', right: '10px', top: '10px'}}
            orientation="vertical"
            items={[
              {
                title: 'Apples',
                color: '#12939A'
              },
              {
                title: 'Oranges',
                color: '#79C7E3'
              }
            ]}
          />
		     <VerticalGridLines />
          <HorizontalGridLines />
        
          <YAxis />
  <VerticalBarSeries data={data} />
			<VerticalBarSeries color={"#ff00aa"} data={data} />
			</XYPlot>}
			
			{ pageId % 2 == 1 && 
		   <RadialChart
  data={myData}
  showLabels={true}
  width={window.innerHeight-100}
  height={window.innerHeight-100} />
			}
			
			
		
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