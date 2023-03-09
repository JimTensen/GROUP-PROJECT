import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function ContactDivs() {
  return (
    <div className='grid grid-cols-2 gap-12 pl-[200px] pr-[200px] pt-[150px] pb-[150px] bg-black'>
      <div>
        <div className='bg-blue-600 pl-10 pt-8 pb-8'>
          <h1 className='text-2xl pb-2'>Contact Form</h1>
          <form>
              <label className='text-xl'><h3>Who Are You Trying To Reach?</h3></label>
            <select style={{border: "solid", borderRadius: "4%"}}>
              <option value="" disabled selected hidden>Choose Employee...</option>
              <option value="Beau Kim">Beau Kim</option>
              <option value="Mason Parks">Mason Parks</option>
              <option value="Tim Jensen">Tim Jensen</option>
            </select>
          </form>
            <div className='text-l'>
              <h3>First Name</h3>
                <input type='text'></input>
              <h3>Last Name</h3>
                <input type='text'></input>
              <h3>Email</h3>
                <input type='text'></input>
              <h3>Comments</h3>
            </div>
            <textarea id="comments" style={{resize: "none", height: "175px", width: "400px", border: "solid", borderRadius: "4%"}}></textarea>
        </div>
      </div>
      <div className='bg-blue-400 text-center'>
        <div className='pt-12 pb-4 text-xl'>
          <h1>Reach Us by Phone Or Social Media</h1>
        </div>
        <h1 className='text-xl'>LinkedIn Profiles:</h1>
        <div className='text-l pt-4'>  
          <a href="https://www.linkedin.com/in/beaukim/" rel="noreferrer" target="_blank" >Beau Kim</a>
        </div>
        <div className='text-l pt-4'>  
          <a href="https://www.linkedin.com/in/kenmparks/" rel="noreferrer" target="_blank" >Mason Parks</a>
        </div>
        <div className='text-l pt-4'>  
          <a href="https://www.linkedin.com/in/jimtensen/" rel="noreferrer" target="_blank" >Tim Jensen</a>
        </div>
      </div>
    </div>
  )
}

export default  ContactDivs;