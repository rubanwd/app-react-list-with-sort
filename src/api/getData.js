var getDataAPI = function() {
    var url = 'http://rtivital.github.io/react-challenge-sort-and-search/data.json';

    return fetch(url)
    .then(function(response) {
      return response.json()
    })
    .catch(function(error) {
      console.log('error', error)
    })
  
};

export default getDataAPI;