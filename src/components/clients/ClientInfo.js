import React from 'react';
import { connect } from 'react-redux';
import { deleteClient } from '../../actions/myClients';
import WHRCalculator from '../calculator2/WHRCalculator';
// import Form from "./../calculator/Form";
import './client-info.css';

const ClientInfo = (props) => {
  const handleDelete = () => {
    props.deleteClient(props.match.params.id, props.history);
  };

  const client = props.clients.find(
    (client) => client.attributes.id === parseInt(props.match.params.id, 10)
  );
  /* ternary */

  return (
    <section className='client-profile-section'>
      <div className='client-profile-wrapper'>
        <header className='clients-list-header'>
          <h1 className='client-profile-name'>
            {client ? client.attributes.name : null}
          </h1>
        </header>
        <img
          src={client ? client.attributes.image : null}
          className='client-profile-image'
          alt=''
        ></img>
        {/* key={client.id} */}
        <div className='client-profile-card'>
          <div className='card-body'>
            <h5 className='card-title'>
              Gender: {client ? client.attributes.gender : null}
            </h5>
            <h5 className='card-title'>
              Age: {client ? client.attributes.age : null}
            </h5>
            <h5 className='card-title'>
              Weight: {client ? client.attributes.weight : null}
            </h5>
            <h5 className='card-title'>
              Height: {client ? client.attributes.height : null}
            </h5>
            <h5 className='card-title'>
              Waist: {client ? client.attributes.waist : null}
            </h5>
            <h5 className='card-title'>
              Hip: {client ? client.attributes.hip : null}
            </h5>
            <p className='card-text'>
              Goal: {client ? client.attributes.goal : null}
            </p>
            <p className='card-text'>
              {client ? client.attributes.email : null}
            </p>
            <br /> <br />
          </div>
          <button
            type='button'
            className='delete-client-btn'
            onClick={handleDelete}
          >
            Delete client
          </button>
        </div>

        {/* <Form /> */}
        {/* <WHRCalculator /> */}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    clients: state.myClients.clients,
  };
};

export default connect(mapStateToProps, { deleteClient })(ClientInfo);
