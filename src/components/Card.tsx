import axios from 'axios'
import { useEffect, useState } from 'react'
import { categoryProps } from '../types'

function Card() {
  const [records, setRecords] = useState<categoryProps[]>([])

  const getRecords = async () => {
    try {
      const res = await axios.get(
        `https://tqfe-develop.herokuapp.com/ce/featured-course-list`,
        {
          headers: {
            Authorization: 'Token f3b715a18390d3097123869f63b14f1cdd8e4df0',
          },
        }
      )

      setRecords(res.data)
     // console.log(res);
    } catch (error) {}
  }
  useEffect(() => {
    getRecords()
  }, [])

  return (
    <>
   
      {records.map((_) => (
    
       <div className='col-md-3'>
        <div className="card" style={{width:'23rem'}}>
  <img src={_.card_image} className="card-img-top" alt="" />
  <div className="card-body">
    <h5 className="card-title">{_.name}</h5>
    <p className="card-text">{_.enrollment_source}</p>  </div>
       </div>
   </div>
      ))}
    </>
  )
}

export default Card