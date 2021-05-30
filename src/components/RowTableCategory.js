import React from 'react'

export const RowTableCategory = ({ el, deleteData, setDataToEdit }) => {
    const { id, category, quantity } = el;
    return (
        <tr><td>{id}</td>
            <td>{category}</td>
            <td>{quantity}</td>
            <td>
                <input type="button" onClick={() => setDataToEdit(el)} value="Editar" className="button"/>
                <input type="button" onClick={() => deleteData(id)} value="Eliminar" className="button" />
            </td>
        </tr>
    )
}
