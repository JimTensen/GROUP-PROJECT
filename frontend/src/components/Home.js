import React from 'react';
import {Link} from 'react-router-dom';
import sportsPage from "./sportsHomePage.jpg";
import HomeDivs from './HomeDivs';
import HomeDivs2 from './HomeDiv2';

function Home() {
  return (
    <>
    <div>
    </div>
      <section>
        <div className="bg-black">
          <img className="relative inline-block w-3/4" alt="Sports Home Page" src={sportsPage}/>
          <aside className="absolute inline-block scroll-bg">
            <div className="scroll-div pt-[100px]">
              <div className="scroll-obj ">
                <HomeDivs />
              </div>
            </div>
          </aside>
        </div>
      </section>
      <div>
        <HomeDivs2 />
      </div>
    </>
  )
}

export default Home;