import React, { useEffect, useState } from 'react';
import './Home.css';
import Task from './Task';

const Home = () => {
  // const [inputValue, setInputValue] = useState(0);

  // const btnStyle = {
  //   backgroundColor: 'light',
  //   padding: 20,
  //   border: 'none',
  //   margin: 10,
  // }

  // const decrement = () => {
  //   setInputValue(inputValue - 1);
  // }

  // const increment = () => {
  //   setInputValue(inputValue + 1);
  // }

  const initialArray = localStorage.getItem('tasks')
  ?JSON.parse(localStorage.getItem('tasks'))
  : [];

  const [tasks, setTasks] = useState(initialArray);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title, description }]);
    setTitle('');
    setDescription('');
  };

  const deleteTask = (index) => {
    const filteredArr = tasks.filter((val,i) => {
      return i !== index;
    });

    setTasks(filteredArr);
  };

  useEffect(() => {
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }, [tasks]);



  return (
    <div className='conatiner'>
      <h1>Todays Goals</h1>
      <form onSubmit={submitHandler}>
        <input type="text"
        placeholder='Task'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        
        <button type='submit'>ADD</button>
      </form>

      {tasks.map((item, index)=>(
        <Task
          key={index}
          title={item.title}
          description={item.description}
          deleteTask={deleteTask}
          index={index}
          />
      ))}
    </div>



    // <div>
    //   <input
    //     style={{backgroundColor: '#f1f1f1', padding: 20, }}
    //     type='number'
    //     placeholder='Enter Something'
    //     value={inputValue}
    //   />

    //   <button style={btnStyle} onClick={decrement}>-</button>
    //   <button style={btnStyle} onClick={increment}>+</button>
    // </div>    
  )
}

export default Home