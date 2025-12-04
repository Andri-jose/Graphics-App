// const express = require('express');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Enable CORS for React app
// app.use(cors());

// // Parse JSON bodies
// app.use(express.json());

// // NewsAPI proxy endpoint
// app.get('/api/news', async (req, res) => {
//   try {
//     const { q = 'apple', from, to, sortBy = 'popularity' } = req.query;
//     const apiKey = process.env.NEWS_API_KEY || 'dcd28e9ccba4430996d1818e88df2c4a';
    
//     // Build the NewsAPI URL
//     let url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&sortBy=${sortBy}&apiKey=${apiKey}`;
    
//     if (from) {
//       url += `&from=${from}`;
//     }
//     if (to) {
//       url += `&to=${to}`;
//     }
    
//     const response = await fetch(url);
//     const data = await response.json();
    
//     if (!response.ok) {
//       return res.status(response.status).json(data);
//     }
    
//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching news:', error);
//     res.status(500).json({ error: 'Failed to fetch news articles' });
//   }
// });

// // Serve static files in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'build')));
  
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   });
// }

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

