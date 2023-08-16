import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

// Layout

export const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
  background-color: #fff;
`;

export const Header = styled.header`
  background-color: #f44336;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  padding: 25px;
`;

export const Item = styled.li`
  margin-left: 30px;
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 10px;
`;

export const Links = styled(NavLink)`
  text-decoration: none;
  color: #fff;
`;

export const Main = styled.main`
  padding: 20px;
`;

// Home

export const FilmList = styled.ul`
  display: grid;
  max-width: calc(100vw - 20px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const FilmItem = styled.li`
  border: 1px solid #f44336;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0px 13px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const FilmLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.05);
    cursor: zoom-in;
  }
`;

export const Name = styled.p`
  padding: 8px;
  color: #f44336;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`;

// Movies Details

export const Top = styled.div`
  display: block;
  height: 50px;
`;

export const Button = styled(Link)`
  display: inline-block;
  border: 1px solid #f44336;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  text-decoration: none;
  color: #323232;
  font-weight: 500;
`;

export const Content = styled.div`
  display: flex;
`;

export const Image = styled.img`
  display: flex;
`;

export const InfoList = styled.ul`
  list-style: none;
`;

export const InfoItem = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  height: auto;
`;

export const InfoTitle = styled.h1`
  font-size: 35px;
  color: #323232;
  margin: 0;
`;

export const ListAdd = styled.ul`
  list-style: none;
  display: flex;
`;

export const ItemAdd = styled.li`
  margin-right: 20px;
`;

export const LinkAdd = styled(Link)`
  display: inline-block;
  border: 1px dotted #f44336;
  padding: 8px;
  border-radius: 5px;
  width: 80px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #f44336;
`;

// Reviews

export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ReviewItem = styled.li`
  border: 1px dotted #f44336;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 5px;
  background-color: #edecec;
`;

export const Author = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const Text = styled.p`
  font-size: 14px;
`;

// Cats

export const CatsList = styled.ul`
  list-style: none;
  padding: 0;

  display: grid;
  max-width: calc(100vw - 20px);
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 16px;
`;

export const CatsItem = styled.li``;

// Movies

export const Titl = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: #323232;
`;

export const Form = styled.form`
  text-align: center;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  width: 450px;
  height: 30px;
  border: 2px solid #f44336;
  border-radius: 10px;
  margin-right: 15px;
`;

export const Btn = styled.button`
  display: inline-block;
  width: 100px;
  height: 30px;
  background-color: #f44336;
  border-radius: 10px;
  border-color: #f44336;
  color: #fff;
  font-size: 16px;
`;
