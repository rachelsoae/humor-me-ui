import './Poster.css';
import Card from '../Card/Card'

const Poster = ({poster}) => {

  // use to simulate Favoriting
  // const formatData = () => {
  //   return {
  //     "id": Date.now(),
  //     "quote": {
  //       "text": `${formData.quote}`,
  //       "type": `${formData.type}`
  //     },
  //     "src": `${formData.image}`
  //   }
  // }

  // const favorite = formatData();
  // mockPosters.push(favorite);
  // return favorite;

  return (
    <main className={`poster poster-${poster.type}`}>
      <div className='poster-container'>
        <Card image={poster.image} quote={poster.quote} type={poster.type} />
      </div> 
    </main>
  )
}

export default Poster;