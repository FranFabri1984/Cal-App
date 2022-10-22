/* eslint no-eval: 0 */
import React, { useState } from "react";
import words from "lodash.words";
import Functions from "./Components/Functions";
import Numbers from "./Components/Numbers";
import MathOperations from "./Components/MathOperations";
import Result from "./Components/Result";
import "./App.css";

const App = () => {

    const [stack, setStack] = useState("");
    //libreria lodash
    const items = words(stack, /[^-^+^*^/]+/g)
    const value = items.length > 0 ? items[items.length-1] : "0";
    console.log("Render App", items)
    
    return (
        <main className="react-calculator">
            
            <Result value={value}/>

            <Numbers onClickNumber={number => {
                console.log("Click Number", number)
                setStack(`${stack}${number}`)
            }}/>

            <Functions onContentClear={() => {
                console.log("Clear")
                setStack("")
                }}
                onDelete={() => {
                    if (stack.length > 0) {
                        const newStack = stack.substring(0, stack.length - 1);
                        console.log("Delete", newStack)
                        setStack(newStack)
                    }
            }}/>

            <MathOperations
                onClickOperation={operation => {
                    console.log("Operation:", operation)
                    setStack(`${stack}${operation}`)
                }}
                onClickEqual={equal => {
                    console.log("Equal:", equal)
                    //uso de eval para operaciones math
                    setStack(eval(stack).toString())
            }}/>

        </main>)
}

export default App 
