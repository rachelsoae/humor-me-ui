const getData = (data) => {
  return fetch(`https://stretch-cb17271b7d66.herokuapp.com/api/v1/${data}`)
  .then(response => handleResponse(response))
}

const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Oops! There was an error. ${response.status}: ${response.statusText}`)
  }
}

export { getData }