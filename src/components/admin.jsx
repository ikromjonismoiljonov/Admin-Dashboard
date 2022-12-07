import React from 'react'
import '../css/nav.css'
import '../css/admin.css'
import { Outlet, Link } from 'react-router-dom'

export default function admin() {
  return (
    <div>
        <div className='float-start divfoot'>
              <div className="w-100 bg-dark divheader d-flex">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqS5pJ8IGU17zS4LDbQylsiOW2Iqp_yOM0uA&usqp=CAU" alt="" className="img1 img-fluid rounded-circle ms-3" />
                  <h1 className='text-white fs-4 ms-3 mt-4'>Andrian Demain</h1>
              </div>
              <Link className='text-white ms-4' to="/">Admin</Link><br />
              <Link className='text-white ms-4' to="/Saff">Saff</Link><br />
              <Link className='text-white ms-4' to="/CRM">CRM</Link><br />
              <Link className='text-white ms-4' to="/mini">mini</Link><br />
        </div>
        <Outlet/>
    </div>
  )
}
