import React from "react";

class Contact extends React.Component{
    render(){
        return <div id="experiances">
        <h2>Contact Me</h2>
        <div style={{display : 'flex', justifyContent: 'space-evenly'}}>
            <div style={{ display : 'flex', flexDirection : 'column',alignItems : 'center'}}>
            <a href="https://www.instagram.com/mounir_badlis?igsh=dDgwZWlkMHo1dmtt" ><img src ='./instagram.png' width={'50px'} height={'50px'}></img></a>
            <div>@mounir_badlis</div>
            </div>
            <div style={{ display : 'flex', flexDirection : 'column',alignItems : 'center'}}>
            <a href="https://www.facebook.com/mounir.2.badlis?mibextid=ZbWKwL" ><img src ='./facebook.png' width={'50px'} height={'50px'}></img></a>
            <div>Mounir Badlis</div>
            </div>
            <div style={{ display : 'flex', flexDirection : 'column',alignItems : 'center'}}>
            <a href="https://www.linkedin.com/in/mounir-badlis-248ba8205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" ><img src ='./linkedin.png' width={'50px'} height={'50px'}></img></a>
            <div>Mounir Badlis</div>
            </div>
            <div style={{ display : 'flex', flexDirection : 'column',alignItems : 'center'}}>
            <a href=""><img src ='./whatsapp.png' width={'50px'} height={'50px'}></img></a>
            <div>+213799 93 88 00</div>
            </div>
        </div>
    </div>
    }
}

export default Contact;