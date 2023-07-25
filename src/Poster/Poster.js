import './Poster.css';
import { useParams } from 'react-router-dom';

const Poster = () => {
  const { type } = useParams();
  
  return (
    <section className={`poster-${type}`}>
      <p>{`${type}`}</p>
    </section>
  )
}

export default Poster;