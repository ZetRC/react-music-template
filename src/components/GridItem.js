const GridItem = ({ name, description, image}) =>{
    return(
        <>
         <div className="item">
            <img src={image} alt="" />
            <h5>{name}</h5>
            <small>{description}</small>
        </div>
        </>
    )
}

export default GridItem;