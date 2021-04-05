import Main from 'components/Layout'
import { categorias } from '../profiles'

const index = () => {
  return (
    <Main>
      <h1 className="py-3 text-center">Bienvenido al portal de Sistema Integrado de Gestión de la Empresa de Aprovechamiento Hidráulicos Cienfuegos</h1>
      <div className="row justify-center">
        {categorias.map((categoria, key) => {
          return (
            <div className="col-3 p-2 m-2 card ">
              <h3 key={key}>{categoria.nombre}</h3>
            </div>
          )
        })}
      </div>
      
      <style jsx>
        {`
          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 3rem;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }
          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
        `}
      </style>
    </Main>
  )
}

export default index
