import React from "react"
import { graphql } from "gatsby"
// import "../styles/style.scss"
import "../styles/main.scss"


import Layout from "~/components/layout"
import SEO from "~/components/seo"
import CategoryList from "~/components/category-list"
import PageHeading from "~/components/styled/page-heading"

const IndexPage = ({ data: { allStrapiCategory } }) => {
  const categories = allStrapiCategory.edges
  const seo = { title: "Стройматериалы - категории" }
  return (
    <Layout>
      <SEO seo={seo} />
      <PageHeading>Категории</PageHeading>
      {/* <ul>
        {categories.map(({node}) => {
          return (<li>{node.id}</li>)
        })}

      </ul>
      <details>
        <summary>Cat 1</summary>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </details> */}
      <CategoryList categories={categories} />
    </Layout>
  )
}

export const query = graphql`
  query CategoriesQuery {
    allStrapiCategory {
      edges {
        node {
          title
          id
          slug
          subcategories {
            title
          }
          icon {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  aspectRatio: 1.3
                )
              }
            }
          }
          products {
            name
          }
        }
      }
    }
  }
`

export default IndexPage
