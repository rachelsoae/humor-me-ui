import './Poster.css';
import { useParams } from 'react-router-dom';

const Poster = () => {
  const { type } = useParams();
  
  return (
    <main className={`poster poster-${type}`}>
      <p>{`${type}`}</p>
    </main>
  )
}

export default Poster;