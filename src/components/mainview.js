import React from "react";

class MainView extends React.Component{
    render(){
        return <div style={{ display: 'flex', justifyContent: 'center'}}>
          <div style={{ height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <h2>Hello I'm</h2>
            <h1>Mounir Badlis</h1>
            <h2>A Mobile Apps Developer</h2>
          </div>
          <div style={{ width: '100px' }}></div>
          <img src='./personal.jpg' width={'300px'} height={'300px'} style={{ borderRadius: '50%', border: '2px solid gray' }}></img>
        </div>;
    }
}

export default MainView;