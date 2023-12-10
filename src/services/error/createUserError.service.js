export const createUserErrorMsg=(user)=>{
    return `
        Uno o mas campos son invalidos,
        listado de campos requeridos:
        name:Este campo es obligatorio y de tipo string, el dato recibido fue ${user.name},
        name:Este campo es obligatorio y de tipo string, el dato recibido fue ${user.lastname},
        email:Este campo es obligatorio y de tipo string, el dato recibido fue ${user.email},
    `

}