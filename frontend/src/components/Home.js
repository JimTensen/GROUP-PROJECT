import React from 'react'
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav className="p-3 text-center">
        <Link to='/vault' className="p-10">Vault</Link>
        <Link to='/contact' className="p-10">Contact</Link>
      </nav>
      <div className="scroll-bg">
        <div className="scroll-div">
          <div className="scroll-obj">
          LOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUMLOREM IPSUM
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;