import React, { Component } from 'react'
import './Style/Muallif.scss'
import Button from '@mui/material/Button';
import mePhoto from './MuallifImg/me.jpg'


export default class Muallif extends Component {
  render() {
    return (
      <div className='muallif-page'>
        <div className="muallif-about">
          <img src={mePhoto} alt="img" className="muallif-about-img" />
          <div className="muallif-about-content">
            <h1 className="name">Zuhriddin Toshtillayev</h1>
            <p className="about">
              Men ijodkor, ta'lim olishdan to'xtamaydigan va izlanuvchan IT mutahassisi. <br />
              <span>Maqsadim - har bir yosh o'quvchi maktab yoshidan kelajak uchun muhim qadam qo'ysin.</span>
            </p>
            <div className="muallif-buttons">
              <Button variant="contained">Email</Button>
              <Button variant="text">Aloqa</Button>
            </div>
          </div>
        </div>
        <div className="muallif-dev">
          <div className="dev">
            <i class="fa-brands fa-html5"></i>
          </div>
          <div className="dev">
            <i class="fa-brands fa-css3"></i>
          </div>
          <div className="dev">
            <i class="fa-brands fa-js"></i>
          </div>
          <div className="dev">
            <i class="fa-brands fa-react"></i>
          </div>
          <div className="dev">
            <i class="fa-brands fa-github-square"></i>
          </div>
        </div>
      </div>
    )
  }
}
