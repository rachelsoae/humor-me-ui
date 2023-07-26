import './Poster.css';
import Card from '../Card/Card'

const Poster = ({poster}) => {
  return (
    <main className={`poster poster-${poster.type}`}>
      <Card image={poster.image} quote={poster.quote} type={poster.type} />
    </main>
  )
}

export default Poster;