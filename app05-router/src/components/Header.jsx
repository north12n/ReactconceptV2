import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink class="nav-link " aria-current="page" to = "/">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link " aria-current="page" to = "/products">
                  Product
                </NavLink>
              </li> 
              <li class="nav-item">
                <NavLink class="nav-link " aria-current="page" to = "/contact">
                  contact
                </NavLink>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
