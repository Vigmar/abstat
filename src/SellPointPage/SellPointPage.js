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

import Switch from "@material-ui/core/Switch";

const myData = {
 "title": "analytics",
 "color": "#12939A",
 "children": [
  {
   "title": "cluster",
   "children": [
    {"title": "AgglomerativeCluster", "color": "#12939A", "size": 3938},
    {"title": "CommunityStructure", "color": "#12939A", "size": 3812},
    {"title": "HierarchicalCluster", "color": "#12939A", "size": 6714},
    {"title": "MergeEdge", "color": "#12939A", "size": 743}
   ]
  },
  {
   "title": "graph",
   "children": [
    {"title": "BetweennessCentrality", "color": "#12939A", "size": 3534},
    {"title": "LinkDistance", "color": "#12939A", "size": 5731},
    {"title": "MaxFlowMinCut", "color": "#12939A", "size": 7840},
    {"title": "ShortestPaths", "color": "#12939A", "size": 5914},
    {"title": "SpanningTree", "color": "#12939A", "size": 3416}
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