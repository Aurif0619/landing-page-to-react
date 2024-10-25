import React from 'react';
import HomeImg from "../assets/HomeImg.png";
import BoyImg from "../assets/BoyImg.png";
import WatchImg from "../assets/WatchImg.png";
import One from "../assets/One.png";
import Two from "../assets/Two.png";
import Three from "../assets/Three.png";
import { Icon } from '@iconify/react';

const HeroSection = () => {
  return (
    <>
      <div className='BgImg mt-5'>
        <div className='container pt-1'>
          <div className='text-center me-5 pe-5'>
            <h3 className='fs-3 mt-5 text-warning me-5 '>A Hiking Guide</h3>
          </div>
          <div className='text-center'>
            <h1 className='fs-1 text-dark fw-bolder'>
              Be Prepared For The <br /> Mountains And Beyond!
            </h1>
          </div>
          <div className='text-center'>
            <button className='btn button fw-bolder fs-6'>Scroll down
            </button>
          </div>
        </div>
      </div>
      <div className='bg-black'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-sm-12 py-3 d-flex flex-column justify-content-center align-items-start mb-5 pb-5'>
              <img src={One} className='z-3' alt="" />
              <div className='z-3'>
                <span className='text-uppercase fw-bolder text-white'>GET STARTED</span>
                <h1 className='fs-2 mt-3 text-white'>
                  What level of hiker <br /> are you?
                </h1>
                <p className='fs-6 text-white'>
                  Determining what level of hiker you are can be an important tool
                  when planning future hikes. This hiking level guide will help you
                  plan hikes according to different hike ratings set by various
                  websites like All Trails and Modern Hiker. What type of hiker are
                  you – novice, moderate, advanced moderate, expert, or expert
                  backpacker?
                </p>
                <button className='btn text-warning'>
                  read more
                  <span className='ms-2'>
                    <Icon className='text-warning' icon="mdi:arrow-right" />
                  </span>
                </button>
              </div>
            </div>
            <div className='col-lg-6 col-sm-12 text-end'>
              <img className='h-100 w-75' src={HomeImg} alt="Hiker" />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6 col-sm-12'>
              <img className='h-100 w-75' src={BoyImg} alt="Hiker" />
            </div>
            <div className='col-lg-6 col-sm-12 d-flex flex-column justify-content-center align-items-start'>
              <img src={Two} alt="" />
              <span className='text-uppercase fw-bolder text-white'>Hiking Essential</span>
              <h1 className='fs-2 mt-3 text-white'>
                Picking the right Hiking Gear!
              </h1>
              <p className='fs-6 text-white'>
                Determining what level of hiker you are can be an important tool
                when planning future hikes. This hiking level guide will help you
                plan hikes according to different hike ratings set by various
                websites like All Trails and Modern Hiker. What type of hiker are
                you – novice, moderate, advanced moderate, expert, or expert
                backpacker?
              </p>
              <button className='btn text-warning'>
                read more
                <span className='ms-2'>
                  <Icon className='text-warning' icon="mdi:arrow-right" />
                </span>
              </button>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6 col-sm-12 my-3 d-flex flex-column justify-content-center align-items-start'>

              <img src={Three} alt="" />
              <span className='text-uppercase fw-bolder text-white'>When you go is the Key</span>
              <h1 className='fs-2 mt-3 text-white'>
                Understand Your Map & Timing
              </h1>
              <p className='fs-6 text-white'>
                Determining what level of hiker you are can be an important tool
                when planning future hikes. This hiking level guide will help you
                plan hikes according to different hike ratings set by various
                websites like All Trails and Modern Hiker. What type of hiker are
                you – novice, moderate, advanced moderate, expert, or expert
                backpacker?
              </p>
              <button className='btn text-warning'>
                read more
                <span className='ms-2'>
                  <Icon className='text-warning' icon="mdi:arrow-right" />
                </span>
              </button>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 text-end'>
              <img className='h-100 w-75' src={WatchImg} alt="Watch" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
