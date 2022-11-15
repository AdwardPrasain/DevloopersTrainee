import React from 'react'
import './ViewCV.css';
function ViewCV() {
  return (
    <div>
        <div className='Contain'>
          <div className="left"> 
            <div className='headTag'>
              <span>Bhumika Khatri</span>
              <span id="designation">web developer</span>
              </div>
            <div className='socialMedia'>
              <div className='LinkedIn'>
              </div>
              <div className='Github'>
              </div>
            </div>
            <div className='tag'>About me</div>
            <div className='AboutMe'>
            <label name="lblaboutMe" id="idaboutMe"> I am looking forward for opportunity to 
            work in reliable and organized company as a react developer.</label>
            </div>
            <div className='tag'>Education</div>
            <div className='Education'>
              <ul>
                <li>
               <div className='form-group'>
                <label id='university'>Itahari International College <span>,</span></label>
                <label id='level'>Bsc.Hons </label>
              </div>
              <label>Dullari, Morang</label>
              <div className='form-group'>
                <label>London<span>, </span></label>
                <label>gpa:<span></span>4.0</label>
              </div>
              <label>2000<span> AD</span></label>
              </li>
              </ul>
            </div>
            <div className='tag'>Experience</div>
            <div className='Experience'>
              <label>Frontend Developer</label>
              <div className='form-group'>
                <label>Technology Solution Nepal</label>
              </div>
              <label></label>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ViewCV