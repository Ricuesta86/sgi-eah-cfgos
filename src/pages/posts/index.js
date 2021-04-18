import Link from 'next/link'
import Principal from 'components/Principal'
import { categorias } from '../../profiles'

const Posts = () => {
  return (
    <Principal>
      <div className="text-right block">
        <Link href={'/'}>
          <a>Regresar</a>
        </Link>
      </div>
      {categorias.map((categoria, key) => {
        return (
          <div className="p-2" key={key}>
            <h3>{categoria.nombre}</h3>
            <p>
              {categoria.descripcion}
              <Link href={`/posts/${categoria.id}`}>
                <a>
                  <span> Leer mas ...</span>
                </a>
              </Link>
            </p>
          </div>
        )
      })}
      <div className="text-right block">
        <Link href={'/'}>
          <a>Regresar</a>
        </Link>
      </div>
    </Principal>
  )
}

export default Posts
