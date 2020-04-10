import React from "react"
import Layout from "../components/layout"


const PageContacts = () => (
  <Layout>
    <div className='fics'></div>
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
        <a title='Позвонить' href='tel:+375296668881' rel="nofollow" >
          <span className='a1_A'>A</span><span className='a1_one'>1</span> +375-(29)-666-88-81
        </a>
        <br/>
        <a href='https://api.whatsapp.com/send?phone=375296668881' rel="nofollow" >
          <span className='WP_contakts'>WhatsApp</span>
        </a>
        <br/>
        <br/>
        <a title='Позвонить' href='tel:+375297879787' rel="nofollow" >
        <span className='mts'>МТС</span> +375-(29)-787-97-87
        </a>
        <br />
        <br/>
        <a href="mailto:blindsmax@mail.ru" rel="nofollow" ><span className='a1_one'>email:</span> blindsmax@mail.ru</a>
      </div>
    </section>
    <section>
     <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A715e9b9a5e5a298eaffa9154218b932b3ffd5420477a097d8f01e58aa83c5917&amp;source=constructor" 
     className='google_map'
     frameborder="0"></iframe>
    </section>
  </Layout>
)

export default PageContacts