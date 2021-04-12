import Main from './Layout'
import { Information } from './Information'

const Segundario = ({ children }) => {
  return (
    <Main>
      <div className="row">
        <div className="col-8 py-5">
            {children}            
        </div>
        <div className="col-4 py-5">
          <Information />
        </div>
      </div>
      <style jsx>
        {`
          .contenido {
            justify-content: center;
          }
        `}
      </style>
    </Main>
  )
}

export default Segundario
