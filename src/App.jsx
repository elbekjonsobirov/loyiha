import React, { Component } from 'react'
import './App.scss'
import { Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Muallif from './components/Muallif/Muallif'
import Birinchi from './components/Lessons/Birinchi'
import Dars_1 from './components/Lessons/Dars_1'
import Dars_2 from './components/Lessons/Dars_2'
import Dars_3 from './components/Lessons/Dars_3'
import Dars_4 from './components/Lessons/Dars_4'
import Dars_5 from './components/Lessons/Dars_5'
import Dars_6 from './components/Lessons/Dars_6'
import Dars_7 from './components/Lessons/Dars_7'
import Dars_8 from './components/Lessons/Dars_8'
import Dars_9 from './components/Lessons/Dars_9'
import Dars_10 from './components/Lessons/Dars_10'
import Dars_11 from './components/Lessons/Dars_11'
import Dars_12 from './components/Lessons/Dars_12'
import Tamomlash from './components/Lessons/Tamomlash'

export default class App extends Component {
  state = {
    navbarActive: false
  }


  navbarBtn = () => {
    const { navbarActive } = this.state
    this.setState({
      navbarActive: !navbarActive
    })
    console.log(navbarActive);
  }

  navbarHome = () => {
    const { navbarActive } = this.state

    this.setState({
      navbarActive: false
    })
  }



  render() {
    const { navbarActive } = this.state
    return (
      <div>
        <Header
          navbarBtn={this.navbarBtn}
          navbarHome={this.navbarHome}
        />
        <div className="all-pages">
          <Routes>
            <Route path='/' element={
              <Home />}
            />
            <Route path='/lesson/umumiy' element={
              <Birinchi />}
            />
            <Route path='/lesson/1-dars' element={
              <Dars_1 />}
            />
            <Route path='/lesson/2-dars' element={
              <Dars_2/>}
            />
            <Route path='/lesson/3-dars' element={
              <Dars_3/>}
            />
            <Route path='/lesson/4-dars' element={
              <Dars_4/>}
            />
            <Route path='/lesson/5-dars' element={
              <Dars_5/>}
            />
            <Route path='/lesson/6-dars' element={
              <Dars_6/>}
            />
            <Route path='/lesson/7-dars' element={
              <Dars_7/>}
            />
            <Route path='/lesson/8-dars' element={
              <Dars_8/>}
            />
            <Route path='/lesson/9-dars' element={
              <Dars_9/>}
            />
            <Route path='/lesson/10-dars' element={
              <Dars_10/>}
            />
            <Route path='/lesson/11-dars' element={
              <Dars_11/>}
            />
            <Route path='/lesson/12-dars' element={
              <Dars_12/>}
            />
            <Route path='/lesson/tamomlash' element={
              <Tamomlash/>}
            />
            <Route path='/about' element={
              <Muallif />}
            />
          </Routes>
        </div>
        <div className={navbarActive === false ? "lesson-navbar" : "lesson-navbar lesson-navbar-active"}>
          <ul onClick={this.navbarHome}>
            <li>
              <Link to="/lesson/umumiy">
                Umumiy ma'lumot
              </Link>
            </li>
            <li>
              <Link to="/lesson/1-dars">
                1-dars. Java Script
              </Link>
            </li>
            <li>
              <Link to="/lesson/2-dars">
                2-dars. Pyhton
              </Link>
            </li>
            <li>
              <Link to="/lesson/3-dars">
                3-dars. Android
              </Link>
            </li>
            <li>
              <Link to="/lesson/4-dars">
                4-dars. Java
              </Link>
            </li>
            <li>
              <Link to="/lesson/5-dars">
                5-dars. Flutter
              </Link>
            </li>
            <li>
              <Link to="/lesson/6-dars">
                6-dars. Swift
              </Link>
            </li>
            <li>
              <Link to="/lesson/7-dars">
                7-dars. SMM
              </Link>
            </li>
            <li>
              <Link to="/lesson/8-dars">
                8-dars. PHP
              </Link>
            </li>
            <li>
              <Link to="/lesson/9-dars">
                9-dars. .NET
              </Link>
            </li>
            <li>
              <Link to="/lesson/10-dars">
                10-dars. Ruby
              </Link>
            </li>
            <li>
              <Link to="/lesson/11-dars">
                11-dars. Ma'lumotlar bazasi
              </Link>
            </li>
            <li>
              <Link to="/lesson/12-dars">
                12-dars. Grafik dizayn
              </Link>
            </li>
            <li>
              <Link to="/lesson/tamomlash">
                Tamomlash
              </Link>
            </li>
          </ul>
        </div>
      </div >
    )
  }
}
