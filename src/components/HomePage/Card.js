function Card(image){
    return(
        <section className="card col-4 p-5 m-2">
            <img src={image.image} alt="food" className="card-img card-food"/>
            <section className="card-body mb-1">
                <h5 className="card-title">{image.name}</h5>
                <p className="card-text card-text-food">{image.description}</p>
                <a href={image.endpoint} className="btn lemon-button mt-1">Order now</a>
            </section>
        </section>
    )
}

export default Card;