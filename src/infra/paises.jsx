export async function listarPaises() {
    let retorno = [];
    const url = "https://restcountries.com/v3.1/all?fields=name,cca3,capital";

    await fetch(url)
        .then((response) => response.json())
        .then((paises) => {
            retorno = paises;
            console.log(retorno);
        });
    return retorno;
}
export async function obterPais(cca3) {
    let retorno = {};
    const url = `https://restcountries.com/v3.1/alpha/${cca3}?fields=name,cca3,capital,flags`;

    await fetch(url)
        .then((response) => response.json())
        .then((pais) => {
            if (Array.isArray(pais)) {
                retorno = pais[0];
            } else {
                retorno = pais;
            }
            console.log(retorno);
        });
    return retorno;
}
