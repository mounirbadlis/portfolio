import React from "react";

class Projects extends React.Component {
    render() {
        return <div id="projects" style={{ textAlign: 'start' }}>
            <h2>Projects</h2>

            <div class="card w-50" style={{ position : 'initial',backgroundColor : 'rgba(0, 0, 0, 0.2)'}}>
                <div class="card-body">
                    <h4 class="card-title" style={{ fontWeight: 'bold' }}>Dawini (Licence Project)</h4>
                    <div><h5 style={{ fontWeight: 'bold' }}>Used Technologies: </h5><span><h5>Flutter, PHP, MySQL, API</h5></span></div>
                    <p class="card-text">This is project of end of study, we talking about telehealth domain. in this project we have four types of users admin, doctor, pharmacist and patient, and each one of them can do a several functions.</p>
                    <a href="https://github.com/mounirbadlis/licenceprject" class="btn btn-primary">View Project On Github</a>
                </div>
            </div>
        </div>
    }
}

export default Projects;