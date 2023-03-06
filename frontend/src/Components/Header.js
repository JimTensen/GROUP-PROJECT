import React from 'react'
import Search from './Search'

export default function Header() {
  return (
    <header>
      <h1>
        Project Showcase
      </h1>
      <nav>
        <div>
          <a href="/home">
            Home
          </a>
          <a href="/vault">
            Vault
          </a>
          <a href="/contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}
