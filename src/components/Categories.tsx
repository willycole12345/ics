import axios from 'axios'
import { useEffect, useState } from 'react'
import { categoryListProps } from '../types'

function Categories() {
  const [records, setRecords] = useState<categoryListProps[]>([])

  const getRecords = async () => {
    try {
      const res = await axios.get(
        `https://tqfe-develop.herokuapp.com/ce/category/`,
        {
          headers: {
            Authorization: 'Token f3b715a18390d3097123869f63b14f1cdd8e4df0',
          },
        }
      )

      setRecords(res.data)
      console.log(res);
    } catch (error) {}
  }
  useEffect(() => {
    getRecords()
  }, [])

  return (
    <>
   
      {records.slice(0,3).map((_) => (
    
       <div className='col-md-4'>
        <div className="card" style={{width:'25rem'}}>
             <img className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{_.category}</h5>
                     <p className="card-text">{_.subcategory}</p> 
                   </div>
       </div>
   </div>
      ))}
    </>
  )
}

export default Categories;