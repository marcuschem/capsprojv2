const image = require("../../images/restauranfood.jpg");


function CallToAction(){
    return (
        <section id="call-to-action" className="container-fluid row">
            <section id="summary-about-us"
                     className="col-5">
                <h3 className="little-lemon title heading">Little Lemon</h3>
                <h4 className="subheading">Chicago</h4>
                <p className="simple-description" id="about-us1">We are a family owned Mediterranean restaurant,
                    focused on traditional served in Irish. If you want to taste the best food in all the world
                    you should visit us at our restaurant located in Chicago.
                </p>
                <a href="/booking" className="btn lemon-button">Reserve a table</a>
            </section>
            <section id="the-best-dish" className="col-7">
                <img src={image}
                     alt="Restaurant Food"
                     className="img" width="200px"/>
            </section>
        </section>
    )
}

export default CallToAction;