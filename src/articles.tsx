import React, { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';

export default function Articles() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = 'My Test - Articles';

    // Get today's date and 7 days ago for a valid date range
    const today = new Date();
    const weekAgo = new Date();
    weekAgo.setDate(today.getDate() - 7);
    
    const toDate = today.toISOString().split('T')[0];
    const fromDate = weekAgo.toISOString().split('T')[0];

    // Llamada directa a NewsAPI (sin servidor intermedio)
    // OJO: la API key queda pública en el frontend si la pones aquí.
    const apiKey = 'dcd28e9ccba4430996d1818e88df2c4a'; // pon aquí tu API key o cámbiala por otra
    const q = 'apple';
    const sortBy = 'popularity';

    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&from=${fromDate}&to=${toDate}&sortBy=${sortBy}&apiKey=${apiKey}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        setData(json);
        setIsLoading(false);
        console.log(json);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
        setIsLoading(false);
        setData({ 
          articles: [], 
          error: 'Failed to load articles. Please try again later.'
        });
      });
  }, []); 

  if (isLoading) {
    return (
      <div className="flex justify-center mt-5">
        <CircularProgress size="30px" color="primary" />
      </div>
    );
  } else {
    // Show error message if there's an error
    if (data?.error) {
      return (
        <div className="flex flex-col items-center justify-center mt-10 p-5">
          <p className="text-center text-red-600 text-lg font-semibold mb-2">
            {data.error}
          </p>
          <p className="text-center text-gray-500 text-sm">
            Make sure the backend server is running on port 3001
          </p>
        </div>
      );
    }

    return (
      <div className="lg:columns-3 md:columns-2 sm:columns-1 m-5 gap-5">
        {(data?.articles && data.articles.length > 0) ? data.articles.map((a, index) => (
          <div
            className="rounded-xl shadow-xl border-1 border-sky-500 break-inside-avoid-column mb-5"
            key={index}
          >
            <a
              className="flex flex-row items-center gap-10 p-5"
              href={a.url}
            >
              <img
                className="size-24 rounded-full"
                src={a.urlToImage}
                alt={'Photo of ' + a.description}
              />
              <div>
                <h1 className="text-xl font-bold mb-2">{a.title}</h1>
                <p className="text-base">{a.description}</p>
              </div>
            </a>
          </div>
        )) : ( <p className="text-center text-gray-500">No articles found.</p>)}
      </div>
    );
  }
}