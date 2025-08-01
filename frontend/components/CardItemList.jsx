export default function CardItemList({cardItems,setCardItems}){
    console.log(cardItems.map(card => card._id));

    return(
        <>
         <div className="container  mt-3">
             <div className="text-center">
                <h5>Your Cart : {cardItems.length} items</h5>
             </div>
            <div>
             <div>
                {cardItems.map((card)=>(
                    <div className="d-flex" key={card._id}>
                         <div >
                            <img src="./public/userproduct/tshirt1.jpg" alt="img" style={{width:"300px",height:"300px",objectFit:"cover"}} />
                        </div>
                        <div>
                            <p>dfsdf</p>
                            <p>{card.name}</p>
                        </div>
                    </div>
                    
                    


                ))}
            </div>
            </div>

         </div>
        </>
    )
}