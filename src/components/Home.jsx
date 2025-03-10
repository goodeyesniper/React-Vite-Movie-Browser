import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results); // Store movie results
        setIsLoading(false); // Set loading to false
      })
      .catch((err) => console.error(err));
  }, []);

  // Preprocess movie data
  const processedMovies = movies.map((movie) => ({
    id: movie.id,
    posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    detailUrl: `/movies/${movie.id}`,
    title: movie.original_title,
		
  }));

  if (isLoading) {
    return (
      <>
        <Hero text="Welcome to Movie Browser" isLoading={true} />
        <div className="container d-flex justify-content-center align-items-center py-5">
          <h3>Loading...</h3>
        </div>
      </>
    );
  }

  return (
    <>
      <Hero text="Welcome to Movie Browser" isLoading={false} />
      <div className="container d-flex justify-content-center align-items-center py-5">
        <h3>Top Rated Movies</h3>
      </div>
      <div className="container">
        <div className="row">
          {processedMovies.map((movie) => (
            <div className="col-lg-3 col-md-6 mb-4" key={movie.id}>
              <div className="card">
                <img
                  src={movie.posterUrl}
                  className="card-img-top"
                  alt={movie.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <Link to={movie.detailUrl} className="btn btn-primary">
                    Show Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Hero from './Hero';

// const Home = () => {
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const apiKey = import.meta.env.VITE_API_KEY;
//   const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

//   useEffect(() => {
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${apiKey}`,
//       },
//     };

//     fetch(url, options)
//       .then((res) => res.json())
//       .then((json) => {
//         setMovies(json.results); // Store movie results
//         setIsLoading(false); // Set loading to false
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   // Preprocess movie data
//   const processedMovies = movies.map((movie) => ({
//     id: movie.id,
//     posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
//     detailUrl: `/movies/${movie.id}`,
//     title: movie.original_title,
//   }));

//   return (
//     <>
//       <Hero
//         text="Welcome to Movie Browser"
//         isLoading={isLoading}
//       />
//       <div className="container d-flex justify-content-center align-items-center py-5">
//         <h3>Top Rated Movies</h3>
//       </div>
//       <div className="container">
//         <div className="row">
//           {isLoading
//             ? Array(8) // Show placeholder loaders for 8 movie cards during loading
//                 .fill(null)
//                 .map(() => (
// 									<h5 className="placeholder-text">Loading...</h5>
//                 ))
//             : processedMovies.map((movie) => (
//                 <div className="col-lg-3 col-md-6 mb-4" key={movie.id}>
//                   <div className="card">
//                     <img
//                       src={movie.posterUrl}
//                       className="card-img-top"
//                       alt={movie.title}
//                     />
//                     <div className="card-body">
//                       <h5 className="card-title">{movie.title}</h5>
//                       <Link to={movie.detailUrl} className="btn btn-primary">
//                         Show Details
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;


// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Hero from './Hero';

// const Home = () => {
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const apiKey = import.meta.env.VITE_API_KEY;
//   const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

//   useEffect(() => {
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${apiKey}`,
//       },
//     };

//     fetch(url, options)
//       .then((res) => res.json())
//       .then((json) => {
//         setMovies(json.results); // Store movie results
//         setIsLoading(false); // Set loading to false
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   // Preprocess movie data
//   const processedMovies = movies.map((movie) => ({
//     id: movie.id,
//     posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
//     detailUrl: `/movies/${movie.id}`,
//     title: movie.original_title,
//   }));

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <>
//       <Hero text="Welcome to Movie Browser" />
//       <div className="container d-flex justify-content-center align-items-center py-5">
//         <h3>Top Rated Movies</h3>
//       </div>
//       <div className="container">
//         <div className="row">
//           {processedMovies.map((movie) => (
//             <div className="col-lg-3 col-md-6 mb-4" key={movie.id}>
//               <div className="card">
//                 <img
//                   src={movie.posterUrl}
//                   className="card-img-top"
//                   alt={movie.title}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{movie.title}</h5>
//                   <Link to={movie.detailUrl} className="btn btn-primary">
//                     Show Details
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;



// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Hero from './Hero';

// const Home = () => {
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const apiKey = import.meta.env.VITE_API_KEY;
//   const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

//   useEffect(() => {
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${apiKey}`,
//       },
//     };

//     fetch(url, options)
//       .then((res) => res.json())
//       .then((json) => {
//         setMovies(json.results); // Store movie results
//         setIsLoading(false); // Set loading to false
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <>
//       <Hero text="Welcome to Movie Browser" />
//       <div className="container d-flex justify-content-center align-items-center py-5">
//         <h3>Top Rated Movies</h3>
//       </div>
//       <div className="container">
//         <div className="row">
//           {movies.map((movie) => {
//             const detailUrl = `/movies/${movie.id}`; // Moved inside the map function
//             return (
//               <div className="col-lg-3 col-md-6 mb-4" key={movie.id}>
//                 <div className="card">
//                   <img
//                     src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                     className="card-img-top"
//                     alt={movie.original_title}
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{movie.original_title}</h5>
//                     <Link to={detailUrl} className="btn btn-primary">
//                       Show Details
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;



// import { useEffect } from 'react';
// import Hero from './Hero';

// const Home = () => {
// 	useEffect(() => {
// 		document.title = 'Home - Movie Browser';
// 	}, []);

// 	return (
// 		<>
// 		<Hero text="Welcome to Movie Browser" />
// 		<div className='container text-center py-5'>
// 			<h1>Your ultimate destination for discovering and exploring movies!</h1>
// 			{/* Add Featured movies here */}
// 		</div>
// 		</>
// 	);
// }