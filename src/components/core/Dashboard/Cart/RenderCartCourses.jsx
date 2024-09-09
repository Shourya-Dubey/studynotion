import React from 'react'
import { FaStar } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri"
import { useDispatch, useSelector } from 'react-redux'
import ReactStars from "react-rating-stars-component"
import { removeFromCart } from '../../../../slices/cartSlice'

const RenderCartCourses = () => {

  const {cart} = useSelector((state)=>state.cart)
  const {dispatch} = useDispatch();

  return (
    <div>
      {
        cart.map((course, index) => {
            <div>
                <div>
                    <img src={course?.thumbnail}/>
                    <div>
                        <p>{course?.courseName}</p>
                        <p>{course?.category?.name}</p>

                        <div>
                            <span>4.8</span>
                            <ReactStars
                                count={5}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar/>}
                                fullIcon={<FaStar/>}
                            />
                            <span>{course?.ratingAndReviews?.length}Rating</span>
                        </div> 
                    </div>
                </div>

                <div>
                    <button
                    onClick={()=> dispatch(removeFromCart(course._di))}
                    >
                        <RiDeleteBin6Line/>
                        <span>Remove</span>
                    </button>

                    <p>{course?.price}</p>
                </div>
            </div>
        })
      }
    </div>
  )
}

export default RenderCartCourses