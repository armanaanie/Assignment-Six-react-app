

const CartProducts = ({inCart,setInCart}) => { console.log(inCart,"inCart")
    return (
        <div>
          {inCart.map((pricing,ind)=>{
            return (<div key={ind} pricing={pricing}><div className='flex gap-2  items-center '><span>{pricing.icon}</span><div><p className='font-bold flex gap-1'>{pricing.name}</p><p className='font-extralight text-gray-400'>{pricing.price}</p></div></div></div>
            
            )
            
          })}
        </div>
    );
};

export default CartProducts;