// Async/Await example
import fetch from 'node-fetch';

async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Data fetched:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData('https://jsonplaceholder.typicode.com/posts/1');
