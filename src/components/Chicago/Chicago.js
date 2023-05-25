function Chicago() {
    return (
        <section className="container-fluid row mb-5 p-5">
            <section className="col-6 justify-content-end">
                <h3 className="little-lemon title heading">Little Lemon</h3>
                <h4 className="subheading">Chicago</h4>
                <p className="simple-description text-dark">
                    Little Lemon is a Charming neighborhood bistro that serves
                    simple food and classic cocktails in a lively but casual environment.
                    The restaurant features a locally-sourced menu with daily specials.
                </p>
            </section>
            <section className="col-6">
                <img src={require("../../images/mario_and_adrian_a.jpg")}
                     className="img position-relative"
                     alt="Mario and Adrian"
                     id="mya1"
                />
                <img src={require("../../images/mario_and_adrian_b.jpg")}
                     className="img position-relative"
                     alt="Mario and Adrian"
                     id="mya2"
                />
            </section>
        </section>
    )
}

export default Chicago;