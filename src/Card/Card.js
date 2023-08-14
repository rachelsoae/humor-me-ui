import './Card.css';
import PropTypes from 'prop-types';

const Card = ({image, quote, type, font}) => {
  return (
    <article className='frame'>
      <div 
        className='img' 
        style={{
          backgroundImage: `url(${image || "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"})`,
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