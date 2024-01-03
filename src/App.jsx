import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Input from './components/Input'
import Button from './components/Button'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    const storedData = localStorage.getItem('list')
    if (storedData) {
      setData(storedData.split(','))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('list', data)
  }, [data])

  const addData = () => {
    if (inputValue.trim() === '') {
      alert('Nieko neįvedėte! :)')
      return
    }

    setData([...data, inputValue])
    setInputValue('')
  }

  const removeData = (text) => {
    const updatedData = data.filter((data) => data !== text)
    setData(updatedData)
  };

  return (
    <>
      <Header />
      <div className="input-container">
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Button addData={addData} />
      </div>

      <ul id="todo">
        {data.map((data, index) => (
          <li key={index} className="list-item">
            <div className="text">{data}</div>
            <button className="remove" onClick={() => removeData(data)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App