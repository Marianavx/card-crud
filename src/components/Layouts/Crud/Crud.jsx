import React from 'react'
import './crud.css'
export const Crud = () => {
  return (
    <div className='body-crud'>
      <h1>Edita tu evento<hr /></h1> 
      <div className="components-crud">
       
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
            <label for="file-upload" className="custom-file-upload">
              <i className="fa fa-cloud-upload"></i> Sube aquí el certificado de tu empresa
            </label>        
       
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
