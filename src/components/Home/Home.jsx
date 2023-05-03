import { Button } from '@mui/material'
import React, { Component } from 'react'
import './Style/Home.scss'

export default class Home extends Component {
  render() {
    return (
      <div className='home-page'>
        <div className="home-cards">
          <div className="home-boxs">
            <h1 className="home-title">
              Dasturlash
            </h1>
            <p className="home-comment">
              Kompyuterlar va boshqa mikroprotsessorli elektron mashinalar uchun dasturlar tuzish, sinash va oʻzgartirish jarayonidan iborat. Odatda dasturlash yuqori saviyali dasturlash tillari (PHP, Java, C++, Python ) vositasida amalga oshiriladi. Bu dasturlash tillarining semantikasi odam tiliga yaqinligi tufayli dastur tuzish jarayoni ancha oson kechadi.
            </p>
            <Button variant="outlined">Dasturlash</Button>
          </div>
        </div>
        <div className="home-cards">
          <div className="home-boxs">
            <h1 className="home-title">
              Grafik dizayn
            </h1>
            <p className="home-comment">
              Grafik dizayner atrof-muhitni grafik vositalari bilan bezash bilan shug’ullanadi. Bu kasb chizmachilik, rassomchilik va informatika faniga qiziqqanlar uchun to’g’ri keladi. Grafik dizaynerlar, albatta, dizayn bilan shug'ullanadi, ammo to'qimachilik dizayni, na me'moriy dizayn ularning vazifalariga kirmaydi. Ularning faoliyat sohasi- kitoblar, gazetalar va jurnallar sahifalari, veb-saytlar va reklama, interaktiv kompyuter dasturlaridir.
            </p>
            <Button variant="outlined">Grafik dizayn</Button>
          </div>
        </div>
        <div className="home-cards">
          <div className="home-boxs">
            <h1 className="home-title">
              3d modellash
            </h1>
            <p className="home-comment">
              Bu texnik dastur orqali har qanday uch o'lchovli materialning (jonsiz yoki jonli) texnologik tasvirini yaratish jarayoni. Biz buni 3D model deb ataymiz, uni 3D render deb nomlangan jarayon yordamida ikki o'lchovli tasvir sifatida ko'rib chiqish yoki jismoniy hodisalarni kompyuter simulyatsiyasida ishlatish mumkin, modelni 3D bosib chiqarish uskunalari yordamida ham jismonan yaratish mumkin.
            </p>
            <Button variant="outlined">3d modellash</Button>
          </div>
        </div>
      </div>
    )
  }
}
