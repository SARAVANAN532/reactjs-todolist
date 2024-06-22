import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {

const {usename} = props
    

        return(
            <ul className='main'>
                {usename.map((todo, todoindex) => {
                    return(
                    <TodoCard {...props} key={todoindex} index={todoindex}>
                            <p>{todo}</p>
                    </TodoCard>
                    )
                })}
            </ul>
        )

  
}
