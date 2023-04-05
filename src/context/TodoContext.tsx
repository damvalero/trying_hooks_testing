import {createContext} from "react";

const todoContext = createContext({
    text: '',
    done: false
})

export default todoContext