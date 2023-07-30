import './Form.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Form = ({setPoster}) => {

  const [formData, setFormData] = useState({
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

  const handleSubmit = () => {
    setPoster(formData)
  }

  return (
    <main id='form-page' >
      <h2>make your own quote!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='type-of-poster'>1. select your quote type</label>
        <div className='buttons'>
          <label htmlFor="wholesome-radio" className='form-button' id='wholesome-button'>
            <input
              type="radio"
              name="type"
              value="wholesome"
              onChange={handleChange}
              checked={formData.type === 'wholesome'}
              id="wholesome-radio"
            />
            🥹 wholesome
          </label>
          <label htmlFor="chaotic-radio" className='form-button' id='chaotic-button'  >
            <input
              type="radio"
              name="type"
              value="chaotic"
              onChange={handleChange}
              checked={formData.type === 'chaotic'}
              id="chaotic-radio"
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
        <Link to={`/poster/${formData.type}`}>
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

Form.propTypes = {
  setPoster: PropTypes.func.isRequired
}