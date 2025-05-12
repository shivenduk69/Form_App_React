import React, {useState} from 'react';
import './Form.css';
export default function Form(){
    

    return (
        <div id='parent'>
            <div id='box'>
                <h1 style={{color:'green', textAlign:'center', marginBottom:'10px'}}>Form in React</h1>
                <div className='inputBox'>
                    <div>
                        <label for='firstName'>First Name*</label><br/>
                        <input className='inp'  id='firstName' type="text" placeholder='Enter First Name'/>
                    </div>
                    
                </div>
                <div className='inputBox' >
                    <div>
                        <label for='lastName'>Last Name*</label><br/>
                        <input className='inp'  id='lastName' type="text" placeholder='Enter Last Name'/>
                    </div>
                    
                </div>
                <div className='inputBox' >
                    <div>
                        <label for='email'>Enter Email*</label><br/>
                        <input className='inp'  id='email' type="email" placeholder='Enter Email'/>
                    </div>
                    
                </div>
                <div className='inputBox' >
                    <div>
                        <label for='number'>Contact*</label><br/>
                        <input className='inp'  id='number' type="number" placeholder='Enter Mobile Number'/>
                    </div>
                    
                </div>
                <div className='inputBox'>
                    <div>
                        <label for='gender'>Gender*</label><br/>
                        <div id='gender'>
                            <input type="radio" id="GenderChoice1" name="gender" value="male" />
                            <label for="GenderChoice1">Male</label>

                            <input type="radio" id="GenderChoice2" name="gender" value="female" />
                            <label for="GenderChoice2">Female</label>

                            <input type="radio" id="GenderChoice3" name="gender" value="other" />
                            <label for="GenderChoice3">Other</label>
                        </div>
                    </div>
                    
                </div>
                <div className='inputBox' >
                    <div>
                        <label for='subject'>Your Best Subject</label>
                        <div id='subject'>
                            <input type="checkbox" id="physics" name="physics" value="physics"/>
                            <label for="physics">Physics</label>
                            
                            <input type="checkbox" id="chemistry" name="chemistry" value="chemistry"/>
                            <label for="chemistry">Chemistry</label>

                            <input type="checkbox" id='math' name='math' value='math'/>
                            <label for="math">Math</label>
                        </div>
                    </div>
                </div>
                <div className='inputBox'>
                    <div>
                        <label for='resume'>Upload Resume</label><br/>
                        <input className='inp'  id='resume' type="file"/>
                    </div>
                </div>
                <div className='inputBox' >
                    <div>
                        <label for='url'>Enter Url*</label><br/>
                        <input className='inp'  id='url' type="url" placeholder="https://example.com"/>
                    </div>
                </div>
                <div className='inputBox' >
                    <div>
                        <label for='job'>Select Your Choice</label><br/>
                        <select className='inp'  name="job" id="job">
                            <option value="senior">Senior</option>
                            <option value="junior">Junior</option>
                            <option value="Manager">Manager</option>
                        </select>

                    </div>
                </div>
                <div className='inputBox' >
                    <div>
                        <label for='about'>About</label><br/>
                        <input style={{height:'40%', width:'30%'}} id='about' type="text" placeholder="About Yourself"/>
                    </div>
                </div>

                <div className='buttonBox'>
                    <label for="btn">Submit or Reset</label>
                    <div style={{display:'flex'}} id='btn'>

                        <button onClick={()=>window.location.reload()} style={{backgroundColor:'green', marginRight:'2rem', color:'white', borderRadius:'20px', height:'30px', width:'60px'}}>Reset</button>
                        
                        <button style={{backgroundColor:'green', color:'white', borderRadius:'20px', height:'30px', width:'60px'}}>Submit</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}