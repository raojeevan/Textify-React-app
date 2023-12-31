import React from 'react';

export default function Navbar(props) {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode === 'dark' ? "dark" : "light"}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <div className={`form-check form-switch text-${props.mode}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.toggleMode} />
            <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault" >{`Enable ${props.mode === 'dark' ? 'Light' : 'Dark'} Mode`}</label>
          </div>
        </div>
      </div>
    </nav>);
}