import React from "react";
import { graphql } from 'gatsby';
import Layout from "../components/layout";




const ProductPage = ({ data }) => (
    <Layout 
    seo={{
      title: data.strapiArticls.title, 
      discription: data.strapiArticls.discription,
    }}>
      <section className='articl_page_wrapper'>
          <h2 className=' articl_page_title'>{ data.strapiArticls.title }</h2>
          <div className=' articl_page_content' dangerouslySetInnerHTML={ {__html: data.strapiArticls.content} } />
      </section>
         
    </Layout>
  );
  
  export default ProductPage;
  
  export const pageQuery = graphql`
  query  ArticlTamplateLate ($id: String!){
    strapiArticls(id: {eq: $id}) {
        id
        title
        slug
        content
        articl_img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
     }
  } 
  
  `