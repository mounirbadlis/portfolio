import React from "react";

class Skill extends React.Component{
    // render(){
    //     return <div style={{display : 'flex', marginBottom : '10px'}}>
    //         <h4 style={{fontWeight : 'bold', marginRight : '10px'}}>{this.props.title}:</h4>
    //         <h4>{this.props.skills}</h4>
    //     </div>
    // }
    render(){
        return <div style={{ position : 'initial', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius : '10px', backgroundColor : 'rgba(0, 0, 0, 0.2)', width : 'max-content', height : 'max-content',padding : '3px'}}><h4>{this.props.skill}</h4></div>
    }
}

export default Skill;