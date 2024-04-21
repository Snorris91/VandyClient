export const fetchAllMedicationsFromApi = () => {
    return fetch("http://localhost:8000/medications", 
{
    headers: {
        Authorization: `Token ${JSON.parse(localStorage.getItem("token")).token}`
    }
}).then((res) => res.json())
}