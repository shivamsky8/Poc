import React, { Component } from 'react';
import image from './avatar.png'
import './Priority.css';

const Card = ()=>{
return(
    <div>
        <div className="main-container">
            <div className="first-coloum">
                <div className="Image-conatiner"><img className="image-priority" src={image} /></div>
                <div className="Name-conatiner">Lisa Robert</div>
                <div className="time-conatiner">08:16pm</div>
            </div>
            <div className="second-coloum">Meeting in Munich</div>
            <div className="third-coloum">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
        </div>
    </div>
);
}

class Priority extends Component {
  render() {
    return (
       <div>  
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div> 
    );
  }
}

export default Priority;
 