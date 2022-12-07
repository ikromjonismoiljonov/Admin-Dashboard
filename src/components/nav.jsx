import React from 'react'
import '../css/nav.css'

export default function nav() {
  return (
    <div className='p-4'>
        <div className="w-100">
        <nav className='w-100  shadow border'>
            <div className="container-fluid">
            <div className="col-xl-2 col-lg-2 col-md-2 d-flex">
                <div className='div1'>
                  
                </div>
                <div className='div2'>

                </div>
                <div className='div3'>

                </div>
                <i class="fa-solid fa-chevron-left ms-2"></i>
                <i class="fa-solid fa-chevron-right ms-2"></i>
            </div>

            <div className='col-xl-4 col-lg-4 col-md-4 bg-info'>
                <p className='text-center'>demo.frontend</p>
            </div>

            <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-2">
    <h1 className=''>sasas</h1>
            </div>
            </div>

        </nav>
        </div>
    </div>
  )
}
