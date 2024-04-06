import React from 'react'
import Song from './Song'



const Recentlyplayed = () => {
    return (
        <div>
            <div className="recentlyplayed mt-36 md:mx-6">
                <div className="heading flex justify-between md:mx-0 mx-6 mb-4">
                    <h1 className='text-white font-bold text-2xl cursor-pointer'>Recently Played</h1>
                    <h5 className='text-neutral-400 font-bold cursor-pointer'>Show all</h5>
                </div>
                <div className="flex overflow-x-auto md:overflow-x-hidden md:px-0 px-4">
                    < Song title="Beast Mode" subTitle="Get your beast mode on!" imageName="beastmode.png" />
                    < Song title="Likeds Songs" subTitle="216 songs" imageName="likedsong.png" />
                    < Song title="Aashiqui 2" subTitle="Mithoon, Ankit Tiwari, Jeet Ganguli" imageName="aashiqi2.png" />
                    < Song title="Rockstar" subTitle="A.R. Rahman, Irshad Kamil" imageName="rockstar.png" />
                    < Song title="Top 50 - Global " subTitle="Your daily update of the most played track right." imageName="global.png" />
                    < Song title="Top 50 - India" subTitle="Your daily update of the most played track right." imageName="india.png" />
                </div>
            </div>

            <div className="recentlyplayed my-5 md:mx-6">
                <div className="heading flex justify-between md:mx-0 mx-6 mb-4">
                    <h1 className='text-white font-bold text-2xl cursor-pointer'>Made For Tony Stark</h1>
                    <h5 className='text-neutral-400 font-bold cursor-pointer'>Show all</h5>
                </div>
                <div className="flex overflow-x-auto md:overflow-x-hidden md:px-0 px-4">
                    < Song title="Daily Mix 1" subTitle="Pritam, Atif Aslam, Arijit Singh and more" imageName="mix1.png" />
                    < Song title="Daily Mix 2" subTitle="Jokhay, Ali Zafar, Imran Khan and more" imageName="mix2.png" />
                    < Song title="Daily Mix 3" subTitle="Sidhu Moose Wala, Bilal Saeed, Bohemia and..." imageName="mix3.png" />
                    < Song title="Daily Mix 4" subTitle="Shrey Singhal, Nandini Srikar, Mohit Gaur and..." imageName="mix4.png" />
                    < Song title="Daily Mix 5" subTitle="Imran Khan, Karan Sehmbi, Rishi Rich and..." imageName="mix5.png" />
                    < Song title="Daily Mix 6" subTitle="Eminem, Hopsin, Ro Ransom and more" imageName="mix6.png" />
                </div>
            </div>



            <div className="recentlyplayed my-5 md:mx-6">
                <div className="heading flex justify-between md:mx-0 mx-6 mb-4 ">
                    <h1 className='text-white font-bold text-2xl cursor-pointer'>Your top mixes</h1>
                    <h5 className='text-neutral-400 font-bold cursor-pointer'>Show all</h5>
                </div>
                <div className="flex overflow-x-auto md:overflow-x-hidden md:px-0 px-4">
                    < Song title="Atif Aslam Mix" subTitle="A.R. Rahman, Mohit Chauhan and Roop Kum..." imageName="atif.png" />
                    < Song title="Mohit Chauhan Mix" subTitle="Pritam, Vishal-Shekhar and KK" imageName="mohit.png" />
                    < Song title="Romantic Mix" subTitle="Jal, Mithoon, Mohit Chauhan and more" imageName="romantic.png" />
                    < Song title="Moody Mix" subTitle="Sam Smith, Imran Khan, Amrindar Gill and more" imageName="moody.png" />
                    < Song title="Hindi Mix" subTitle="A.R. Rahman, Mohit Chauhan, Arijit Singh an..." imageName="hindi.png" />
                    < Song title="Hip Hop Mix" subTitle="Rap Demon, Eminem, Talha Anjum and more" imageName="hiphop.png" />
                </div>
            </div>



        </div>
    )
}

export default Recentlyplayed
