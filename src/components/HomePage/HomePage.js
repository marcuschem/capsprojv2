import CallToAction from "../CallToAction/CallToAction.js";
import Specials from "../Specials/Specials.js"
import Chicago from "../Chicago/Chicago.js"

function HomePage(){
    return (
        <section id="home-page">
            <CallToAction/>
            <Specials/>
            <Chicago/>
        </section>
    )
}

export default HomePage;