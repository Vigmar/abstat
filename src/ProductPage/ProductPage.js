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

  const dataSrc = [
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
	
	const colors = [ '#FADE71','#ADD862','#7FB5CB','#736BFE','#803DE5','#EC4FD0','#F986C9','#F89C87','#ED885C'];
	
	const legendData = [{title:'0-9 лет', color:'#FADE71'},{title:'10-19 лет',color:'#ADD862'},{title:'20-29 лет',color:'#7FB5CB'},
	{title:'30-39 лет',color:'#736BFE'},{title:'40-49 лет',color:'#803DE5'},{title:'50-59 лет',color:'#EC4FD0'},
	{title:'60-69 лет', color:'#F986C9'},{title:'70-79 лет', color:'#F89C87'},{title:'больше 80 лет',color:'#ED885C'}];
	
	const gender=[{id:0, name:'Мужчины', value:46.3, color: '#FADE71'}, {id:1, name:'Женщины', value:53.7,color:'#ADD862'}];
	
	const age=[{id:0, name:'0-9 лет', value:10.49}, {id:1, name:'10-19 лет', value:10.49},
{id:2, name:'20-29 лет', value:17}, {id:3, name:'30-39 лет', value:14.75},
{id:4, name:'40-49 лет', value:13.91}, {id:5, name:'50-59 лет', value:15},
{id:6, name:'60-69 лет', value:8.25},{id:7, name:'70-79 лет', value:6.9},
{id:8, name:'больше 80 лет', value:3.21}];


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
            items={legendData}
          />
		     <VerticalGridLines />
          <HorizontalGridLines />
        
          <YAxis />
		  { age.map(function(item,index)
			  {
				 
		return (

	<VerticalBarSeries color={colors[index]} data={[{x:index+20,y:item.value}]} />
		)		
				  
		  })}
 
			</XYPlot>}
			
			{ pageId % 2 == 1 && 
		   <RadialChart
  data={gender.map(function(item,index) { return ({angle:item.value, label: item.name}) })}
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