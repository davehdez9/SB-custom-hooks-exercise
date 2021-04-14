import React, {useState} from 'react'

const useFlip = (initialState) => {
    const [state, setState] = useState(initialState)
    const flipState = () => {
        setState(state => !state)
    }
    return [state, flipState]
}

export default useFlip