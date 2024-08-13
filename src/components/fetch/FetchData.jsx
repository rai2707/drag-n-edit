import React, { useEffect, useState } from 'react'
import './fetchData.css'

const FetchData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const tableFetchData = async() =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json()
        console.log(data)
        setData(data)
    }
    useEffect(() =>{
        tableFetchData()
    },[])
  return (
    <div>
      
            <table>
                <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                </tr>
                {data.map((ele) =>{
                    return(
                <tr>
                    <td>{ele.id}</td>
                    <td>{ele.title}</td>
                </tr>
                    )
                })}
            </table>
      
    </div>
  )
}

export default FetchData;
