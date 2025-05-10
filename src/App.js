import { useState } from "react";
import { listarPaises, obterPais } from "./infra/paises";
import "./styles.css";

export default function App() {
    const [paises, setPaises] = useState([]);
    const [pais, setPais] = useState(null);
    const paisesOrdem = [...paises].sort((a, b) => a.name.official.localeCompare(b.name.official));

    async function handleClick() {
        let lista = await listarPaises();
        setPaises(lista);
    }

    async function handleChange(event) {
        let pais = await obterPais(event.target.value);
        setPais(pais);
    }

    return (
        <div className="App">
            <div className="header">
                <h3>RestCountries</h3>
            </div>
            <div className="container">
                <button className="btn" onClick={handleClick}>
                    Press up
                </button>
                <select className="input" onChange={handleChange}>
                    {paisesOrdem.map((pais) => (
                        <option key={pais.cca3} value={pais.cca3}>
                            {pais.name.official}
                        </option>
                    ))}
                </select>
                {pais && (
                    <div className="capital">
                        <p>{pais.name?.official}</p>
                        <p>Capital: {pais.capital}</p>
                    </div>
                )}

                {pais && <img className="img" src={pais.flags?.png} />}
            </div>
        </div>
    );
}
