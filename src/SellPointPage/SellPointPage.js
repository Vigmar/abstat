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


class SellPointPage extends React.Component {

		static propTypes = {
			classes: PropTypes.object.isRequired
		  };

	constructor(props)
	{
		super(props);
	
		this.state = {
    hoveredNode: false,
    treemapData: this._getRandomData(20),
    useCirclePacking: false
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
	


    render() {
		
		const {hoveredNode, useCirclePacking} = this.state;
    const treeProps = {
      animation: {
        damping: 9,
        stiffness: 300
      },
      data: this.state.treemapData,
      onLeafMouseOver: x => this.setState({hoveredNode: x}),
      onLeafMouseOut: () => this.setState({hoveredNode: false}),
      onLeafClick: () => this.setState({treemapData: this._getRandomData()}),
      height: 300,
      mode: this.state.useCirclePacking ? 'circlePack' : 'squarify',
      getLabel: x => x.name,
      width: 350
    };
	
		// <MuiTreeView tree={tree} onLeafClick={(e)=>this.leafClick(e)}/>
	
       
        return (
		<div>
		<div><XYPlot height={200} width={200}>
  <VerticalBarSeries data={data} />
</XYPlot>
<XYPlot height={200} width={200}>
  <LineSeries data={data} />
</XYPlot>
<XYPlot height={200} width={200}>
  <MarkSeries data={data} />
</XYPlot>

</div><div>
  <Treemap {...treeProps} />
     
</div></div>
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