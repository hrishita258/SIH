import Link from "next/link";
import { useState, useEffect } from 'react'
import useStorage from '../useSessionStorage';
// const fs = require('fs')

export default function Home() {
  const { getItem, setItem, removeItem } = useStorage();
  console.log(getItem("hh"))
  const [notes, setNotes] = useState([])
  const [values, setValues] = useState({
    title: '',
    desc: ''
  })

  const handleDelete = id => {
    setNotes(notes.filter(item => item.id !== id))
    removeItem("hh")
    setItem("hh", JSON.stringify(notes))

    // fs.writeFileSync('data.json', JSON.stringify(notes, null, 2))
  }

  const handleSubmit = () => {

    let obj = { id: notes.length + 1, title: values.title, desc: values.desc }

    setNotes(prevState => [
      ...prevState,
      obj
    ])
    console.log(notes)
    removeItem("hh")
    setItem("hh", JSON.stringify(notes))
    // fs.writeFileSync('data.json', JSON.stringify(notes, null, 2))
  }

  const handleTitleInputChange = event => {
    event.persist()
    setValues(values => ({
      ...values,
      title: event.target.value
    }))

  }

  const handleDescInputChange = event => {
    event.persist()
    setValues(values => ({
      ...values,
      desc: event.target.value
    }))
  }

  return (
    <div className="container">
      <head>
        <title>Notes App</title>
      </head>

      <main>
        <h1 className="title">Make your notes here!</h1>
        {notes &&
          notes.length &&
          notes.map((h, i) => (
            <div className="grid" key={h.id}>
              <a className="card">
                <Link href={`/notes?id=${h.id}`}>

                  <h2>
                    {' '}
                    {i + 1}. {h.title}{' '}
                  </h2>
                </Link>
                <button onClick={() => handleDelete(h.id)}>Delete</button>{' '}
                {/* <button>Update</button>*/}
              </a>
            </div>
          ))}
      </main>

      <div className="grid">

        <div>
          <input
            id="title"
            class="form-field"
            type="text"
            placeholder="enter title"
            name="title"
            onChange={handleTitleInputChange}
          />

          <textarea
            id="desc"
            class="form-field"
            placeholder="enter desc"
            name="desc"
            onChange={handleDescInputChange}
          ></textarea>

          <button onClick={handleSubmit}> Save</button>
        </div>
      </div>
    </div>
  )
}
