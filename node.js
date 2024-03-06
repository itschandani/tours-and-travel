// Replace 'YOUR_API_KEY' with the actual API key
const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://api.example.com/data';
//learning to set a api and but i dont know how to


// Make a GET request to the API
fetch(apiUrl, {
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
})
  .then(response => response.json())
  .then(data => {
    // Process and use the API data
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
