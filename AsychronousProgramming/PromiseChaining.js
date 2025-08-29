function fetchData(url) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      if (url === 'data.json') {
        resolve({ message: 'Data fetched successfully!'} );
      } else {
        reject(new Error('Failed to fetch data.'));
      }
    }, 3000);
  });
}

fetchData('data.json')
  .then(response => {
    console.log(response.message); // Output: Data fetched successfully!
    return fetchData('another_data.json'); // Return a new Promise
  })
  .then(anotherResponse => {
    console.log(anotherResponse.message); // This line will not be reached if 'another_data.json' fails
  })
  .catch(error => {
    console.error('Error in promise chain:', error.message); // Output: Error in promise chain: Failed to fetch data.
  });

