import React, { useState } from 'react'
import axios from 'axios'
import uuid from "uuid";

const useAxios = (url) => {
    // Axios should take URL 
    // similar to useState, It should return an Array with 2 Elements:
        // - First Element: Array of data obtained from previous ajax request 
        // - Second Element: function that will add a new object of data to our array
    const [response, setResponse] = useState([])

    const whichGame = url[8]

    let addData = undefined

    if (whichGame === "p") {
        addData = async (params) => {
            const response = await axios.get(`${url}${params}`)
            setResponse(data => [...data,  {...response.data, id: uuid()}])
        }
    } else if (whichGame === "d") {
        addData = async () => {
            const response = await axios.get(`${url}`)
            setResponse(data => [...data,  {...response.data, id: uuid()}])
        }
    }
    return [response, addData]

}

export default useAxios