import React, { useState } from 'react'
import { Form } from './components/Form';
import { GifGrid } from './components/GifGrid';
import TableCategory from './components/TableCategory';

export const GifExpertApp = () => {
    //Base de datos inicial
    const initialDB = [
        {
            id: 1,
            category: 'Dragon ball',
            quantity: 8
        },
        {
            id: 2,
            category: 'Naruto',
            quantity: 4
        }
    ];

    const [db, setDb] = useState(initialDB);//para controlar mi DB
    const [dataToEdit, setDataToEdit] = useState(null); //para controlar los datos a editar


    const insertData = (data) => {
        data.id = (db.length + 1);
        setDb([...db, data]); //Agregamos un nuevo valor a mi arreglo inicial
        alert("Categoría Ingresada");
    }

    const updateData = (data) => {
        let newData = db.map(el => (el.id === data.id) ? data : el);
        setDb(newData);
        alert("Se actulizo la BD");
    }

    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con id? ${id}`);
        if (isDelete) {
            let newData = db.filter(el => el.id !== id); //agrego a mi nuevo arreglo todos los valores distintos del que voy a eliminar
            setDb(newData);
        }
        else {
            return
        }

    }


    return (
        <div className="content-primary">
            <div className="title">
                <div className="content">
                    <h1 className="text" data-text="Gif Expert App"> Gif Expert App</h1>
                </div>
            </div>

            <Form
                insertData={insertData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}


            />
            <TableCategory
                data={db}
                deleteData={deleteData}
                setDataToEdit={setDataToEdit}
            />
            {
                <ol >
                    {
                        //categories.map(category => <li key={category}>{category} </li>) //Cunado retorno solo una linea no es necesario el return ni las llaves
                        db.map(category => (
                            <GifGrid
                                key={category.category}
                                category={category.category} 
                                quantity={category.quantity}
                                />
                        ))
                    }
                </ol>}
        </div>
    )
}
