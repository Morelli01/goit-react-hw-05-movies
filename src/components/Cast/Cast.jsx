import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoveCast } from '../../serviceAPI/serviceAPI';
import { CatsList, CatsItem } from '../../styled/styled';
import DefaultImg from '../../images/noImageV.jpg';

const Cast = () => {
  const { movieId } = useParams();

  const [movieCats, setMovieCats] = useState([]);

  useEffect(() => {
    const catsMoves = async () => {
      try {
        const data = await getMoveCast(movieId);
        const moveCats = data.data.cast;
        setMovieCats(moveCats);
      } catch (error) {
        console.error('error');
      }
    };
    catsMoves();
  }, [movieId]);

  return (
    <CatsList>
       {movieCats.length < 1 ? (
        <h2>I'm sorry, but I don't have any information casts </h2>
      ) : (movieCats.map(({ id, profile_path, character, name }) => (
          <CatsItem key={id}>
            <img
              src={profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : DefaultImg
              }
              alt={name}
              width="150"
              height="auto"
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </CatsItem>
        )))}
    </CatsList>
  );
};

export default Cast;
