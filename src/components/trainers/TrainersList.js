import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './trainers-list.css';
import { SiMinutemailer } from 'react-icons/si';
// import SearchTrainer from "./SearchTrainer";

class TrainersList extends Component {
  // console.log("props", props);

  // state =
  //   {count: 0}

  render() {
    return (
      <>
        <section className='section-trainer'>
          {/* <SearchTrainer /> */}

          <div className='trainers-list-container'>
            <header className='trainers-header'>
              <h1 className='heading-1'> Meet our trainers</h1>
              <p className='parag-info'>
                Click on a trainer to get more information
              </p>
            </header>
            <main className='main-trainers'>
              {this.props.users.map((user) => (
                <div className='trainers-card' key={user.id}>
                  <img
                    src={user.image}
                    className='trainers-img'
                    alt={user.name}
                  />
                  <div className='blog-content'>
                    <h3 className='blog-content-h3'>
                      {user.name}
                      {/* <span className='blog-content-h3-span'>*****</span> */}
                    </h3>
                    <p className='parag-info'>
                      <a
                        href={`mailto:${user.email}`}
                        className='email-content-a'
                      >
                        <i className='mail-icon'>
                          <SiMinutemailer />
                        </i>
                        {user.email}
                      </a>
                    </p>
                    <Link
                      className='blog-content-btn'
                      to={{ pathname: `/trainers-profile/${user.id}` }}
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              ))}
            </main>

            {/* <p>liked {this.state.count} times</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Click me</button> */}
          </div>
        </section>
      </>
    );
  }
}

export default TrainersList;
