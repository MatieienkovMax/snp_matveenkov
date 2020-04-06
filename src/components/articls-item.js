import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import IMG from 'gatsby-image'



const ArticlsItem = ({ data }) => (
    <StaticQuery 
    query={ graphql`  
  query ArticlQuery {
    allStrapiArticls {
      edges {
        node {
          id
          title
          slug
          discription
          articl_img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`}
render={data => (
    <section className='produkt_conteiner'>
     <h2 className='articl_title'>Полезные статьи</h2>
     <div className='produkt_conteiner'>
        {
            data.allStrapiArticls.edges.map(({ node }) =>(
                <div key={ node.id } className='articl_conteiner' >
                    <h3 className='articl_title'>{ node.title }</h3>
                    <div className='articl_item'>
                      <IMG  className='artikl_img' 
                            fluid={ node.articl_img.childImageSharp.fluid}  
                            alt={node.title} 
                            title={node.title}/>
                      <Link to={`/${node.slug}`}>
                        <button className="to_produkt">
                            Подробнее
                        </button>
                      </Link>
                      <p dangerouslySetInnerHTML={ {__html: node.discription} } ></p>
                    </div>
                    
                    
            </div>
            ) )
        }
     </div>
   </section>
)}
/>
)


export default ArticlsItem;