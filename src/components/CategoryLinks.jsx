import React from 'react';
import { Link } from 'react-router-dom';
import './category-links.css';

const CategoryLinks = () => {
  return (
    <div className='category-links'>
      <Link to='/blog-workout'>
        <button className='catch-links1'>Workout</button>
      </Link>
      <Link to='/blog-setgoals'>
        <button className='catch-links2'>Set Goals</button>
      </Link>
      <Link to='/blog-Bhappy'>
        <button className='catch-links1'>B-Happy</button>
      </Link>
      <Link to='/blog-weighLoss'>
        <button className='catch-links2'>Weight Loss</button>
      </Link>
      <Link to='/blog-sports'>
        <button className='catch-links1'>Sports</button>
      </Link>
      <Link to='/blog-helthMeals'>
        <button className='catch-links2'>Health Meals</button>
      </Link>
      <Link to='/blog-fitness'>
        <button className='catch-links1'>Fitness</button>
      </Link>
      <Link to='/blog-bodybuilding'>
        <button className='catch-links2'>Bodybuilding</button>
      </Link>
    </div>
  );
};

export default CategoryLinks;
