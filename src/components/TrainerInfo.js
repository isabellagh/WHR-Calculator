import { useParams } from 'react-router-dom'

const TrainersInfo = () => {
  const params = useParams()
  return (
    <section>
      <h1>Trainer Info</h1>
      <p>{params.id}</p>
    </section>
  )
}

export default TrainersInfo