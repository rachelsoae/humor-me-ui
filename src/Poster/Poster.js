import './Poster.css';
import { useParams, useState } from 'react-router-dom';

import Card from '../Card/Card'

const Poster = ({poster}) => {
  return (
    <main className={`poster poster-${poster.type}`}>
      <Card poster={poster} />
    </main>
  )
}

export default Poster;