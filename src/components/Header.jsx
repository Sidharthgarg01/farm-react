import { IoCartOutline, IoSearch } from "react-icons/io5"


const Header = () => {
  return (
    <header>
        <div className="logo-container">
            <div className="logo">
                <h4 className="logo-text">the local life</h4>
            </div>
        </div>
        <nav>
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a href="/">About</a>
                </li>
                <li className="nav-item">
                    <a href="/">Shop</a>
                </li>
                <li className="nav-item">
                    <a href="/">Contact Us</a>
                </li>
            </ul>
        </nav>
        <div className="cta">
        <IoSearch />
        <IoCartOutline />
        </div>
    </header>
  )
}

export default Header
