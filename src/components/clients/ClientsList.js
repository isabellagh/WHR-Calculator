import React from 'react';
import { Link } from 'react-router-dom';
import './clients-list.css';

const ClientList = (props) => {
  // console.log("props", props);

  return (
    <section className='clients-list-section'>
      <div className='clients-list-container'>
        <header className='clients-list-header'>
          <h1 className='clients-list-h1'> My Clients</h1>
        </header>
        <main className='main-clients'>
          {props.clients.map((client) => (
            <div className='clients-card' key={client.id}>
              <img
                src={client.attributes.image}
                className='clients-img'
                alt={client.name}
              />
              <div className='client-content'>
                <h3 className='client-name'>{client.attributes.name}</h3>
                <p className='client-p'>
                  <a
                    href={`mailto:${client.attributes.email}`}
                    className='email-content-a'
                  >
                    {client.attributes.email}
                  </a>
                </p>
                <Link
                  className='client-content-btn'
                  to={{ pathname: `/clients/${client.id}` }}
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
};

export default ClientList;
