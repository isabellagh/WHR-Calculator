import { useParams } from 'react-router-dom' //hook

const TrainerInfo = () => {
  const params = useParams()

  console.log(params.id);

    return (
        <section>
            <h1>Trainer Info</h1>
            <p>Trainer {params.id}</p>
        </section>
    )
}

export default TrainerInfo