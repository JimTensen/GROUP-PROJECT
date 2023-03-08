import React from 'react'

function ContactDivs() {
  return (
    <div className='float-parent-element'>
      <div className='float-child-element'>
        <h1 style={{fontWeight: 'bold', fontSize: '25px'}}>Contact Form</h1>
        <form>
            <label><h3 style={{fontWeight: 'bold', fontSize: '18px'}}>Who Are You Trying To Reach?</h3></label>
          <select style={{border: "solid", borderRadius: "4%"}}>
            <option value="" disabled selected hidden>Choose Employee...</option>
            <option value="Beau Kim">Beau Kim</option>
            <option value="Mason Parks">Mason Parks</option>
            <option value="Tim Jensen">Tim Jensen</option>
          </select>
        </form>
        <h3 style={{fontWeight: 'bold'}}>First Name</h3>
          <input type='text' style={{height: "25px", width: "300px", border: "solid", borderRadius: "4%"}}></input>
        <h3 style={{fontWeight: 'bold'}}>Last Name</h3>
          <input type='text' style={{height: "25px", width: "300px", border: "solid", borderRadius: "4%"}}></input>
        <h3 style={{fontWeight: 'bold'}}>Email</h3>
          <input type='text' style={{height: "25px", width: "300px", border: "solid", borderRadius: "4%"}}></input>
        <h3 style={{fontWeight: 'bold'}}>Comments</h3>
          <input type="text" style={{height: "175px", width: "400px", border: "solid", borderRadius: "4%"}}></input>
      </div>
      <div className='float-child-element'>
        <h1 style={{fontWeight: 'bold', fontSize: '18px'}}>Reach Us by Phone Or Social Media</h1>
      </div>
      <h1 style={{fontWeight: 'bold'}}>LinkedIn Profiles:</h1>
      <div>  
        <a href="https://www.linkedin.com/in/beaukim/" rel="noopener" target="_blank" style={{color: 'blue', fontWeight: 'bold'}}>Beau Kim</a>
      </div>
      <div>  
        <a href="https://www.linkedin.com/in/kenmparks/" rel="noopener" target="_blank" style={{color: 'blue', fontWeight: 'bold'}}>Mason Parks</a>
      </div>
      <div>  
        <a href="https://www.linkedin.com/in/jimtensen/" rel="noopener" target="_blank" style={{color: 'blue', fontWeight: 'bold'}}>Tim Jensen</a>
      </div>
    </div>
  )
}

export default  ContactDivs;