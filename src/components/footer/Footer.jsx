import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-black'>
        <div className='container'>
          <div className='row py-2 pt-2'>
            <div className='col-12 d-flex flex-column flex-lg-row justify-content-between mt-4 justify-content-center' >
              <div className='d-flex flex-column'>
                <span className='fs-4 text-white'>MNTN</span>
                <p className='fs-6 text-white'>Get out there & discover your next <br /> slope, mountain & destination!</p>
                <p className=''>Copyright 2023 MTNT Inc. Terms & Privacy</p>
              </div>
              <div className='d-flex justify-content-center'>
                <div className='me-5'>
                  <ul className='list-unstyled'>
                    <li className='text-warning fw-bolder'>More on The Blog</li>
                    <li className='mt-1 text-white'>About MNTN</li>
                    <li className='mt-1 text-white'>Contribution & Writes</li>
                    <li className='mt-1 text-white'>Write For Us</li>
                    <li className='mt-1 text-white'>Contact Us</li>
                    <li className='mt-1 text-white'>Privacy Policy</li>
                  </ul>
                </div>
                <div>
                  <ul className='list-unstyled'>
                    <li className='text-warning fw-bolder'>More on MNTN</li>
                    <li className='mt-1 text-white'>The Team</li>
                    <li className='mt-1 text-white'>Jobs</li>
                    <li className='mt-1 text-white'>Press</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer;