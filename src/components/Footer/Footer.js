
import {FooterContent} from "./FooterContent.js"
import {FooterNavbar} from "./FooterNavbar.js";
import {FooterContact} from "./FooterContact.js"
import {SocialMedia} from "./SocialMedia.js"

function Footer() {
    return(
        <footer className="container-fluid mt-5 w-100 text-center text-lg-start bg-dark text-white mb-0">
            <section className="col-12 p-4">
                <section className="row">
                    <section className="col-3">
                        <FooterContent></FooterContent>
                    </section>
                    <section className="col-3">
                        <FooterNavbar></FooterNavbar>
                    </section>
                    <section className="col-3">
                        <FooterContact></FooterContact>
                    </section>
                    <section className="col-3">
                        <SocialMedia></SocialMedia>
                    </section>
                </section>
            </section>
        </footer>
    )
}


export {Footer};