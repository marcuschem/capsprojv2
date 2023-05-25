function ListOfLinks(){
    return(
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
               <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Menu</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/booking">Reservations</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Order inline</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Login</a>
            </li>
        </ul>
    )
}

export {ListOfLinks}