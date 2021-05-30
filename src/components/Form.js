import React, { useEffect, useState } from 'react'


export const Form = ({ insertData, updateData, dataToEdit, setDataToEdit }) => {

    const initialForm = {
        id: null,
        category: "",
        quantity: "",

    }
    const [form, setForm] = useState(initialForm);


    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit);
        } else {
            setForm(initialForm);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataToEdit]); //cuando haya algun cambio en esta variable se va ejecutar



    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.id === null) {
            if (form.category.length >= 3) {
                if (/^([0-9])*$/.test(form.quantity)) {
                    if (form.quantity > 0 && form.quantity < 21) {
                        insertData(form);
                        handleReset();
                    } else {
                        alert("Complete bien los campos");
                    }
                }
            }

            else {
                alert("Complete bien los campos");
            }


        } else {

            if (form.category.length >= 3) {
                if (/^([0-9])*$/.test(form.quantity)) {
                    if (form.quantity > 0 && form.quantity < 21) {
                        updateData(form);
                        handleReset();
                    } else {
                        alert("Complete bien los campos");
                    }
                }
            }

            else {
                alert("Complete bien los campos");
            }
        }

    }


    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    }



    const validationQuantity = () => {
        let resp = ""
        if (form.category.length >= 3) {
            if (form.quantity === "") {
                resp = "Ingrese un valor numérico"
            } else {

                if (/^([0-9])*$/.test(form.quantity)) {
                    if (form.quantity > 0 && form.quantity < 21) {
                        resp = "Datos correctos";

                    }
                    else {
                        resp = "El numero debe ser < 21";
                    }

                }
                else {
                    resp = "Ingrese un valor numérico";
                }

            }
        } else {
            resp = "Ingrese una Categoría";
        }
        return resp;

    }



    return (
        <div className="grid-form">
            <div className="wrapper">
                <h2>
                    {(dataToEdit === null) ? "Agregar Categoria" : "Actualizar Datos"}
                </h2>


                <form onSubmit={handleSubmit}>

                    <div className="input-data">
                        <input
                            type="text"
                            name="category"
                            onChange={handleChange}
                            value={form.category}
                            required
                        />
                        <div className="underline">
                        </div>
                        <label>Categoría a buscar</label>
                    </div>

                    <div className="input-data">
                        <input
                            type="text"
                            name="quantity"
                            onChange={handleChange}
                            value={form.quantity}
                            required
                        />
                        <div className="underline">
                        </div>
                        <label>Cantidad de imagenes</label>
                    </div>

                    <div>

                        <p className={
                            (validationQuantity() === "Datos correctos")
                                ? "success"
                                : "danger"
                        }

                        ><span className={
                            (validationQuantity() === "Datos correctos")
                                ? "success-c"
                                : "danger-x"
                        } > {(validationQuantity() === "Datos correctos") ? "✓" : "X"}  </span> {validationQuantity()}</p>

                    </div>
                    <div className="content-button">
                    <input type="submit" value={(dataToEdit === null) ? "Enviar" : "Actualizar"} />
                    <input type="reset" value="Limpiar" onClick={handleReset} />
                    </div>
                    
                </form>
            </div>

        </div>
    )
}
