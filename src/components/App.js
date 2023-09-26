import React, { useState } from "react";
import './../styles/App.css';
import { error } from "cypress/types/jquery";

const App = () => {
  const [state, setState] = useState({
    loading:false,
    error:null,
    data:null,
  })

  const fetchData = async () => {
    setState({
      loading:true,
      error:null,
      data:null
    })
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setState({
        loading:false,
        error:null,
        data:data,
      })
      
    } catch (error) {
      setState({
        loading:false,
        error:error,
        data:null
      })
    }
  }
  useEffect(() => {
    fetchData();
  },[])
  return (
    <div>
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error.message}</h1>}
        {data && <h1>{data}</h1>}
    </div>
  )
}

export default App
