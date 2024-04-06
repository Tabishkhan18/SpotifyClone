import { useState } from 'react'
import Navbar from './components/Navbar'
import Recentlyplayed from './components/Recentlyplayed';
import LibraryPinned from './components/LibraryPinned';
import Library from './components/Library';
import Footer from './components/Footer';
import './App.css'
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { ImBooks } from "react-icons/im";
import { LuPlus } from "react-icons/lu";
import { IoArrowForwardOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";




function App() {


  return (
    <>
      <div className="mainbox md:fixed inset-0 flex flex-row md:m-1">

        {/* Left Home Navigation and Song Library */}
        
        <div className="leftbox flex flex-col min-h-screen md:w-1/4 w-0">

          <div className="shortcard darkgray min-h-1/6 m-1 rounded-lg">
            <div className="home flex m-5 cursor-pointer"><GoHomeFill className='white-icon icon' /><span className=' mx-4 font-semibold text text-white'>Home</span></div>
            <div className="search flex m-5 cursor-pointer"><FiSearch className='white-icon icon' /><span className=' mx-4 font-semibold text text-white'>Search</span></div>
          </div>

          <div className="longcard overflow-auto darkgray min-h-5/6 m-1 rounded-lg flex-grow">

            <div className="librarynav flex justify-between">
              <div className="yourlibrary flex m-5 cursor-pointer"><ImBooks className='white-icon icon' /><span className='mx-4 font-semibold text text-white'>Your Library</span></div>
              <ul className="librarybtn flex justify-start mx-3 my-3 gap-1">
                <li><button className='p-2 rounded-full'><LuPlus className='white-icon icon' /></button></li>
                <li><button className='p-2 rounded-full'><IoArrowForwardOutline className='white-icon icon' /></button></li>
              </ul>
            </div>

            <div className="librarycategory flex justify-start w-full text-white">
              <ul className='flex mx-3 gap-2'>
                <li><button className='lightgray text-white px-3 py-1 rounded-full font-semibold'>Playlist</button></li>
                <li><button className='lightgray text-white px-3 py-1 rounded-full font-semibold'>Artists</button></li>
                <li><button className='lightgray text-white px-3 py-1 rounded-full font-semibold'>Albums</button></li>
              </ul>
            </div>

            <div className="librarysearch">
              <ul className='flex justify-between my-4 mx-2 gap-2'>
                <li><button className='px-2 py-2 rounded-full'><FiSearch className='white-icon icon' /></button></li>
                <li><button className='font-semibold px-3 py-1 rounded-3xl flex items-center gap-1 text-white'>Recents<GiHamburgerMenu className='icon' /></button></li>
              </ul>
              <ul className="librarylist">
                <LibraryPinned title="Liked Songs" subTitle="Playlist &bull; 216 Songs" imageName="likedsong.png" />
                <LibraryPinned title="Rockstar" subTitle="Album &bull; A.R. Rahman" imageName="rockstar.png" />
                <LibraryPinned title="Atif Aslam" subTitle="Album &bull; Atif Aslam" imageName="atif.png" />
                <LibraryPinned title="Mohit Chauhar" subTitle="Album &bull; Mohit Chauhan" imageName="mohit.png" />
                <Library title="Aashiqui 2" subTitle="Album &bull; 9 Songs" imageName="aashiqi2.png"/>
                <Library title="Daily Mix 6" subTitle="Album &bull; 120 Songs" imageName="mix6.png"/>
                <Library title="Beast Mode" subTitle="Album &bull; 45 Songs" imageName="beastmode.png"/>
                <Library title="Top 50 - Global" subTitle="Album &bull; 50 Songs" imageName="global.png"/>
              </ul>
            </div>

            

          </div>

        </div>


        {/* Right Song Section */}
        <div className="rightbox overflow-auto darkgray md:w-3/4 md:m-1 md:rounded-lg pt-4 md:pt-0">
          <Navbar />
          <div className="songs">
            <Recentlyplayed />
          </div>
        </div>


        <div className="footer">
          <Footer/>
        </div>






      </div>


    </>
  )
}

export default App
