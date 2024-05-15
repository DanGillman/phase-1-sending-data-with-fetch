function submitData(name, email) {
  const url = 'http://localhost:3000/users';
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };
  const data = {
    name: name,
    email: email
  };

  return fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      // Append the id to the DOM here
      document.body.innerHTML += data.id;
    })
    .catch(error => {
      // Append the error message to the DOM here
      document.body.innerHTML += error.message;
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));
}