import React from 'react'

const MenuCard = ({menuData}) => { 
    return (
        <>
            <section className='main-card--cointainer'>
                {menuData.map((curElem) => {

                    const {id, name, category, image, description} = curElem;

                    return(
                        <>
                            <div className='card-container' key={id}>
                                <div className="card">
                                <div className="card-body">
                                    <span className='card-number card-circle subtle'>{id}</span>
                                    <span className="card-author subtle">{name}</span>
                                    <h2 className='card-title'>{name}</h2>
                                    <span className="card-description subtle">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda temporibus voluptatem dignissimos sequi porro. Est, asperiores. Officiis quasi nulla, corrupti nam, numquam omnis, facilis in minima consectetur unde ad quam eveniet quis fuga molestiae excepturi!
                                    </span>
                                    <div className="card-read">Read</div>
                                </div>
                                <img src= {image} alt="images" className='card-media'/>

                                <span className='card-tag subtle'>Order Now</span>
                                </div>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
  )
}

export default MenuCard
