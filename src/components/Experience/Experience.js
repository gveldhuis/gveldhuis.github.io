import React from 'react';
import './Experience.css';

import atricureLogo from './atricureLogo.png';
import blueprintsLogo from './blueprintsLogo.png';
import childrensLogo from './cincinnatichildrensLogo.png';
import michiganLogo from './michiganmedicineLogo.png';


export class Experience extends React.Component {
    render() {
        return (
            <div className="Experience">
                <h1 className="Experience-header">Experience.</h1>
                <div className="Experience-block">
                    <img src={atricureLogo} alt="AtriCure logo"></img>
                    <div className="Experience-text">
                        <h1 className="Experience-itemheader">AtriCure, Inc.</h1>
                        <h2 className="Experience-itemrole">Operations Engineering Co-op</h2>
                        <p className="Experience-description">
                            My term at AtriCure was nothing short of amazing. I implemented Lean on a manufacturing floor, developed an internal website to optimize factory staffing, and ultimately helped make a difference in the lives of patients with AFib.  Highlights include...<br /><br />

                            <b>Implementing Lean which created $70,000 in annual savings</b><br /><br />

                            <b>Developing Power-BI dashboard with 85% utilization rate</b><br /><br />

                            <b>Creating React.js web-app to optimize line staffing</b>
                        </p>
                    </div>
                </div>
                <div className="Experience-block">
                    <img src={blueprintsLogo} alt="Blueprints For Pangaea logo"></img>
                    <div className="Experience-text">
                        <h1 className="Experience-itemheader">Blueprints For Pangaea</h1>
                        <h2 className="Experience-itemrole">COO, Product Manager</h2>
                        <p className="Experience-description">
                            Blueprints is a student-run, 501-(c)(3) nonprofit that ships excess medical supplies overseas. Serving as COO has been the honor of a lifetime, as Blueprints combines my passion for healthcare, love for technology, and drive to create positive efficiency in the world. <br />My favorite moments include...<br /><br />

                            <b>Acting as Product Manager for internal web-app, winning $20,000 in University funding and creating 150% efficiency increase</b><br /><br />

                            <b>Leading Operational strategy for 7 national University chapters shipping $1M of medical supplies yearly</b><br /><br />

                            <b>Coordinating donation of $12,000 worth of PPE to community organizations amid COVID-19</b><br /><br />
                        </p>
                    </div>
                </div>
                <div className="Experience-block">
                    <img src={michiganLogo} alt="Michigan Medicine logo"></img>
                    <div className="Experience-text">
                        <h1 className="Experience-itemheader">Michigan Medicine</h1>
                        <h2 className="Experience-itemrole">Research Assistant</h2>
                        <p className="Experience-description">
                            In this role, I was able to build on my experience in clinical research by collecting patient data for a multi-center study. I also saw firsthand how the inefficiencies of our healthcare system holds back physicians and disadvantages patients. My most notable project involved...<br /><br />

                            <b>Collecting 65 different clinical datapoints for 30+ complex patients, helping find statistically signifiant difference in outcomes for two common heart procedures.</b>
                        </p>
                    </div>
                </div>
                <div className="Experience-block">
                    <img src={childrensLogo} alt="Cincinnati Children's logo"></img>
                    <div className="Experience-text">
                        <h1 className="Experience-itemheader">Cincinnati Children's</h1>
                        <h2 className="Experience-itemrole">Research Assistant</h2>
                        <p className="Experience-description">
                            At one of the top children’s hospitals globally, I had the priviledge of working with patients and surgeons alike to conduct research on a broad array of abnormal heart conditions. My aunt and cousin have suffered heart conditions their entire life, which is why my passion for healthcare began here. My proudest achievement includes...<br /><br />

                            <b>Co-authoring a poster presentation on novel diagnosis for complex heart condition, which was presented at 2019 AHA National Scientific Conference to +12,000 healthcare professionals.</b>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}