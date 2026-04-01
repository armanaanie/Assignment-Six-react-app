import { toast } from "react-toastify";


const CartProducts = ({ inCart, setInCart }) => {
    console.log(inCart, "inCart")
    const handleDeletedProduct = (pricing) => {
        console.log(pricing, "pricing")
        const filteredCart = inCart.filter((incart) => incart.id !== pricing.id)
        setInCart(filteredCart)
     toast.error(`You remove ${pricing.name}`)

    }
    const proceedToCheckout=()=>{
       setInCart([])
        toast.success('Successfully proceed')
    }
    const totalPrice= inCart.reduce((total,pricing)=>total+pricing.price,0);
    return (
  <div className="rounded-md border border-gray-400 p-2 mx-4">
    <p className="font-bold p-3 text-[25px]">Your cart</p>

    {inCart.length === 0 ? (
      <div className='flex flex-col items-center p-10'>
        <h2 className='font-bold'>Cart is empty</h2>
        <p className='font-light'>
          Go to available product for select product
        </p>
      </div>
    ) : (
      <div>
        {inCart.map((pricing) => (
          <div key={pricing.id}>
            <div className="flex justify-between items-center bg-gray-200 mt-2.5 rounded-md p-4">
              <div className='flex gap-2 items-center'>
                <span>{pricing.icon}</span>
                <div>
                  <p className='font-bold'>{pricing.name}</p>
                  <p className='font-extralight text-gray-400'>
                    <span className="font-bold">${pricing.price}</span>/Mo
                  </p>
                </div>
              </div>

              <button
                className="btn text-red-600"
                onClick={() => handleDeletedProduct(pricing)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="flex justify-between p-3">
          <p>Total:</p>
          <span className="font-bold">${totalPrice}</span>
        </div>

        <button
          className="btn w-full bg-gradient-to-r from-violet-950 to-violet-600 text-white rounded-3xl"
          onClick={proceedToCheckout}
        >
          Proceed to checkout
        </button>
      </div>
    )}
  </div>
)
}
export default CartProducts;