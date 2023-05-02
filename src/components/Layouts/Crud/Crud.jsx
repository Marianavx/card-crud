import React from 'react'
import './crud.css'
export const Crud = () => {
  return (
    <div className='body-crud'>
      <h1>Edita tu evento<hr /></h1> 
      <div className="components-crud">
        <div className="img-crud">
        <img id="icon-edit" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAaFJREFUWEftl4FNxDAMRf9NABvACLABTAAbABvAJLABYgJgAtgARoANuA3QlxzkC07ye01OlaBSpUp14xf7J/ldYWHXamE8+LNA+wAurBsPAL5KndlFhY4APAI4NAjCnAJ4j6BGAxHmBQAr5K8i1EigHGZtRHu1So0CimBODOQVQIL6AHDsNTUCqASTNMP3HuoGwF3qZ2+gSDO5XvKYYUAlAXPyCYrPXuSfAPjdzzbQq0JRm66tFV7EBEorjiKnrjaWfw+gmmZyvSSphDB8OReoJWDmuARw7zahIsxcIAVGidnYMbetkJJIifl1emwDpCRSYsLzdSqQkkiJKdqwKUBKIiWm6glVICWREtM0qAqQkkiJacIoy15JpMRIMC0gJZESI8O0gOhVDmy0aHftDlMDYrK3XcPUgHhS3xrQM4BzV/chlWkZtCcAZxbkDdRQmFqFaJiSj7myZ3oX3lU/M0nBQXC0D3n9lMavWog5UBGQ10809jCYUstyIALwLyHd4R/nnKr4b0tHB10etUKIoQD5RJSzrNfkpXH+gVplWlyFvgFdfY8lhhs2YQAAAABJRU5ErkJggg=="/>                      
        </div>
        <form action="" className="form-crud">
          <input type="text" placeholder="Nombre"  />
          <input type="date"  />
          <input type="time" />
          <input type="text" placeholder="Lugar" />
          <input type="double" placeholder="Precio" />
          <input type="text" placeholder="Categoria" />
        </form>
      </div>
      <div className="end">
        {/* <div className="content-end"> */}
        <form action="" className="form-crud">
          <input type="text" placeholder="Descripcion" id="description" />
        </form>
        <div className="botones-crud">
          <button className='btn-crud' id='btn-cancel'>Cancelar</button>
          <button className='btn-crud' id='btn-accept'>Aceptar</button>
        {/* </div> */}
        </div>
      </div>
    </div>
  )
}
