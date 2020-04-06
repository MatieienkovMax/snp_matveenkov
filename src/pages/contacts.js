import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const PageContacts = () => (
  <Layout>
    <h1>Конакты</h1>
    <section className="contakt_conteiner">
      <div className="adress">
        <h3>Адресс:</h3>
        <p>
          г.Гродно,<br />
          ул.Свердлова 3А,
        </p>
      </div>
      <div className="tel">
        <h3>Телфоны:</h3>
        <a title='Позвонить' href='tel:+375296668881'>
          +375-(29)-666-88-81
        </a>
        <br/>
        <a title='Позвонить' href='tel:+375297879787'>
          +375-(29)-787-97-87
        </a>
        <h3>Мэсенджер:</h3>
        <a href='https://api.whatsapp.com/send?phone=375296668881'>
          WhatsApp
        </a>
        <h3>Электроная почта:</h3>
        <a href="mailto:blindsmax@mail.ru">blindsmax@mail.ru</a>
      </div>
    </section>
    <section>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2363.3991026013277!2d23.83511577352304!3d53.67551207172701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3913d17b22e44fd0!2z0KDQvtC70YzRiNGC0L7RgNGLINCo0YLQvtGA0Ysg0L_Qu9C40YHRgdC1INCc0L7RgdC60LjRgtC90YvQtSDRgdC10YLQutC4INCe0J7QniDQodC-0LzQstC40YE!5e0!3m2!1sru!2sby!4v1584443627228!5m2!1sru!2sby"
     className='google_map'
     frameborder="0" 
     allowfullscreen="" 
     aria-hidden="false" 
     tabindex="0"></iframe>
    </section>
  </Layout>
)

export default PageContacts