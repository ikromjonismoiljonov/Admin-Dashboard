import React from 'react'
import '../css/main.css'

export default function main() {
  return (
    <div>
        <div className='div1'>
        <div class="container px-4">
            <div class="row gx-4 d-flex mt-5">
            <div class="col-12">
                <div class="p-3 shadow alert alert-danger d-flex"><i class="fa-solid fa-circle-exclamation fs-4"></i><h3 className='ms-2 fs-5'>API detways is online mode</h3></div>
                </div>
                <div class="col-4 mt-3">
                <div class="p-3 shadow-lg rounded divcol2"></div>
                </div>
                <div class="col-4 mt-3">
                <div class="p-3 shadow-lg divcol2"></div>
                </div>
                <div class="col-4 mt-3">
                <div class="p-3 shadow-lg divcol2"></div>
                </div>
                <div class="col-8 mt-3">
                <div class="p-3 shadow-lg divcol3"></div>
                </div>
                <div class="col-4 mt-3">
                <div class="p-3 shadow-lg divcol4"></div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
