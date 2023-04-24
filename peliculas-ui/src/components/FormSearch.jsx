import { useContext } from "react";
import { useState } from "react";
import { DataContext } from "../context/DataContext";

const FormSearch = () => {
    const [title, setTitle] = useState("")
    const {setQuery, error} = useContext(DataContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(title); 
    }

    return ( 
        <div className="form-search">
            <h2>Buscador de Peliculas</h2>
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="Título de la película" onChange={e=>setTitle(e.target.value)}/>
                <input type="submit" value="Buscar" />
            </form>
            { error && <p className="error">La Pelicula no existe </p> }
        </div>
    );
}
 
export default FormSearch;