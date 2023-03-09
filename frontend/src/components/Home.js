import React from 'react';
import {Link} from 'react-router-dom';
import sportsPage from "./sportsHomePage.jpg";
import HomeDivs from './HomeDivs';

function Home() {
  return (
    <>
    <div>
    </div>
      <section>
        <div className="bg-black">
          <img className="relative inline-block w-3/4" alt="Sports Home Page" src={sportsPage}/>
          <aside className="absolute inline-block scroll-bg">
            <div className="scroll-div">
              <div className="scroll-obj">
                <HomeDivs />
              </div>
            </div>
          </aside>
        </div>
      </section>
      <nav className="p-3 text-center">
        <Link to='/vault' className="p-10">Vault</Link>
        <Link to='/contact' className="p-10">Contact</Link>
      </nav>
    </>
  )
}

export default Home;