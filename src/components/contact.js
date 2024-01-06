import React from "react";

class Contact extends React.Component{
    render(){
        return <div id="experiances">
        <h2>Contact Me</h2>
        <div style={{display : 'flex', justifyContent: 'space-evenly'}}>
            <div style={{ display : 'flex', flexDirection : 'column'}}>
            <img alt=" " src ='./instagram.png' width={'50px'} height={'50px'}></img>
            <div>@mounir_badlis</div>
            </div>
            <div style={{ display : 'flex', flexDirection : 'column'}}>
            <img  alt=" " src ='./facebook.png' width={'50px'} height={'50px'}></img>
            <div>Mounir Badlis</div>
            </div>
            <div style={{ display : 'flex', flexDirection : 'column'}}>
            <img alt=" " src ='./linkedin.png' width={'50px'} height={'50px'}></img>
            <div>Mounir Badlis</div>
            </div>
            <div style={{ display : 'flex', flexDirection : 'column'}}>
            <img src ='./whatsapp.png' width={'50px'} height={'50px'}></img>
            <div>+213799 93 88 00</div>
            </div>
        </div>
    </div>
    }
}

export default Contact;