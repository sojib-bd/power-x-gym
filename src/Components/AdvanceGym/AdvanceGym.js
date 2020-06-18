import React from 'react';
import './AdvanceGym.scss';
import gym from '../Classes/ClassImages/gym.jpg';
import MediumBanner from '../MediumBanner/MediumBanner';
import Footer from '../Footer/Footer';
import { Button } from 'react-bootstrap';


const AdvanceGym = (props) => {
    const imageStyle = {
        width: '500px',
        height: '300px'
    }
    return (
        <div className="advanceGym-container">
            <MediumBanner title={props.title} />
            <div className="gym-body">

                <div className="left">
                    <img src={gym} alt="" style={imageStyle} />
                    <p style={{ width: '510px', margin: '10px 0px 20px 0' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aspernatur numquam porro ab illo! Nemo, cupiditate nobis temporibus recusandae laudantium pariatur explicabo cum doloremque illo, culpa earum ratione reprehenderit error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa adipisci doloremque quisquam, ullam iste tempora, aliquam hic cumque rem porro in natus exercitationem corrupti aspernatur tempore reiciendis? Id, doloremque.</p>



                    <input type="checkbox" name="checkbox" id="one" checked />
                    <span><strong>Having Slimmer Shapely Thighs</strong></span><br />
                    <input type="checkbox" name="checkbox" id="" checked />
                    <span><strong>Getting Stronger Body</strong></span><br />
                    <input type="checkbox" name="checkbox" id="" checked />
                    <span><strong>Increased Metabolism</strong></span><br />
                    <input type="checkbox" name="checkbox" id="" checked />
                    <span><strong>Increased Muscular Endurance</strong></span><br />
                    <input type="checkbox" name="checkbox" id="" checked />
                    <span><strong>Maximum result in Less time</strong></span><br />
                    <input type="checkbox" name="checkbox" id="" checked />
                    <span><strong>Firm Hips and Tummy</strong></span><br />


                </div>
                <div className="right">
                    <h1><span style={{ color: 'gold' }}>CLASS</span> SCHEDULE</h1>
                    <div className="class-schedule">
                        <div className="monday day">
                            <h4>MONDAY</h4>
                            <p>8:00 AM - 9:00 AM</p>
                        </div>
                        <div className="tuesday day">
                            <h4>TUESDAY</h4>
                            <p>10:00 AM - 11:00 AM</p>
                        </div>
                        <div className="wednesday day">
                            <h4>WEDNESDAY</h4>
                            <p>7:00 AM - 8:00 AM</p>
                        </div>
                        <div className="thursday day">
                            <h4>THURSDAY</h4>
                            <p>5:00 PM - 6:00 PM</p>
                        </div>
                        <div className="friday day">
                            <h4>FRIDAY</h4>
                            <p>6:00 AM - 7:00 AM</p>
                        </div>
                        <div className="saturday day">
                            <h4>SATURDAY</h4>
                            <p>7:00 PM - 8:00 PM</p>
                        </div>
                    </div>
                    <Button>JOIN US</Button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AdvanceGym;