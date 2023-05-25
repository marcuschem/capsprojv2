function FooterNavbar(){
    return(
        <section className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>

            <ul className="list-unstyled mb-0">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/chicago">About</a>
                </li>
                <li>
                    <a href="/menu">Menu</a>
                </li>
                <li>
                    <a href="/bookings">Reservations</a>
                </li>
                <li>
                    <a href="/order">Order online</a>
                </li>
            </ul>
        </section>
    )
}

export {FooterNavbar}