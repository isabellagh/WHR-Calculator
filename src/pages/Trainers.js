import { Link } from 'react-router-dom'

const Trainers = () => {
    return (
      <section>
        <h1>List of our Trainers</h1>
        <ul>
          <li>
            <Link to='/trainers/1'>Trainer 1</Link>
          </li>
          <li>
            <Link to='/trainers/2'>Trainer 2</Link>
          </li>
          <li>
            <Link to='/trainers/3'>Trainer 3</Link>
          </li>
        </ul>
      </section>
    )
}

export default Trainers