import './Form.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Form = ({setPoster}) => {

  const [formData, setFormData] = useState({
    quote: '',
    type: '',
    image: ''
  })

  const defaultFormData = {
    quote: 'You had one job! Fill out the form! All of it!',
    type: 'chaotic',
    image: 'https://images.unsplash.com/photo-1561049501-e1f96bdd98fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=678&q=80'
  }

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

    if (!formData.quote || !formData.type || !formData.image) {
      setPoster(defaultFormData)
    } else {
      setPoster(formData)
    }
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
          value={formData.src}
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
        <Link to={`/poster/${formData.type || 'chaotic'}`}>
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