import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import IMG from 'gatsby-image'



const ProduktsItem = ({ data }) => (
    <StaticQuery 
    query={ graphql`  
  query IndexQuery {
    allStrapiProdukts {
      edges {
        node {
          id
          title
          cost
          slug
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
    }
  }
`}
render={data => (
    <section className='produkt_wrapper'>
     <h2>Мы предлагаем :</h2>
     <div className='produkt_conteiner'>
        {
            data.allStrapiProdukts.edges.map(({ node }) =>(
                <div className='produkt_item' key={node.id}>
                    <h3>{node.title}</h3>
                    <figure className='produkt_item-figure' >
                      <IMG   fluid={ node.img_produkt.childImageSharp.fluid}  alt={node.title} title={node.title}/>
                      <Link to={`/${node.slug}`}>
                        <button className="to_produkt">
                            Подробнее
                        </button>
                      </Link>
                      <figcaption className='cost'>Цена: { node.cost }$</figcaption>
                    </figure>
                    <ul dangerouslySetInnerHTML={ { __html: node.specification } } />
                </div>
            ) )
        }
       
       
     </div>
   </section>
)}
/>
)


export default ProduktsItem;
