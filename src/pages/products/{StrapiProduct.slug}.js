import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import ProductList from "~/components/product-list"
import SEO from "~/components/seo"
import Image from "~/components/image"

import { formatPrice } from "~/helpers/currency-formatter"

const ProductPage = ({ data }) => {
  const product = data.strapiProduct

  const seo = {
    title: product.title,
    shareImage: product.image,
  }

  const flexJustify = product.specs.length > 0 ? "between" : "center"

  return (
    <Layout>
      <SEO seo={seo} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 mt-4">
        {product.images && (
          <div className="md:col-span-2 md:pr-4">
            <Image
              className="rounded-md"
              image={product.images[0]}
              alt="Product Image"
            />
          </div>
        )}
        <div className={`flex flex-col justify-${flexJustify}`}>
          <div className="mb-4">
            <h1 className="text-4xl mb-1">{product.name}</h1>
            {product.price && (
              <div className="text-sm flex justify-between">
                <p className="font-extralight">Price</p>
                {/* <p>{formatPrice(product.price)}</p> */}
                <p>{product.price}</p>
              </div>
            )}
          </div>
          <div className="w-full">
            {product.specs &&
              product.specs.map((spec, index) => (
                <div
                  className="w-full flex text-sm justify-between items-between border-b mb-2 pb-1"
                  key={`${spec.key}-${index}`}
                >
                  <span className="font-extralight">{spec.key}</span>
                  <span>{spec.value}</span>
                </div>
              ))}
          </div>
          <a
            href={product.link}
            target="_blank"
            rel="noreferrer"
            className="p-4 text-center font-medium rounded-md border-2 mt-4"
          >
            Ресурс
          </a>
        </div>
      </div>
      <div className="my-1 mb-24">
        <h1 className="text-4xl font-bold text-center">Описание</h1>
        <hr className="mt-2 mb-4 m-auto w-24 border-t-4" />
        <ReactMarkdown
          className="prose md:w-4/5 m-auto"
          children={product.info}
        />
      </div>
      {/* {product.relatedProducts.length > 0 && (
        <div className="flex flex-col my-6 mb-24">
          <h2 className="text-3xl font-bold text-center">Related Products</h2>
          <hr className="mt-6 mb-12 m-auto w-24 border-t-4" />
          <ProductList
            products={product.relatedProducts}
            gridCols="grid-cols-1 md:grid-cols-2"
          />
        </div>
      )} */}
    </Layout>
  )
}

export const query = graphql`
  query ProductQuery($slug: String!) {
    strapiProduct(slug: { eq: $slug }) {
      name
      info
      id
      price
      link
      images {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              aspectRatio: 1.3
            )
          }
        }
      }
      specs {
        key
        value
      }
    }
  }
`

export default ProductPage
