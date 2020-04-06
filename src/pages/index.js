import React from "react"
import { Link } from "gatsby"
// import Img from "gatsby-image"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Courusel from "../components/courusel"
import ProduktsItem from "../components/produkts-item"
import ArticlsItem from "../components/articls-item"
import Qestions from "../components/fiq"

const PageHome = ( ) => (
  <Layout>
    <Courusel className='carusel'>
      <div  className='carusel_item carusel_item_one'>
        <h2>Продажа
            инверсионых
            столов 
            в Гродно
        </h2>
      </div>
      <div  className='carusel_item carusel_item_two'>
        <h2>Новинка!<br/> Петля гисона
        </h2>
        <Link to='/'>
              <button className="to_produkt">
                  Подробнее 1
              </button>
        </Link>
      </div>
    </Courusel>
    <section className='top_desription'>
      <p>Если вы интересуетесь инверсионными столами,
         значит, у вас, скорее всего, 
         есть определенные проблемы со здоровьем, 
         о решении которых вы пытаетесь узнать как можно больше, 
         так как от многих болячек, действительно, можно избавиться, 
        исключив медицинские препараты.</p>
        <p>
        В наши дни список заболеваний,
         с которыми может справиться инверсионная терапия 
         (лечение путем виса вниз головой), значительно расширился. 
         В их числе сегодня называют межпозвоночные грыжи,
          облегчение и профилактику варикозного расширения вен,
          улучшение кровообращения и питание головного мозга,
         опущение внутренних органов и даже – повышение иммунитета. 
        </p>
    </section>

    <ProduktsItem />
    <ArticlsItem />
    <Qestions />
  </Layout>
)

export default PageHome

export const pageQuery = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
