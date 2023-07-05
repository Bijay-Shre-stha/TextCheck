import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <a className="navbar-brand" href="/">{props.title}            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={props.toggleMode}

            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                            Home <span className="sr-only"></span>
                        </a>
                    </li>


                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">
                            About
                        </a>
                    </li> */}


                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn--success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} ms-auto`}>
                    <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark mode</label>
                </div>

            </div>
        </nav>
    )
}
Navbar.propTypes = { title: PropTypes.string.isRequired, about: PropTypes.string.isRequired, }

Navbar.defaultProps = {
    title: 'set title',
    about: 'set about'
}

