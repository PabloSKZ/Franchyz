const getAllClubs = () => {

  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = '/clubs.json'
  let url = baseURL + endUrl
  let headers = {
    'Content-Type': 'application/json'
  }

  let request = {
    headers: headers
  }

  return fetch(url, request)
    .then(response => response.json())
    .then(response => { return response })
};

function getClub(id) {

  let baseURL = process.env.REACT_APP_API_URL;
  let endUrl = `/clubs/${id}.json`
  let url = baseURL + endUrl

  let headers = {
    'Content-Type': 'application/json'
  }

  let request = {
    headers: headers
  }

  return fetch(url, request)
    .then(response => response.json())
    .then(response => { return response })

}


function createClub({ creationDate, clubName, clubDescription, zipCode, city, country, address, league, pool, conference, creatorId}) {
  let baseUrl = process.env.REACT_APP_API_URL;
  let endUrl = `/clubs.json`;
  let url = baseUrl + endUrl;

  let headers: {
    'Content-Type': 'application/json'
  }

  let data = {
    date_of_creation: creationDate,
    name: clubName,
    description: clubDescription,
    zip_code: zipCode,
    city: city,
    country: country,
    address: address,
    league: league,
    pool: pool,
    conference: conference,
    creator_id: creatorId,
  };

  let request = {
    method: 'post',
    headers: headers,
    body: JSON.stringify(data),
  }

  console.log(data)
  return fetch(url, request)
    .then((response) => response.json())
    .then((response) => { return response })
}

export { getClub, getAllClubs, createClub }
