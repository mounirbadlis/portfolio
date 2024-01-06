import React from "react";
import Skill from "./skill";

class Skills extends React.Component {
    content = [
        { 'title': 'Databases', 'skills': 'MySQL' },
        { 'title': 'Languages', 'skills': 'Java, Dart, PHP, HTML, CSS' },
        { 'title': 'FrameWorks', 'skills': 'Flutter, Laravel, Node.js' },
        { 'title': 'Office Automation', 'skills': 'Word, PowerPoint' },
        { 'title': 'Others', 'skills': 'REST API\'s, UML, Git, Github' },
    ];
    skills = ['MySQL', 'Java', 'Dart', 'PHP', 'HTML', 'CSS', 'Flutter', 'Laravel', 'Node.js', 'Word', 'PowerPoint', 'REST API\'s', 'UML', 'Git', 'Github'];

    render() {
        return <div id="skills">
            <h2>Skills</h2>
            <div style={{ display: 'grid', gridTemplateColumns : 'repeat(auto-fill, minmax(120px, 1fr))', gap : '20px', width : '800px'}}>
                {this.skills.map((element, index) => (
                    <Skill skill={element}></Skill>
                ))}
            </div>
        </div>
    }
}

export default Skills;