import React, { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';

export default function Articles() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = 'My Test - Articles';

    // Ejemplo con una API pública que sí se puede llamar directamente desde el navegador
    // Usamos Spaceflight News API (no requiere API key)
    const url = 'https://api.spaceflightnewsapi.net/v4/articles/?limit=30';

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        // Adaptamos la respuesta al formato que ya usa el componente (articles[])
        const articles = (json.results || []).map((a: any) => ({
          url: a.url,
          urlToImage: a.image_url,
          title: a.title,
          description: a.summary,
        }));

        setData({ articles });
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