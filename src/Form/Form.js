import './Form.css';
import { useState } from 'react'

const Form = () => {

  const [formData, setFormData] = useState({
    //need to add an id in here somewhere
    type: '',
    imgLink: '',
    quote: '',
  })

  const handleSubmit = () => {
    //code here for what to do when form is submitted
  }

  return (
    <main id='form-page' >
      <h2>make your own quote!</h2>
      <p>Your quote poster will be added to the quotes and can be generated randomly by future users.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor='type-of-poster'>1. select your quote type</label>
        <div className='buttons'>
          <button className='form-button' id='wholesome-button'>🥹 wholesome quote</button>
          <button className='form-button' id='chaotic-button'>😈 chaotic quote</button>
        </div>
        <label htmlFor='img-url'>2. add you image url</label>
        <input className='text-input' type='text' placeholder='image link goes here'></input>
        <label htmlFor='img-url'>3. create your quote</label>
        <input className='text-input'm  type='text' placeholder='quote goes here'></input>
        <div className='buttons'>
          <button className='form-button'>✏️ create</button>
        </div>
      </form>
    </main>
  )
}

export default Form;