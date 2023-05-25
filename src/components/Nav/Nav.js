import {Logo} from "../Logo.js";
import {Hamburger} from "./Hamburger.js";
import {ListOfLinks} from "./ListOfLinks.js";
import {SearchBar} from "./SearchBar.js"

function Nav() {
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Logo></Logo>
                <Hamburger></Hamburger>
                <div className="collapse navbar-collapse"
                     id="navbarSupportedContent">
                    <ListOfLinks></ListOfLinks>
                    <SearchBar></SearchBar>
                </div>
            </div>
        </nav>
    )
}


export {Nav};