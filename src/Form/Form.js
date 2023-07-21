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
    <div id='form-page' >
      <h2>make your own quote!</h2>
      <form onSubmit={handleSubmit}>
        <label for='typeOfPoster'>1. select your quote type</label>
      </form>
    </div>
  )
}

export default Form;