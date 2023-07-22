import './Card.css';

const Card = () => {
  // const backgroundImage = 'https://www.mattpaynephotography.com/images/960/San-Juan-Mountains-Sunrise-Panorama.webp'
  return (
    <div id='frame'>
      <div id='img-and-quote' >
        <img src='https://www.mattpaynephotography.com/images/960/San-Juan-Mountains-Sunrise-Panorama.webp' id='quote-img'/>
        <p id='quote' >“Courage is more exhilarating than fear and in the long run it is easier. We do not have to become heroes overnight. Just one step at a time, meeting each thing that comes up, seeing it is not as dreadful as it appeared, discovering we have the strength to stare it down.”</p>
      </div>
      <div id='emojis'>
        <button className='card-button'>🥹</button>
        <button className='card-button'>🗑️</button>
      </div>
    </div>
  )
}

export default Card;