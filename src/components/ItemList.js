import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();
    const handleAddItem = (e) => {
      dispatch(addItem(e))
    }
    
    return(
        <>
            {items.map(e => 
                <div key={e.card.info.id} className="border-b-2 mb-5 pb-5 flex">
                    <div className="w-9/12">   
                        <h3>{e.card?.info?.name}</h3>
                        <p>Rs - {e.card?.info?.price / 100}</p>
                        <p className="text-gray-500">{e.card?.info?.description}</p>
                    </div>
                    <div className="w-2/12">
                     
                     <div className="absolute">
                         <button className="bg-lime-500 p-3 m-2" onClick={() => handleAddItem(e)}>Add</button>
                     </div>
                     <img className="w-full" src={IMG_URL + e.card.info.imageId} />
                    </div>
                    
                </div>
             
                )}
        </>
    )
}
export default ItemList;