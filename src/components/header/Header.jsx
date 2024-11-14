import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react'

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg sticky-top bg-black">
        <div class="container-fluid">
          <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="navbar-brand text-white ms-3 justify-content-center d-flex" href="#">MNTN</a>
            <ul class="navbar-nav m-auto mb-2 mb-lg-0 justify-content-center text-center">
              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="#">Equipment</a>
              </li>
              <li class="nav-item">
                <a class="nav-link  text-white" href="#">About us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Blog</a>
              </li>
            </ul>
            <div className='me-2 d-flex justify-content-center'>
              <div>
                <Icon className='text-white me-2 fs-5' icon="mingcute:user-4-line" />
              </div>
              <div>
                <span className='text-white'>Account</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;