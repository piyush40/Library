import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css"

const Header = () =>
{
    return(
        <div className = "holder">
          <header className = "header"></header>
          <Navbar />
          <div className ="header-content flex fles-c text-center text-white">
              <h2 className = "header-title text-capitalize">Find your Book of choice</h2> <br />
              <p className = 'header-text fs-18 fw-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ad facilis aliquid ipsam itaque adipisci, ratione nisi magni? Pariatur vitae, quo eos veniam, suscipit mollitia quia nisi saepe nobis reprehenderit incidunt. Ratione, unde adipisci?</p>
              <SearchForm />
          </div>

        </div>
    )
}

export default Header;