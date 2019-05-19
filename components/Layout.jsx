import NavBar from './NavBar.jsx'

const layoutStyle = {
    margin: 0,
    padding: 0,

}

const Layout = props => (
    <div style={layoutStyle}>
        <NavBar/>
        {props.children}
    </div>
)

export default Layout