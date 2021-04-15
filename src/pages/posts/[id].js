import { useRouter } from 'next/router'

import Segundario from '../../components/Segundario'
import { categorias } from '../../profiles'

const Post = () => {

    const router = useRouter();

    const post = categorias.filter(categoria=>categoria.id==router.query.id);


    return (
        <Segundario>
            <h2> { post[0].nombre } </h2>
            <p>{post[0].contenido}</p>
        </Segundario>
    )
};

export default Post

// export async function getStatisPachs(){

//     const paths= categorias.map(post=>{
//         return{
//             params: {
//                 id: post.id
//             }
//         }
//     });

//     return {
//         paths,
//         fallbask: true
//     }
// };


// export async function getStatisProps({ params }){
//     const post = categorias.filter(post=>(post.id === params.id))


//     return{
//         props:{ post },
//     }
// }
