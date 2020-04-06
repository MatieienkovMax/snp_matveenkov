/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      
      return result;
    })
  )
});

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getArtikl = makeRequest(graphql, `
    {
      allStrapiArticls {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    `).then(result => {
    result.data.allStrapiArticls.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/artikl.js`),
        context: {
          id: node.id,
        },
      })
    })
  });

  const getProducts = makeRequest(graphql, `
    {
      allStrapiProdukts {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    `).then(result => {
    result.data.allStrapiProdukts.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/produkt.js`),
        context: {
          id: node.id,
        },
      })
    })
  });
  
  // Query for products nodes to use in creating pages.
  return Promise.all([ getProducts, getArtikl ]);
};