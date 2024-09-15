import React from 'react'

const CourseDetails = () => {

  const handleBuycourse = () =>{
    if(token){
        BuyCourse()
        return;
    }
  }

  return (
    <div>
      <button className='bg-yellow-50 p-6 mt-10'
      onClick={()=>handleBuycourse()}
      >
        Buy Now
      </button>

    </div>
  )
}

export default CourseDetails