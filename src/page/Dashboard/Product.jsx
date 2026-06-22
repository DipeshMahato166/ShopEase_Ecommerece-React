import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Product = () => {
    const[data,setData]=useState([])
    const [loading, setLoading] = useState(true);
 const getData= async()=>{

     try{
 
         const res= await axios.get("https://fakestoreapi.com/products")
         setData(res.data)
     }
     catch(err){
        console.log(err);
        
     }finally {
      setLoading(false); 
    }
 }

 

 const handleDelete= async(id)=>{
     const res= await axios.delete(`https://fakestoreapi.com/products/${id}`)
    console.log("delete",res);//
    if(res.status === 200){
        alert(`Product of id :${id} is deleted successfully!`)
    }
    
 }

  

    useEffect(()=>{
        getData ()
    },[])


    if (loading) {
    return (
      <div className="flex justify-center items-center h-screen font-serif">
        <h1 className="text-2xl font-bold text-gray-600">Loading...</h1>
      </div>
    );
  }
// console.log(data)
    return (

        <table className="border border-black  font-serif">
            <thead>
                <tr>
                    <th className="border border-black p-2">id</th>
                    <th className="border border-black p-2">title</th>
                    <th className="border border-black p-2">category</th>
                    <th className="border border-black p-2">price</th>
                    <th className="border border-black p-2">description</th>
                    <th className="border border-black p-2" colSpan={2}>Action</th>

                </tr>
            </thead>
            {
                data.map((d)=>{
                    return(

                 
            <tbody key={d.id} >

                <tr className=' hover:bg-gray-100'>
                    <td className="border border-black p-2"> {d.id}</td>
                    <td className="border border-black p-2">{d.title} </td>
                    <td className="border border-black p-2">{d.category}</td>
                    <td className="border border-black p-2">{d.price}</td>
                    <td className="border border-black p-2">{d.description}</td>

                    <td className="border border-black p-2">
                       <Link to={`/product/${d.id}`}> 
                       <button className="bg-blue-500 text-white px-2 py-1 rounded">
                            Edit
                        </button>
                        </Link>
                    </td>

                    <td className="border border-black p-2">
                        <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={()=>handleDelete(d.id)}>
                            Delete
                        </button>
                    </td>
                </tr>

            </tbody>
   )

                })
            }
        </table>

    )
}

export default Product