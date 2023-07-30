import './Card.css';
import PropTypes from 'prop-types';

const Card = ({image, quote, type, font}) => {
  return (
    <article className='frame'>
      <div 
        className='img' 
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }} 
      >
        <p 
          className='quote'
          style={{fontSize: `${font}`}}
        >{`${quote}`}</p>
      </div>
      <div className='emojis'>
        <button className='card-button'>{type === 'wholesome' ? '🥹' : '😈'}</button>
      </div>
    </article>
  )
}

export default Card;

Card.propTypes = {
  image: PropTypes.string,
  quote: PropTypes.string,
  type: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired
}