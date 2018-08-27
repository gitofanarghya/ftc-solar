import React, {Component} from 'react';
import ButtonAppBar from './ButtonAppBar';
import ImageMapper from 'react-image-mapper';
import { connect } from 'react-redux';
import {sitetozone} from './actions/statuschange';
import {zonetorow} from './actions/statuschange';
import {zonetosite} from './actions/statuschange';
import {rowtozone} from './actions/statuschange';
import {rowtorow} from './actions/statuschange';

class SiteImage extends Component{

  state = {widt:500}







    wids = [];



load = () => {
	console.log("loaded");
}

clicked=(area)=>{
  console.log("clicked" + area._id);
  if(this.props.currentStatus === 'site'){
    this.props.dispatch(sitetozone(area._id));
  }
  if(this.props.currentStatus === 'zone'){
    this.props.dispatch(zonetorow(area._id));
  }
  if(this.props.currentStatus === 'row'){
    this.props.dispatch(rowtorow(area._id));
  }
	
	
}

enterArea = (area) => {
	console.log("entered" + area._id);
}

leaveArea = (area) => {
	console.log("left" + area._id);
}

clickedOutside = (evt) => {
	console.log("outside");
}

back = () => {
  if(this.props.currentStatus === 'zone'){
    this.props.dispatch(zonetosite());
  }
  if(this.props.currentStatus === 'row'){
    this.props.dispatch(rowtozone());
  }
}




current_picture =  () => {  
  switch(this.props.currentStatus) {
    case 'site':
      return './site.png';
    case 'zone':
      return './zone' + this.props.currentZone + '.png';  
    case 'row':
      return './zone' + this.props.currentZone + '.png';
  }
}

	
	render(){

    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		console.log(w);
        this.widw = Math.floor(parseFloat(0.6 * w));
        this.widh = Math.floor(parseFloat(0.7 * h));
        console.log(this.wids);var widarray=[];this.wids=[];
        if(this.props.currentStatus === 'site'){
        for(var i=0; i<this.props.cordssite.length; i++){
          widarray=[];
            widarray.push(Math.floor(parseFloat(this.props.cordssite[i][0]*(this.widw/1152))));
            widarray.push(Math.floor(parseFloat(this.props.cordssite[i][1]*(this.widh/648))));
            widarray.push(Math.floor(parseFloat(this.props.cordssite[i][2]*(this.widw/1152))));
            widarray.push(Math.floor(parseFloat(this.props.cordssite[i][3]*(this.widh/648))));
            this.wids.push(widarray);
        }
      }


        else{

          var cur_z = this.props.currentZone.toString();
          console.log(this.props.currentZone);
          console.log(this.props.cordszone);
          var cordzone = this.props.cordszone[cur_z];this.wids=[];
          console.log(cordzone);var widarray=[];
          for(var i=0; i<cordzone.length;i++)
          {widarray=[];
            widarray.push(Math.floor(parseFloat(cordzone[i][0]*(this.widw/1152))));
            widarray.push(Math.floor(parseFloat(cordzone[i][1]*(this.widh/648))));
            widarray.push(Math.floor(parseFloat(cordzone[i][2]*(this.widw/1152))));
            widarray.push(Math.floor(parseFloat(cordzone[i][3]*(this.widh/648))));
            this.wids.push(widarray);
          }
        }

        var area=[];
        var currr = this.curr_picc;
      if(this.props.currentStatus === 'site'){
        for(var i=0; i<this.props.cordssite.length; i++){
            var obj = { _id: i , shape: "rect", coords: [this.wids[i][0],this.wids[i][1],this.wids[i][2],this.wids[i][3]] }
            area.push(obj);
        }
      }

      else{
        var curr_z = this.props.currentZone.toString();
        console.log(typeof(curr_z));
        var cordzonee = this.props.cordszone[curr_z];
        for(var i=0; i<cordzonee.length; i++){
          var obj = { _id: i , shape: "rect", coords: [this.wids[i][0],this.wids[i][1],this.wids[i][2],this.wids[i][3]] }
          area.push(obj);
      }
    }

		
		var MAP = {
  name: "my-map",
  areas: area
}	

		return(<div className="w3-center">  			

					<div className="imag"> 
					<ImageMapper src={require(`${this.current_picture()}`)} map={MAP} width={this.widw} height={this.widh}
						onLoad={() => this.load()}
						onClick={area => this.clicked(area)}
						onMouseEnter={area => this.enterArea(area)}
						onMouseLeave={area => this.leaveArea(area)}
						onImageClick={evt => this.clickedOutside(evt)}
					/>
          </div>

</div>
);
}
}

const mapStateToProps = state => ({
  currentStatus: state.currentStatus,
  currentZone: state.currentZone,
  currentRow: state.currentRow,
  cordssite: state.cordssite,
  cordszone: state.cordszone
})

export default connect(mapStateToProps)(SiteImage);

