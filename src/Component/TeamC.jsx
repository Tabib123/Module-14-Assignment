import React from 'react';
import { Link } from 'react-router-dom';
const TeamC = () => {
    return (
        <div>
           <div className="team">
               <div className="container">
                <h1 className='t-header'>Team</h1>
                <div className="t-section">
                    <Link to="/"><span className='t-section1'>Home</span></Link>
                    <img src='images2/1.png'></img>
                    <Link to="/team"><span className='t-section2'>Team</span></Link></div>
               </div>
                <div className="team-list">
                <div className="tl-header">Our Team Member</div>
                <div className="tl-p">Check our awesome team members</div>
                <div className="tl-all-cards">
                    <div className="tl-card-1">
                    <div class="card">
                <img src="images2/Rectangle 2093.png" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title c-t-all">Devon Lane</h5>
                    <div class="team-btn">
                        <div className="img-team">
                        <img src='images2/f.png'></img>
                        <img src='images2/t.png' className='t-png'></img>
                        <img src='images2/i.png'></img>  </div></div>
                      
                </div>
                </div>
                <div class="card">
                <img src="images2/Rectangle 2093 (1).png" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title c-t-all">Danny Bailey</h5>
                    <div class="team-btn">
                        <div className="img-team">
                        <img src='images2/f.png'></img>
                        <img src='images2/t.png' className='t-png'></img>
                        <img src='images2/i.png'></img>  </div></div>
                </div>
                </div>
                <div class="card">
                <img src="images2/Rectangle 2093 (2).png" class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title c-t-all">Alex Lov</h5>
                    <div class="team-btn">
                        <div className="img-team">
                        <img src='images2/f.png'></img>
                        <img src='images2/t.png' className='t-png'></img>
                        <img src='images2/i.png'></img>  </div></div>
                </div>
                </div>
                    </div>
                </div>
                </div>
            </div>            
        </div>
    );
};

export default TeamC;