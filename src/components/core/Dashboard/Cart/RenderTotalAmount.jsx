import React from 'react'
import { useSelector } from 'react-redux'
import IconBtn from '../../../Common/IconBtn'

const RenderTotalAmount = () => {

    const {total,cart} = useSelector((state) => state.cart)

    const handleBuyCourse = () => {
       const courses = cart.map((course)=>course.id)
       console.log("Bought these Course", courses);  
    }

  return (
    <div>
        <p>Total:</p>
        <p>Rs. {total}</p>

        <IconBtn
            text="Buy Now"
            onClick={handleBuyCourse}
            customClasses={"w-full justify-ceter"}
        />
    </div>
  )
}

export default RenderTotalAmount