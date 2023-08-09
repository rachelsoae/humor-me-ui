import './Loading.css'
import { Navigate } from 'react-router-dom';


const Loading = ({quotes}) => {

  if (quotes.length) {
    return <Navigate to='/' />
  }

  return (
    <div className='loading__container'>
      <div className='loading'>
        <h2 className='loading__message'>🤔  Loading...  🤔</h2>
      </div>
    </div>
  )
}

export default Loading;