import React, { useState } from 'react'
import axios from 'axios'
import uuid from "uuid";

const useAxios = (url) => {
    // Axios should take URL 
    // similar to useState, It should return an Array with 2 Elements:
        // - First Element: Array of data obtained from previous ajax request 
        // - Second Element: function that will add a new object of data to our array
    const [response, setResponse] = useState([])
    
    const addData = async () => {
        const response = await axios.get(url)
        setResponse(data => [...data, { ...response.data, id: uuid() }])
    }

    return [response, addData]
}

export default useAxios