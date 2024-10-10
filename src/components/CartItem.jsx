
import { MdDelete } from "react-icons/md";

import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex flex-col">

      <div className="flex flex-col">

        <div>
          <img src={item.image} 
          className="width- [100px ]height-[100px] borderRadius:[8px ]" />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div
            onClick={removeFromCart}>
              <MdDelete className=" border-2 border-red-700 rounded-full font-semibold 
          
          hover:bg-red-700
          hover:text-white transition duration-300 ease-in" />
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
