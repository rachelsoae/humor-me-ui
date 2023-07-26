import './Card.css';


const Card = ({image, quote, type}) => {
  // const backgroundImage = 'https://www.mattpaynephotography.com/images/960/San-Juan-Mountains-Sunrise-Panorama.webp' 
  
  return (
    <article id='frame'>
      <div id='img-and-quote' >
        <img src={`${image}`} id='quote-img'/>
        <p id='quote' >{`${quote}`}</p>
      </div>
      <div id='emojis'>
        <button className='card-button'>{type === 'wholesome' ? '🥹' : '😈'}</button>
        <button className='card-button'>🗑️</button>
      </div>
    </article>
  )
}

export default Card;