import { getPostById } from 'pages/selectors/getPostById'

export default function postHandler(req, res) {
  const {
    query: { id, name },
    method
  } = req

  const post = getPostById(id);
  if(!post){
    // res.status(404);
    return 
  }

  switch (method) {
    case 'GET':
      // Get data from your database
      // id:2,
      // nombre: 'Misión y visión',
      // descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum architecto non ea, delectus, accusantium tenetur in modi aut quo sapiente, accusamus nesciunt nulla laborum voluptates expedita similique tempore pariatur amet?',
      // contenido:
      // res.status(200).json({ id, })
      res.status(200).json({ post })
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
