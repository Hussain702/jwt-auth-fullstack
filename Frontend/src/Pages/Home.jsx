import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate =useNavigate()
  const [loggedUser,setLoggedUser]=useState('')
  const [products,setProducts]=useState([])
  useEffect(()=>
  {
     setLoggedUser(localStorage.getItem('loggedInUser'))
  },[])
  const handleLoggedout=()=>
  {
    localStorage.removeItem('token')
     localStorage.removeItem('loggedInUser')
     setTimeout(()=>
    {
       navigate('/login')
    },1000)

  }
  const fetchProducts=async ()=>
  {
      const url='http://localhost:8080/products'
      const header={
        headers:{
          'authorization':localStorage.getItem('token')
        }
      }
      const response=await fetch(url,header)
      const result=await response.json()
      setProducts(result)

  }
  useEffect(()=>
  {
    fetchProducts()
  })
  return (
    <div>
          <h1>{loggedUser}</h1>
          <ul>
            {
              products.map((item)=>(
                <li key={item.id}>{item.name}</li>

              ))
            }
          </ul>

          <button onClick={handleLoggedout}>LoggedOut</button>
    </div>
  );
};

export default Home