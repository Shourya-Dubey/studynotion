import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { BuyCourse } from '../services/operations/studentFeaturesAPI';

const CourseDetails = () => {

  const {user} = useSelector((state) => state.profile);
  const {token} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {courseId} = useParams();

  const handleBuycourse = () =>{
    if(token){
        BuyCourse(token, [courseId], user, navigate, dispatch);
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