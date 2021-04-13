import { useRouter } from 'next/router'

import Segundario from '../../components/Segundario'
import { categorias } from '../../profiles'

const Post = () => {

    const router = useRouter();

    // if(router.isFallback){
    //     return <div className="cargando">Cargando... </div>
    // }
    const { nombre, contenido } = categorias.filter(categoria=>categoria.id==router.query.id);
    //  console.log(post);

    return (
        <Segundario>
            <h2> { nombre } </h2>
            <h1>Hola</h1>
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
