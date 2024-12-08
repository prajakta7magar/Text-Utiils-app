import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} ${props.theme} bg-${props.mode} ${props.theme}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/TextForm">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Light/Dark Mode Toggle */}
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" onClick={props.toggleswitch} type="checkbox" id="flexSwitchCheckDefault" />
          <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
        </div>

        {/* Green Mode Toggle */}
        <div className={`form-check form-switch text-${props.theme === 'light' ? 'dark' : 'light'} ps-5 ms-4`}>
          <input className="form-check-input" onClick={props.toggleswitch1} type="checkbox" id="flexSwitchCheckGreenMode" />
          <label className={`form-check-label text-${props.theme === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckGreenMode">
            Enable Green Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
  mode: PropTypes.string.isRequired, // Mode should be required
  theme: PropTypes.string.isRequired, // Ensure theme prop is passed in
  toggleswitch: PropTypes.func.isRequired, // Add validation for toggleswitch prop
  toggleswitch1: PropTypes.func.isRequired // Add validation for toggleswitch1 prop
};

Navbar.defaultProps = {
  title: "Title here",
  about: "About us",
  theme: "light" // Default theme
};
