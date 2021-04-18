const { categorias } = require("profiles");

export const getPostById = ( id ) => {

    return categorias.find( post => post.id === parseInt(id));
}