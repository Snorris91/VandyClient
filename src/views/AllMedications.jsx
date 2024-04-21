import { useEffect, useState } from "react";
import { fetchAllMedicationsFromApi } from "../services/MedicationService";



export const AllMedications = () => {
    const [medications, setMedications] = useState([])

    useEffect(() => {
        fetchAllMedicationsFromApi().then((medArray) => {
            setMedications(medArray)
        })
    },[])



    return (
        <>
        <div className="title text-5xl text-center">All Medications</div>
        
        <div className="recipes m-5 grid lg:grid-cols-4 sm:grid-cols-2">
        {medications.map((medication) => {
          return (
            <div key={medication.pk} className="recipe-card list-none bg-blue-300 flex flex-col p-1  border-blue-500 border-solid border-2 m-2 overflow-hidden">
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