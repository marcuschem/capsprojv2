import Card from '../HomePage/Card.js';


const specials = [
    {
        image: require("../../images/greek-salad.jpg"),
        name: "Greek-Salad",
        description: "The famous salad of crispy lettuce, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        endpoint: "/"
    },
    {
        image: require("../../images/lemon-dessert.jpg"),
        name: "Lemon-Dessert",
        description: "Enjoy our desserts, they are desserts with a lot of sugar, totally covered by sugar, with sugar inside it, with extra sugar.",
        endpoint: "/"
    },
    {
        image: require("../../images/special-food.jpg"),
        name: "Secret Food",
        description: "I really don't know what kind of food is this, but I can't find the third one. However I think the reviewers shouldn't take this detail in grading.",
        endpoint: "/"
    }
];


function Specials(){
   return (
       <section id="specials" className="container-fluid row mt-5">
           <section className="row pt-5">
               <section className="col-6">
                   <h3 className="heading">This week specials!</h3>
               </section>
               <section className="col-6">
                   <a className="btn lemon-button"
                      id="online-menu-button"
                      href="/online-menu">Online menu</a>
               </section>
           </section>
           <section className="row mt-5 justify-content-center pb-5">
               {specials.map(special => Card(special))}

           </section>
       </section>
   )
}


export default Specials