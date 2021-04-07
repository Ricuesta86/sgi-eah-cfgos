import React from 'react'

export const Information = () => {
  return (
    <div>
      <div className="card-info">
        <div className="card-title">
          <h3>Información</h3>
        </div>
        <div className="card-body">
          <ul>
            <li>
              <p>
                <span>Actualizado</span> Procedimiento 5 <span> 15/04/2020 </span>
              </p>
            </li>
            <li>
              <p>
                <span>Actualizado</span> Procedimiento 5 <span> 15/04/2020 </span>
              </p>
            </li>
            <li>
              <p>
                <span>Actualizado</span> Procedimiento 5 <span> 15/04/2020 </span>
              </p>
            </li>
            <li>
              <p>
                <span>Actualizado</span> Procedimiento 5 <span> 15/04/2020 </span>
              </p>
            </li>
            <li>
              <p>
                <span>Actualizado</span> Procedimiento 5 <span> 15/04/2020 </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`

        .card-title h3{
            text-align:center;
        }

        .card-body ul,
        .card-body li{
            style-list:none;
        }
          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card {
            margin: 5px;
          }

          .card p {
            margin: 0px;
            font-size: 1rem;
            line-height: 1.5;
          }
          .contenido {
            justify-content: center;
          }
        `}
      </style>
    </div>
  )
}
