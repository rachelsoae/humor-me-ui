import './Card.css';


const Card = ({image, quote, type}) => {
  // const backgroundImage = 'https://www.mattpaynephotography.com/images/960/San-Juan-Mountains-Sunrise-Panorama.webp' 
  return (
    <div id='frame'>
      <div id='img-and-quote' >
        <img src={`${image}`} id='quote-img'/>
        <p id='quote' >{`${quote}`}</p>
      </div>
      <div id='emojis'>
        <button className='card-button'>🥹</button>
        <button className='card-button'>🗑️</button>
      </div>
    </div>
  )
}

export default Card;