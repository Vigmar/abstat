import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userService } from '../_services';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { YMaps, Map, Placemark } from 'react-yandex-maps';



import { AppBar } from '../AppBar/AppBar';
import '../../node_modules/react-vis/dist/style.css';

import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalBarSeries, VerticalGridLines, MarkSeries, ArcSeries,Sunburst } from 'react-vis';
import {Treemap} from 'react-vis';

import ReactDOM from "react-dom"



import Switch from "@material-ui/core/Switch";

const myData = {
 "title": "analytics",
 
 "children": [
  {
   "title": "cluster",
   "children": [
    {"title": "AgglomerativeCluster", "color": "#2939A", "size": 3938},
    {"title": "CommunityStructure", "color": "#32939A", "size": 3812},
    {"title": "HierarchicalCluster", "color": "#42939A", "size": 6714},
    {"title": "MergeEdge", "color": "#52939A", "size": 743}
   ]
  },
  {
   "title": "graph",
   "children": [
    {"title": "BetweennessCentrality", "color": "#12139A", "size": 3534},
    {"title": "LinkDistance", "color": "#12930A", "size": 5731},
    {"title": "MaxFlowMinCut", "color": "#8293FA", "size": 7840},
    {"title": "ShortestPaths", "color": "#A2939A", "size": 5914},
    {"title": "SpanningTree", "color": "#C2039A", "size": 1416}
   ]
  },
  {
   "title": "optimization",
   "children": [
    {"title": "AspectRatioBanker", "color": "#12939A", "size": 7074}
   ]
  }
 ]
}
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
	
	const PI = 3.14;
	
	const myDataArc = [
  {angle0: 0, angle: Math.PI / 4, opacity: 0.2, radius: 2, radius0: 1},
  {angle0: PI / 4, angle: 2 * PI / 4, radius: 3, radius0: 0},
  {angle0: 2 * PI / 4, angle: 3 * PI / 4, radius: 2, radius0: 0},
  {angle0: 3 * PI / 4, angle: 4 * PI / 4, radius: 2, radius0: 0},
  {angle0: 4 * PI / 4, angle: 5 * PI / 4, radius: 2, radius0: 0},
  {angle0: 0, angle: 5 * PI / 4, radius: 1.1, radius0: 0.8}
]


const regs = [{id:0,name:'Республика Адыгея'}, {id:1,name:'Республика Алтай'}, {id:2,name:'Республика Башкортостан'}, {id:3,name:'Республика Бурятия'},
{id:4,name:'Республика Дагестан'}, {id:5,name:'Республика Ингушетия'}, {id:6,name:'Республика Кабардино-Балкария'}, {id:7,name:'Республика Калмыкия'},
{id:8,name:'Республика Карачаево-Черкессия'}, {id:9,name:'Республика Карелия'}, {id:10,name:'Республика Коми'}, {id:11,name:'Республика Крым'},
{id:12,name:'Республика Марий Эл'}, {id:13,name:'Республика Мордовия'}, {id:14,name:'Республика Саха(Якутия)'}, {id:15,name:'Республика Северная Осетия-Алания'},
{id:16,name:'Республика Татарстан'}, {id:17,name:'Республика Тыва(Тува)'}, {id:18,name:'Республика Удмуртия'}, {id:19,name:'Республика Хакасия'},
{id:20,name:'Республика Чечня'}, {id:21,name:'Республика Чувашия'}, {id:22,name:'Алтайский край'}, {id:23,name:'Забайкальский край'},
{id:24,name:'Камчатский край'}, {id:25,name:'Краснодарский край'}, {id:26,name:'Красноярский край'}, {id:27,name:'Пермский край'},
{id:28,name:'Приморский край'}, {id:29,name:'Ставропольский край'}, {id:30,name:'Хабаровский край'}, {id:31,name:'Амурская область'},
{id:32,name:'Архангельская область'}, {id:33,name:'Астраханская область'}, {id:34,name:'Белгородская область'}, {id:35,name:'Брянская область'},
{id:36,name:'Владимирская область'}, {id:37,name:'Волгоградская область'}, {id:38,name:'Вологодская область'}, {id:39,name:'Воронежская область'},
{id:40,name:'Ивановская область'}, {id:41,name:'Иркутская область'}, {id:42,name:'Калининградская область'}, {id:43,name:'Калужская область'},
{id:44,name:'Кемеровская область'}, {id:45,name:'Кировская область'}, {id:46,name:'Костромская область'}, {id:47,name:'Курганская область'},
{id:48,name:'Курская область'}, {id:49,name:'Ленинградская область'}, {id:50,name:'Липецкая область'}, {id:51,name:'Магаданская область'},
{id:52,name:'Московская область'}, {id:53,name:'Мурманская область'}, {id:54,name:'Нижегородская область'}, {id:55,name:'Новгородская область'},
{id:56,name:'Новосибирская область'}, {id:57,name:'Омская область'}, {id:58,name:'Оренбургская область'}, {id:59,name:'Орловская область'},
{id:60,name:'Пензенская область'}, {id:61,name:'Псковская область'}, {id:62,name:'Ростовская область'}, {id:63,name:'Рязанская область'},
{id:64,name:'Самарская область'}, {id:65,name:'Саратовская область'}, {id:66,name:'Сахалинская область'}, {id:67,name:'Свердловская область'},
{id:68,name:'Смоленская область'}, {id:69,name:'Тамбовская область'}, {id:70,name:'Тверская область'}, {id:71,name:'Томская область'},
{id:72,name:'Тульская область'}, {id:73,name:'Тюменская область'}, {id:74,name:'Ульяновская область'}, {id:75,name:'Челябинская область'},
{id:76,name:'Ярославская область'}, {id:77,name:'Москва'}, {id:78,name:'Санкт-Петербург'}, {id:79,name:'Севастополь'},
{id:80,name:'Еврейская АО'}, {id:81,name:'Ненецкий АО'}, {id:82,name:'Ханты-Мансийский АО-Югра'}, {id:83,name:'Чукотский АО'},
{id:84,name:'Ямало-Ненецкий АО'}];

class SellPointPage extends React.Component {

		static propTypes = {
			classes: PropTypes.object.isRequired
		  };

	constructor(props)
	{
		super(props);
	
		this.state = {
		regions: regs,
		selectedVar:null,
		coords:[],
  };
  
   this._getRandomData = this._getRandomData.bind(this);
	
	}
	
	 _getRandomData(total) {
  const totalLeaves = total || Math.random() * 20;
  const leaves = [];
  for (let i = 0; i < totalLeaves; i++) {
    leaves.push({
      name: total ? total : String(Math.random()).slice(0, 3),
      size: Math.random() * 1000,
      color: Math.random(),
      style: {
        border: 'thin solid red'
      }
    });
  }
  return {
    title: '',
    color: 1,
    children: leaves
  };
}

    componentDidMount() {
		
		
		console.log(this.props)
		
		
    }
	
	onMapClick(e)
	{
		
	}
	
regChange = (e) =>
{
		console.log(e.target.value);
		this.setState({selectedVar: e.target.value});
}

    render() {
		
	
	
       
        return (
			<div>
			<AppBar/>
		<div>
		  <Select
		 style={{width: 600,paddingLeft: 10, paddingTop: 10}}
                                    value={this.state.selectedVar}
                                    onChange={this.regChange}
                                    inputProps={{
                                        name: 'selectedVar',
                                        id: 'selectedVar',
                                    }}>
                                    {regs.map(function (item) {
                                        return (<MenuItem value={item.id}>{item.name}</MenuItem>)
                                    })}
                                </Select>
								  <YMaps >
        <Map onClick={this.onMapClick.bind(this)}
        style={{ width: 800  }}
        state={{ center: [55.7, 37.57], zoom: 13 }}
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