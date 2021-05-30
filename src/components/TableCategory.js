import React from 'react'
import { RowTableCategory } from './RowTableCategory'

export default function TableCategory({ data, deleteData, setDataToEdit }) {
    return (
        <div className="grid-table">
            <h2 className="title-table">Tabla de Categorías</h2>
            <table className="table-categoty">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Categoría</th>
                        <th># Imágenes</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (data.length === 0)
                            ? <tr><td colSpan="4">No hay Datos para cargar ...</td></tr>
                            : data.map(el =>
                                < RowTableCategory
                                    el={el}
                                    key={el.id}
                                    deleteData={deleteData}
                                    setDataToEdit={setDataToEdit}
                                />)
                    }
                </tbody>

            </table>
        </div>
    )
}
