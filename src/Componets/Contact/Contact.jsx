import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changeAge = (event) => {
    setAge(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };


 
  return (
    <>
    
    <section id='contact'>
  
  <div className="header">
        <h2 className='h2-style text-center' >CONATCT SECTION</h2>
        <h1> <i class="fa-solid fa-star "></i></h1>
      </div>
      <div className="container pt-5">
      <div className="row">
        <div className="offset-md-3 py-4  col-md-6">
        <label style={{ display: name.trim() !=='' ? 'block' : 'none' , color:'#81cdb9'}}>userName :</label>
      <input
      className='form-control border-bottom border-0 ' 
      placeholder='userName'
        type="text"
        value={name}
        onChange={changeName}
      />
</div>
  
<div className="offset-md-3 py-4  col-md-6">
        <label style={{ display: age.trim() !=='' ? 'block' : 'none' , color:'#81cdb9'}}>userAge :</label>
      <input
      className='form-control border-bottom border-0 ' 
      placeholder='userAge'
        type="number"
        value={age}
        onChange={changeAge}
      />
</div>
<div className="offset-md-3 py-4  col-md-6">
        <label  style={{ display: email.trim() !=='' ? 'block' : 'none' , color:'#81cdb9'}}>useEmail :</label>
      <input
      className='form-control border-bottom border-0 ' 
      placeholder='userEmail'
        type="email"
        value={email}
        onChange={changeEmail}
      />
</div>
<div className="offset-md-3 py-4  col-md-6">
        <label  style={{ display: password.trim() !=='' ? 'block' : 'none' , color:'#81cdb9'}}>userPassword :</label>
      <input
      className='form-control border-bottom border-0 ' 
      placeholder='userPassword'
        type="password"
        value={password}
        onChange={changePassword}
      />
</div>
<div className="offset-md-3 py-4 col-md-6">
       <button  className='btn bt-cs p-2' >send Message</button>
        
 </div>

    </div>

      
     </div>
  </section>
    </>
  )
}
