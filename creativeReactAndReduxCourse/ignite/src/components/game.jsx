import React from 'react';
import { Link } from 'react-router-dom';
//styling and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//redux
import { useDispatch } from 'react-redux';
import loadDetail from '../actions/detailAction';

const Game = ({ name, released, image, id }) => {
  //load details loadDetailHandler
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
      </Link>
    </StyledGame>
  );
};
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;
export default Game;