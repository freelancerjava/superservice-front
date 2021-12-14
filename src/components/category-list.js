import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Image from "~/components/image"
import Card from "~/components/styled/card"

const CategoryList = ({ categories }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {categories.map(({ node }) => {
      return node.products.length > 0 ? (
        <Card key={node.id}>
          <Link to={`/categories/${node.slug}`}>
            {/* <Image
              alt="Category Image"
              className="rounded-t-md border-gray-200	 border-b"
              image={node.icon}
            /> */}
            <p className="px-4 py-4">{node.title}</p>
          </Link>
        </Card>
      ) : <></>
    })}
  </div>
)

CategoryList.propTypes = {
  categories: PropTypes.array,
}

export default CategoryList
