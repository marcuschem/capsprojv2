import logo from "../images/logo.svg";


function Logo(){
    return(
        <a href="/" className="navbar-brand">
            <img src={logo} alt="logo" className="navbar brand img-fluid"/>
        </a>
    )
}


export {Logo};