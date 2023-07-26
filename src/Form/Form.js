import './Form.css';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { mockPosters } from '../mockData'

const Form = ({setPoster}) => {

  const [formData, setFormData] = useState({
    //need to add an id in here somewhere
    quote: '',
    image: '',
    type: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
  
    setFormData(prevState => {
      return {
        ...prevState, 
        [name]: value
      }
    })
  }

  const handleSubmit = (event) => {
    setPoster(formData)
  }

  return (
    <main id='form-page' >
      <h2>make your own quote!</h2>
      {/* <p>Your quote poster will be added to the quotes and can be generated randomly by future users.</p> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor='type-of-poster'>1. select your quote type</label>
        <div className='buttons'>
          <label htmlFor="wholesome-button" className='form-button' id='wholesome-button'>
            <input
              type="radio"
              name="type"
              value="wholesome"
              onChange={handleChange}
              checked={formData.type === 'wholesome'}
            />
            🥹 wholesome
          </label>
          <label htmlFor="chaotic-button" className='form-button' id='chaotic-button'  >
            <input
              type="radio"
              name="type"
              value="chaotic"
              onChange={handleChange}
              checked={formData.type === 'chaotic'}
            />
            😈 chaotic
          </label>
        </div>
        <label htmlFor='img-url'>2. add your image url</label>
        <input 
          className='text-input' 
          type='text' 
          placeholder='insert image link here'
          name='image'
          onChange={handleChange}
          value={formData.image}
        />
        <label htmlFor='img-url'>3. create your quote</label>
        <input 
          className='text-input' 
          type='text' 
          placeholder='insert quote here'
          name='quote'
          onChange={handleChange}
          value={formData.quote}
        />
        <Link to={`/${formData.type}`}>
          <div className='buttons'>
            <input 
              type="submit" 
              className='form-button submit'
              value="✏️ create"
              onClick={handleSubmit}
            />
          </div>
        </Link>
      </form>
    </main>
  )
}

export default Form;