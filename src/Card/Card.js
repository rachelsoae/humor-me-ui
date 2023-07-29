import './Card.css';


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