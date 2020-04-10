import { Link } from "gatsby"
import React from "react"
import Whatsapp from '.././images/WA2.svg'

const Nav = () => (
  <nav>
    <input type="checkbox" name="smart_btton" id="smart_button" />
    <label for="smart_button" id="smar_menu">&#9776;</label>
    <ul>
      <li><Link to='/' className='nav_link'>Главная</Link>
      </li>
      <li><Link to='/contacts' className='nav_link'>Контакты</Link></li>
      <li><Link to='/' className='sub_nav_title '>
      <input type="checkbox" name="smart_btton_sub" id="smart_button_sub" />
      <label for="smart_button_sub" id="smar_menu_sub">Мы предлагаем :</label>
        <ul  className='sub_nav'>
          <li><Link to='/komfort' className='nav_link'>Комфорт</Link></li>
          <li><Link to='/standart' className='nav_link'>Стандарт</Link></li>
          <li><Link to='/petla_gisona' className='nav_link'>Петля Гисона</Link></li>
        </ul>
      </Link>
      </li>
      <li>
        <a href='https://api.whatsapp.com/send?phone=375296668881' rel="nofollow" >
          <img  className='nav_icons'  src={ Whatsapp } width='50'/>
          <sup>Напишите нам в<br/>Whatsapp</sup>
        </a>
      </li>
    </ul>
    
  </nav>
)

export default Nav
