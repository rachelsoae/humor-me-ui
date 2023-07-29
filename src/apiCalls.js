const getData = (data) => {
  return fetch(`https://stretch-api.onrender.com/api/v1/${data}`)
  .then(response => handleResponse(response))
}

const postFavorite = (data) => {
  return fetch(`https://stretch-api.onrender.com/api/v1/posters`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => handleResponse(response))
}

const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`${response.status}`)
  }
}

export { getData, postFavorite }