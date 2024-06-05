import { GoArrowLeft } from "react-icons/go"
import { Link, NavLink } from "react-router-dom"
import "./SiteBar.scss"

const SiteBar = () => {
  return (
    <>
      <div className="site-bar">
        <div className="site-bar__wrapper">
          <div className="site-bar__navbar">
            <Link to={"/"} className="site-bar__link"><GoArrowLeft /></Link>
            <h1 className="site-bar__title">Admin Dashboard</h1>
          </div>
          <div className="site-bar__list">
              <NavLink to={"create-product"} className={"site-bar__page-link"}>Create product</NavLink>
              <NavLink to={"manage-product"} className={"site-bar__page-link"}>Manage product</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default SiteBar