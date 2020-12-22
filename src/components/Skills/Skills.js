import React from 'react';
import './Skills.css';
import '../../../src/index.css'

export class Skills extends React.Component {
    render() {
        return (
            <div className='Skills'>
                <div className='Skills-container'>
                    <h1 className='Skills-header'>Skills.</h1>
                    <div className='Skills-block'>
                        <div className='Skills-set' id='languages'>
                            <h2 className='Skills-type'>Languages &amp; <br/> Frameworks</h2>
                            <ul className='Skills-list'>
                                <li>JavaScript</li>
                                <li>C++</li>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>mySQL</li>
                            </ul>
                        </div>
                        <div className="Skills-set" id='software'>
                            <h2 className='Skills-type'>Software <br/>Systems</h2>
                            <ul className='Skills-list'>
                                <li>Figma</li>
                                <li>Sketch</li>
                                <li>AnyLogic</li>
                                <li>Power-BI</li>
                                <li>Excel</li>
                            </ul>
                        </div>
                        <div className="Skills-set" id='enterprise'>
                            <h2 className='Skills-type'>Enterprise <br/>Applications</h2>
                            <ul className='Skills-list'>
                                <li>Microsoft Dynamics</li>
                                <li>Azure</li>
                                <li>AWS</li>
                            </ul>
                        </div>
                        <div className="Skills-set" id='softskills'>
                            <h2 className='Skills-type'>Soft <br/>Skills</h2>                      
                            <ul className='Skills-list'>
                                <li>Empathetic Leadership</li>
                                <li>Product Management</li>
                                <li>Cross-Collaboration</li>
                                <li>Nonprofit Management</li>
                                <li>Idea Synthesis</li>
                            </ul>
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}