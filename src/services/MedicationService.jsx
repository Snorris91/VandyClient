export const fetchAllMedicationsFromApi = () => {
    return fetch("http://localhost:8000/medications", 
{
    headers: {
        Authorization: `Token ${JSON.parse(localStorage.getItem("token")).token}`
    }
}).then((res) => res.json())
}

export const fetchAllValuesFromApi = () => {
    return fetch("http://localhost:8000/valuesets", 
{
    headers: {
        Authorization: `Token ${JSON.parse(localStorage.getItem("token")).token}`
    }
}).then((res) => res.json())
}