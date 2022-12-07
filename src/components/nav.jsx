import React from 'react'

export default function nav() {
  return (
    <div>
        <nav className='w-100 navbar1 bg-white shadow fixed-top'>
            <div className='container-fluid navbar'>
                <h1>TailStack</h1>
                <div className='col-xxl-8 col-xl-8 col-lg-9  navbar float-end'>
                    <div className="input1 col-xxl-6 col-xl-6 col-lg-6 navbar">
                        <input type="text" className='inp1 ms-1' placeholder='Search'/>
                        <i class="fa-solid fa-magnifying-glass me-2"></i>
                    </div>
                    <div className='float-end navbar2 navbar'>
                        <h3 className='fs-4'>Features</h3>
                        <h3 className='fs-4 ms-3'>Pricing</h3>
                        <h3 className='fs-4 ms-3'>Sign in</h3>
                        <button className='btn ms-3 btn-info'>Login</button>
                    </div>
                </div>
                <div>
                        <i class="fa-solid fa-magnifying-glass i1"></i>
                </div>
            </div>
        </nav>
    </div>
  )
}
