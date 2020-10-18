import React from "react";

function Header() {
  return (
    <header>
      <div className="navbar  colorSimpl shadow-sm">
        <div className="container d-flex justify-content-between">
            <span className="navbar-toggler-icon"></span>
            <h2 className='mt-2 colorSimpl'>SimplonTweet - The Social Network</h2>
          
          <a href="/" className="navbar-brand d-flex align-items-center">
            <img className='logo' src='./img/favicon.png' alt=' '/>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
