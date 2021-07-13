import { useParams } from 'react-router-dom' //hook

const ClientInfo = () => {
  const params = useParams()

  console.log(params.id);

    return (
        <section>
            <h1>Client Info</h1>
            <p>Client {params.id}</p>
        </section>
    )
}

export default ClientInfo