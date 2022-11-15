import React from "react";
import "./CreateCv.css";

function CreateCv() {
  return (
    <div>
    <div className='Contains'>
    <div className='headtag'>
                <span>W-e-l-c-o-m-e</span>
                <p>Let's Get Started</p>
    </div>
        <div className='WholeSection'>
            <div className='CommonSection'>
            <h4>Fill out the Information</h4>
            <div className='name'>
              <label>Full Name:</label>
              <input type='text'/>
            </div>
                <div className='aboutMe'>
                    <div className='about1'><h2>About Yourself</h2>
                    <input type="text"/>
                    </div>
                    
                    <label> <h2>Designation</h2></label>
                    <input type="text" placeholder='Web Developer' name='txtAboutDes'/>
                </div>
                <div className='Experience'>
                    <h2>Experience</h2>
                    <div className='form-group'>
                    <label>Job Title</label>
                    <input type="text"  name='JobTitle'/>
       
                    <label>Company Name</label>
                    <input type="text"  name='CompanyName' />
                    </div>
                    <div className='form-group'>
                    <label>Address</label>
                    <input type="text"  name='CompanyAddress'/>
                    <label>Job Duration</label>
                    <input type="text"  name='JobDuration'/>
                    </div>
                    <div className='form-group'>
                    <label>Role</label>
                    <input type="text"  id='idRole' name='Role'/>
                    </div>
                    <table className="tables">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Job Title</th>
                            <th>Company Name</th>
                            <th>Address</th>
                            <th>Duration</th>
                            <th>Role</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                       
                            </tbody>  
                  </table>
                  <div className="buttonss">
                    <input type="button" id="btnSaved" value='Save'/>
                  </div>
                </div>
                <div className='Projects'>
                    <h2>Projects</h2>
                    <div className='form-group'>
                        <label>Project Name</label>
                        <input type='text' name='ProjectName'/>
                        <label>Language Used</label>
                        <input type='text' name='LanguageUsed'/>
                    </div>
                    <div className='description'>
                        <label>Description</label>
                        <input type='text' name='Description'/>
                    </div>
                    <div className='description'>
                        <label>Role</label>
                        <input type='text' name='Role'/>
                    </div>
                    <table className="tables">
                     <thead>
                        <tr>
                        <th>ID</th>
                        <th>Project Name</th>
                        <th>Language Used</th>
                        <th>Description</th>
                        <th>Role</th>
                        <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                     
                        </tbody>  
                  </table>
                  <div className="buttonss">
                    <input type="button" id="btnSaved" value='Save' />
                  </div>
                </div>
                <div className='Skills'>
                    <h2>Skills</h2>
                    <input type='text' name='txtSkill' value='Save'/>
                </div>
                <table className="tables">
                    <thead>
                        <tr>
                        <th>Skills</th>
                        </tr>
                    </thead>
                    <tbody></tbody>  
                </table>
                <div className="buttonss">
                    <input type="button" id="btnSaved" value="save" />
                  </div>
                <div className='Acheivements'>
                    <h2>Acheivements</h2>
                    <div className='form-group'>
                        <label>Title</label>
                        <input type='text' name='Title'/>
                        <label>Date</label>
                        <input type='Date' name='Date'/>
                    </div>
                    <div className='description'>
                        <label>Description</label>
                        <input type='text' name='Description' />
                    </div>
                    <table className="tables">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                        </tbody>  
                    </table>
                    <div className="buttonss">
                    <input type="button" id="btnSaved" value='Save' />
                  </div>
                </div>
            </div>
        
            <div className='CommonSection'>
                <div className='inputPhoto'>
                    <input type='file'/>
                </div>
                <div className='Trainings'>
                    <h2>Training</h2>
                    <div className='form-group'>
                        <label>Training Name</label>
                        <input type='text' name='Name' />
                    </div>
                    <div className='description'>
                        <label>Description</label>
                        <input type='text' name='Description' />
                    </div>
                    <table className="tables">
                        <thead>
                            <tr>
                              <th>ID</th>
                            <th>Training Name</th>
                            <th>Description</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                      
                          </tbody>  
                    </table>
                    <div className="buttonss">
                    <input type="button" id="btnSaved" value='Save'/>
                  </div>
                </div>
                <div className='language'>
                    <h2>Language</h2>
                    <input type='text' name='Name'/>
                    <table className="tables">
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Language</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                         
                        </tbody>  
                    </table>
                    <div className="buttonss">
                    <input type="button" id="btnSaved" value='Save'/>
                  </div>
                </div>
                <div className='References'>
                    <h2>References</h2>
                    <div className='form-group'>
                        <label>Position</label>
                        <input type='text' name='txtRefPosition'/>
                        <label>Company</label>
                        <input type='text' name='txtRefCompany'/>
                   </div>
                   <div className='contact'>
                    <label>Contact</label>
                    <input type='text' name='txtRefContact'/>
                   </div>
                   <table className="tables">
                    <thead>
                        <tr>
                        <th>Position</th>
                        <th>Company Name</th>
                        <th>Contact</th>
                        </tr>
                     </thead>
                     <tbody>
                     
                      </tbody>  
                   </table>
                   <div className="buttonss">
                    <input type="button" id="btnSaved" value='Save'/>
                  </div>
                </div>
                <div className='SocialMedia'>
                    <h2>Social Media</h2>
                    <div className='facebook'>
                    <label>Facebook</label>
                    <input type='text' name='txtFacebook' />
                    </div>
                    <div className='instagram'>
                    <label>Instagram</label>
                    <input type='text' name='txtInstagram'/>
                    </div>
                    <div className='linkedin'>
                    <label>LinkedIn</label>
                    <input type='text' name='txtLinkedIn' />
                    </div>
                </div>
                <div className='Contact'>
             <h3>Contact</h3>
             <div className='Contactgroup'>
              <label>Address</label>
              <input type='text'/>
             </div>
             <div className='Contactgroup'>
              <label>Email</label>
              <input type='text'/>
             </div>
             <div className='Contactgroup'>
              <label>Phone Number</label>
              <input type='text'/>
             </div>
        </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default CreateCv;
