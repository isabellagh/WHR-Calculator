import { Link } from 'react-router-dom'

const Clients = () => {
  return (
    <section>
      <h1> Here are all your clients: </h1>
      <br />
        <ul>
          <li>
            <Link to='/clients/1'>Client 1</Link>
          </li>
          <li>
            <Link to='/clients/2'>Client 2</Link>
          </li>
          <li>
            <Link to='/clients/3'>Client 3</Link>
          </li>
          <br />
        <button><Link to='/clients/new'>Add a new client</Link></button>
        </ul>
      </section>
  )
}

export default Clients

