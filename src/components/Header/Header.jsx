import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './HeaderImg/logo.png'
import './Style/Header.scss'
import Button from '@mui/material/Button';

export default class Header extends Component {
  render() {
    const { navbarBtn, navbarHome} = this.props
    return (
      <div className='header-page'>
        <img src={logo} alt="" className="header-logo" />
        <ul>
          <li onClick={navbarHome}><Link to="/">Asosiy sahifa</Link></li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <li onClick={navbarBtn}><a>Darslar</a></li>
          <li onClick={navbarHome}><Link to="/about">Muallif</Link></li>
        </ul>
        <div className="register-card">
          <Button variant="text">Log in</Button>
          <Button variant="contained">Sign in</Button>
        </div>
      </div>
    )
  }
}
