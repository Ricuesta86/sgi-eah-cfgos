import { categorias } from '../../profiles';

const posts = categorias;

export default function handler(req, res) {
    res.status(200).json( posts )
  }