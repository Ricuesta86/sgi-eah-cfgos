import { Information } from 'components/Information'
import Main from 'components/Layout'
import { categorias } from '../profiles'

const index = () => {
  return (
    <Main>
      <div className="row">
      <div className="col-8 py-5"> 
           <div className="row contenido">
        {categorias.map((categoria, key) => {
          return (
            <div className="col-3 card p-2 ">
              <p key={key}>{categoria.nombre}</p>
            </div>
          )
        })}
      </div>
      </div>
      <div className="col-4 py-5">
          <Information />
      </div>

        
      </div>

      
      <style jsx>
        {`
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

          .card{
            margin: 5px;
          }

          .card p {
            margin: 0px;
            font-size: 1rem;
            line-height: 1.5;
          }
          .contenido{
            justify-content:center;
          }
        `}
      </style>
    </Main>
  )
}

export default index
