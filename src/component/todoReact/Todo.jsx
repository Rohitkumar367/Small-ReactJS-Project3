import React from 'react'
import "./style.css"

const Todo = () => {
    return (
        <>
            <div className='main-div'>
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>Add Your List Here✌️</figcaption>
                    </figure>
                    <div className="addItems">
                        <input className='form-control' type="text" placeholder='✍️Add Item'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
