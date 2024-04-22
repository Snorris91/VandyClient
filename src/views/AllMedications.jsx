import { useEffect, useState } from "react";
import { fetchAllMedicationsFromApi, fetchAllValuesFromApi } from "../services/MedicationService";



export const AllMedications = () => {
    const [medications, setMedications] = useState([])
    const [valueSets, setValueSets] = useState([])
    const [chosenValue, setChosenValue] = useState("");
    const [filteredMedications, setFilteredMedications] = useState([])
    const [totalPatients, setTotalPatients] = useState(0)




    const fetchAndSetMeds = () => {
         fetchAllMedicationsFromApi().then((medArray) => {
            setMedications(medArray)
        })
    }
    

    const fetchAndSetValues = () => {
        fetchAllValuesFromApi().then((valArray) => {
            setValueSets(valArray)
        })
    } 
    
    useEffect(() => {
        fetchAndSetMeds()
        fetchAndSetValues()
    }, [])

    useEffect(() => {
        if (chosenValue && chosenValue !== "0") {
          const valueMedications = medications.filter((medication) =>
            medication.values.some((value) => value.id === parseInt(chosenValue))
          );
          setFilteredMedications(valueMedications);
        } else {
          setFilteredMedications(medications);
        }
      }, [chosenValue, medications]);

      useEffect(() => {
            const totalPatientsCalc = () => {
                let total = 0
                for (const meds of filteredMedications) {
                    if (meds){
                        total += meds.patients
                    }
                }
                return total
            }
                setTotalPatients(totalPatientsCalc())
      },[filteredMedications])



    return (
        <>
                <header className="page-header flex justify-evenly">
          <div className="drop-down-box">
            <select
              onChange={(event) => {
                setChosenValue(event.target.value);
              }}
              type="filter"
              className="filter p-2"
            >
              <option value="0">Select ValueSet</option>
              {valueSets.map((set) => {
                return (
                  <option value={set.id} key={set.id}>
                    {set.value_name}
                  </option>
                );
              })}
            </select>
          </div>
          
        </header>
        <div className="title text-5xl text-center">All Medications</div>
        <div>Total Patients: {totalPatients}</div>
        
        <div className="recipes m-5 grid lg:grid-cols-4 sm:grid-cols-2">
        {filteredMedications.map((medication) => {
          return (
            <div key={medication.id} className="recipe-card list-none bg-blue-300 flex flex-col p-1  border-blue-500 border-solid border-2 m-2 overflow-hidden">
                <li className="name m-1 list-none bg-gray-200 p-1 mb-1 rounded-md transition duration-300 hover:bg-red-600 hover:text-white"><span className="med-text font-bold">Medication Id:</span> {medication.medication_id}</li>
                <li className="name m-1 list-none bg-gray-200 p-1 mb-1 rounded-md transition duration-300 hover:bg-red-600 hover:text-white"><span className="med-text font-bold">Medication Name:</span> {medication.name}</li>
                <li className="name m-1 list-none bg-gray-200 p-1 mb-1 rounded-md transition duration-300 hover:bg-red-600 hover:text-white"><span className="med-text font-bold">Generic Name:</span> {medication.generic_name}</li>
                <li className="name m-1 list-none bg-gray-200 p-1 mb-1 rounded-md transition duration-300 hover:bg-red-600 hover:text-white"><span className="med-text font-bold">Route:</span> {medication.route}</li>
                <li className="name m-1 list-none bg-gray-200 p-1 mb-1 rounded-md transition duration-300 hover:bg-red-600 hover:text-white"><span className="med-text font-bold">Outpatients:</span> {medication.outpatients}</li>
                <li className="name m-1 list-none bg-gray-200 p-1 mb-1 rounded-md transition duration-300 hover:bg-red-600 hover:text-white"><span className="med-text font-bold">Inpatients:</span> {medication.inpatients}</li>
                <li className="name m-1 list-none bg-gray-200 p-1 mb-1 rounded-md transition duration-300 hover:bg-red-600 hover:text-white"><span className="med-text font-bold">Patients:</span> {medication.patients}</li>
              </div>
          )
          }
          )}</div>
        </>

    )
}