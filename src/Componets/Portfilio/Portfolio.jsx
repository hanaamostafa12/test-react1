import React from 'react'
import Example from '../test'


export default function Portfolio() {
  return (
    <> 
<section id='portfolio'>
  
<div className="header">
      <h2 className='h2-style text-center' >PORTFOLIO COMPONENT</h2>
      <h1> <i class="fa-solid fa-star "></i></h1>
    </div>

    
    <div className="container py-4">
      <div className="row gy-2">
        <div className="col-md-4">
        <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop"  className =" item-portfolio overflow-hidden rounded-2 cursor-pointer" >
  <img className="w-100" src="Images/poert1.png"  alt="" srcset=""/>
  <div className="item-layer  d-flex align-items-center justify-content-center ">
                    <i className="fa-solid fa-plus text-white "></i>
                    </div>
  </div>
  
  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
  
 
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
       
        <div className="modal-body">
        <img className="w-100" src="Images/poert1.png"  alt="" srcset=""/>
        </div>
   
      </div>
    </div>
  </div>

        </div>
        <div className="col-md-4">
        <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop2"  className =" item-portfolio overflow-hidden rounded-2 cursor-pointer" >
  <img className="w-100" src="Images/port2.png"  alt="" srcset=""/>
  <div className="item-layer  d-flex align-items-center justify-content-center ">
                    <i className="fa-solid fa-plus text-white "></i>
                    </div>
  </div>
  
  <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
  
 
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
       
        <div className="modal-body">
        <img className="w-100" src="Images/port2.png"  alt="" srcset=""/>
        </div>
   
      </div>
    </div>
  </div>

        </div>
        <div className="col-md-4">
        <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop3"  className =" item-portfolio overflow-hidden rounded-2 cursor-pointer" >
        <img className="w-100" src="Images/port3.png"  alt="" srcset=""/>
  <div class="item-layer  d-flex align-items-center justify-content-center ">
                    <i class="fa-solid fa-plus text-white "></i>
                    </div>
  </div>
  
  <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
  
 
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
       
        <div className="modal-body">
        <img className="w-100" src="Images/port3.png"  alt="" srcset=""/>
        </div>
   
      </div>
    </div>
  </div>

        </div>
       
        <div className="col-md-4">
        <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop"  className =" item-portfolio overflow-hidden rounded-2 cursor-pointer" >
  <img className="w-100" src="Images/poert1.png"  alt="" srcset=""/>
  <div class="item-layer  d-flex align-items-center justify-content-center ">
                    <i class="fa-solid fa-plus text-white "></i>
                    </div>
  </div>
  
  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
  
 
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
       
        <div className="modal-body">
        <img className="w-100" src="Images/poert1.png"  alt="" srcset=""/>
        </div>
   
      </div>
    </div>
  </div>

        </div>
        <div className="col-md-4">
        <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop2"  className =" item-portfolio overflow-hidden rounded-2 cursor-pointer" >
  <img className="w-100" src="Images/port2.png"  alt="" srcset=""/>
  <div class="item-layer  d-flex align-items-center justify-content-center ">
                    <i class="fa-solid fa-plus text-white "></i>
                    </div>
  </div>
  
  <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
  
 
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
       
        <div className="modal-body">
        <img className="w-100" src="Images/port2.png"  alt="" srcset=""/>
        </div>
   
      </div>
    </div>
  </div>

        </div>
        <div className="col-md-4">
        <div  data-bs-toggle="modal" data-bs-target="#staticBackdrop3"  className =" item-portfolio overflow-hidden rounded-2 cursor-pointer" >
        <img className="w-100" src="Images/port3.png"  alt="" srcset=""/>
  <div class="item-layer  d-flex align-items-center justify-content-center ">
                    <i class="fa-solid fa-plus text-white "></i>
                    </div>
  </div>
  
  <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
  
 
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
       
        <div className="modal-body">
        <img className="w-100" src="Images/port3.png"  alt="" srcset=""/>
        </div>
   
      </div>
    </div>
  </div>

        </div>
        
      </div>
    </div>
    
</section>
    
    </>
  )
}
