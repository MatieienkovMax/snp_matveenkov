import React from "react";
import { Link, graphql } from 'gatsby';
import Layout from "../components/layout";
import IMG from 'gatsby-image';
import Arows from '.././images/arov-left.png'

const ProductPage = ({ data }) => (
  <Layout 
  seo={{
    title: data.strapiProdukts.title, 
    discription: data.strapiProdukts.discription,
  }}>
    <section className='produkt_page_wrapper'>
        <h2 className='produkt_page_title'>{data.strapiProdukts.title}</h2>
        <section className='content_page_produkt'>
        <IMG 
        fluid={ data.strapiProdukts.img_produkt.childImageSharp.fluid } 
        alt={ data.strapiProdukts.title }
        className='produkt_page_img'/>
        <p className='cost produkt_page_item '>Цена: { data.strapiProdukts.cost } $</p>
        <div className='decor'></div>
       <div className='produkt_page_description'>
          <input type="radio" name="rove" id="discription_bottum" />
          <label  id="tab-1"  for="discription_bottum">
                  <h4 >Основное</h4>
          </label>
         <section className='discription'>
            <ul dangerouslySetInnerHTML={ {__html: data.strapiProdukts.discription} } />
         </section>
         <input type="radio" name="rove" id="specification_bottum"/>
              <label  id="tab-2" for="specification_bottum">
                  <h4 >Характеристики</h4>
               </label>
         <section className='specification'>
             
          <ul dangerouslySetInnerHTML={ {__html: data.strapiProdukts.specification} } />
         </section>
         <input type="radio" name="rove" id="contraindications_bottum"/>
              <label  id="tab-3" for="contraindications_bottum">
                  <h4 >Противопокозания</h4>
               </label>
         <section className='contraindications'>     
          <p>
            <ul className='produkt_page_contraindications'>
              <li>глаукома</li>
              <li>гипертоническая болезнь 2 ст</li>
              <li>аритмия</li>
              <li>аневризмы сосудов головного мозга</li>
              <li>церебросклероз</li>
              <li>хронические соединительнотканные заболевания;</li>
              <li>ИБС в приступном периоде</li>
              <li>старческая деменция</li>
              <li>вентральные грыжи</li>
              <li>протезированные суставы</li>
              <li>инвертофобии</li>
              <li>отслоение сетчатки глаза</li>
            </ul>
          </p>
         </section>
       </div>
      </section>  
    </section>
       
  </Layout>
);

export default ProductPage;

export const pageQuery = graphql`
query  ProductTamplateLate ($id: String!){
  strapiProdukts(id: {eq: $id}) {
      id
      title
      cost
      slug
      discription
      specification
      img_produkt {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
   }
} 

`