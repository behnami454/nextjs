import Navbar from './navbar'
import Footerr from './footerr'

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar />
            { children }
            <Footerr />
        </div>
    )
}
export default Layout;