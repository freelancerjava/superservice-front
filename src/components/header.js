import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import StrapiLogo from "~/images/autoshop.png"

const Header = ({ setOpenModal }) => {
  return (
    <header className="p-8">
      <div className="flex flex-col items-center">
        <Link className=" text-lg w-100 mb-4" to="/">
          {/* <img src={StrapiLogo} alt="strapi catalog logo" /> */}
          <h1>Super Service</h1>
        </Link>
        <div className="flex flex-col items-center md:flex-row">
          <Link className="mx-2 mb-2 md:mb-0 text-lg" to="/">
            Категории
          </Link>
          {/* <Link className="mx-2 mb-2 md:mb-0 text-lg" to="/products">
            Продукты
          </Link>
          <button
            className="mx-2 mb-2 md:mb-0 text-lg"
            onClick={() => setOpenModal(true)}
          >
            Поиск
          </button> */}
        </div>
      </div>
      <hr className="mt-6 m-auto w-24 border-t-4 color-accent" />
    </header>
  )
}

Header.propTypes = {
  siteName: PropTypes.string,
}

Header.defaultProps = {
  siteName: ``,
}

export default Header
