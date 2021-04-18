import Link from 'next/link'
import Segundario from '../../components/Segundario'

const Post = ({ post }) => {
  const { nombre, contenido } = post.post

  return (
    <Segundario>
      <div className="text-right block">
        <Link href={'/posts'}>
          <a>Regresar</a>
        </Link>
      </div>
      <h2> {nombre} </h2>
      <p>{contenido}</p>
      <div className="text-right block">
        <Link href={'/posts'}>
          <a>Regresar</a>
        </Link>
      </div>
      <style jsx>
        {`
          .link {
            align-text: right;
          }
        `}
      </style>
    </Segundario>
  )
}

export default Post

export async function getServerSideProps({ params }) {
  const server = process.env.SERVER
  const respuesta = await fetch(`${server}/api/post/${params.id}`)
  const post = await respuesta.json()

  return {
    props: { post }
  }
}
