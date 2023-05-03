import React, { Component } from 'react'

export default class Dars_1 extends Component {
  render() {
    return (
      <div className="lesson-page">
        <div className="lesson-card">
          <h1 className="lesson-title">
            JavaScript haqida
          </h1>
          <p className="lesson-comment">
            Ushbu dastur Liveware Javascript tilining avlodi boʻlib, Netscape serveri tomonidan ishlovchi vosita boʻladi. Ammo Javascript tilini mashhur qilgan narsa bu xaridor tomonidan dasturlashdir. Javascriptning asosiy vazifasi — HTML konteynerlar atributlarining qiymatlarini va koʻrsatuvchi muhitining xossalirini HTML sarlavhalarni koʻrish jarayonida foydalanuvchi tomonidan oʻzgartirish imkoniyatlarida, boshqacha aytganda ularni dinamik sarlavhalar qilish (DHTML) tushuniladi. Yana shuni aytish joizki, sarlavhalar qayta yuklanmaydi. Amalda buni, masalan, quydagicha ifodalash mumkin, sarlavhaning fonining rangini yoki hujjatdagi rasmni oʻzgartirish, yangi oyna ochish yoki ogohlantirish oynasini chiqarish.
          </p>
          <iframe className='lesson-video' src="https://www.youtube.com/embed/cEMxI-6tptk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p className="lesson-comment">
            „JavaScript“ nomi Netscape kompaniyasining xususiy maxsuloti hisoblanadi. Microsoft tomonidan amalga oshirilgan til rasman Jscript deb nomlanadi. Jscript versiyalari Javascriptning mos versiyalari bilan mos keladi (aniqroq qilib aytganda oxirigacha emas).

            Javascript, ECMA (European Computer Manufacturers Association — Yeropa kompyuter ishlab chiqaruvchilar assotsiyatsiyasi) tomonidan standartlashtirilgan. Mos standartlar quydagicha nomlanadi: ECMA-262 va ISO-16262. Ushbu standartlar bilan Javascript 1.1ga taqriban ekvivalent ECMAScript tili aniqlanadi. Eslatish joizki, bugungi kunda Javascript ning hamma versiyalari ham ECMA standartlariga mos kelavermaydi. Mazkur kurs yoki qoʻllanmada barcha hollarda biz Javascript nomidan foydalanamiz.
          </p>
          <iframe className='lesson-video' src="https://www.youtube.com/embed/0HA_gT3MC4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p className="lesson-comment">
            Javascript, bu Internet uchun katta boʻlmagan xaridor va server ilovalarni yaratishga moʻljallangan nisbatan oddiy jismga yoʻnaltirilgan til. Javascript tilida tuzilgan dasturlar HTML hujjatning ichiga joylashtirilib ular bilan birga uzatiladi. Kurish dasturlari (brauzerlar va hokazo) Netscape Navigator va Microsoft Internet Explorer hujjat matniga joylashtirilgan dasturlarni (Scriptkod) uzatishadi va bajarishadi. Shunday qilib, Javascript — interpritatorli dasturlash tili hisoblanadi. Javascriptda tuzilgan dasturlarga foydalanuvchi tomonidan kiritilayotgan maʼlumotlarni tekshirayotgan yoki hujjatni ochganda yoki yopganda biror bir amallarni bajaruvchi dasturlar misol boʻlishi mumkin.
          </p>
        </div>
      </div>
    )
  }
}
