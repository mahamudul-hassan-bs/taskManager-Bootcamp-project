import React from 'react'
import Form from '../components/Form'
import TodoTask from '../components/TodoTask'

const Task = () => {
  return (
    <div className='container'>
      <h1 className='text-2xl mb-4 text-bold text-teal-700'>Tasks</h1>
      <Form/>
      <TodoTask/>
    </div>
  )
}

export default Task
