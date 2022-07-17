import React from 'react';
import './categories.css';
// import './category-item.styles.scss';
import workout from '../assets/workout-kiu.jpg';
import bhappy from '../assets/b-happy-kiu.jpg';
import bodybuild from '../assets/bodybuilding-kiu.jpg';
import fitness from '../assets/fitness-kiu.jpg';
import healthymeals from '../assets/healthymeals-kiu.jpg';
import setgoals from '../assets/setgoals-kiu.jpg';
import weightloss from '../assets/weightloss-kiu.jpg';
import sports from '../assets/sports-kiu.jpg';
import CategoryLinks from './CategoryLinks';
// import { Link } from 'react-router-dom';
// import CategoryWorkout from './category-items/CategoryWorkout';

const Categories = () => {
  return (
    <div div className='categories-container'>
      <br />
      <h1 className='header-hero'>KEEP IT UP</h1>
      <p className='paragraph'>Pick what motivates you?</p>
      <CategoryLinks />
      <div className='container-categories'>
        <div className='gallery-container w-2 h-2'>
          <div className='gallery-item'>
            <div className='image'>
              <img src={workout} alt='workout' />
            </div>
            <div className='text'>Workout</div>
          </div>
        </div>

        <div className='gallery-container w-1 h-1'>
          <div className='gallery-item'>
            <div className='image'>
              <img src={bhappy} alt='workout' />
            </div>
            <div className='text'>B Happy</div>
          </div>
        </div>

        <div className='gallery-container w-2 h-1'>
          <div className='gallery-item'>
            <div className='image'>
              <img src={weightloss} alt='workout' />
            </div>
            <div className='text'>WeightLoss</div>
          </div>
        </div>

        <div className='gallery-container w-3 w-2'>
          <div className='gallery-item'>
            <div className='image'>
              <img src={sports} alt='workout' />
            </div>
            <div className='text'>Sports</div>
          </div>
        </div>

        <div className='gallery-container w-2 h-1'>
          <div className='gallery-item'>
            <div className='image'>
              <img src={setgoals} alt='workout' />
            </div>
            <div className='text'>Set goals</div>
          </div>
        </div>

        <div className='gallery-container w-1 h-3'>
          <div className='gallery-item'>
            <div className='image'>
              <img src={healthymeals} alt='workout' />
            </div>
            <div className='text'>Meals</div>
          </div>
        </div>

        <div className='gallery-container w-1 h-1'>
          <div className='gallery-item'>
            <div className='image'>
              <img src={fitness} alt='workout' />
            </div>
            <div className='text'>Fitness</div>
          </div>
        </div>

        <div className='gallery-container w-2 h-1'>
          <div className='gallery-item'>
            <div className='image'>
              <img src={bodybuild} alt='workout' />
            </div>
            <div className='text'>Bodybuild</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
