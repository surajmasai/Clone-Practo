import { useEffect, useState } from "react"
import { FindDoctorSearch } from "../HomePage/FindDoctorSearch"
import { DoctorCard } from "./DoctorCard";
import './SearchDoctor.css'
import { useSearchParams } from 'react-router-dom'

export const SearchDoctor = () => {

    const [searchParams] = useSearchParams();

    const [doctors, setDoctors] = useState([]);

    const getDoctorsDetails = () => {
        fetch(`https://practo-suraj-server.herokuapp.com/doctors?speciality_like=${searchParams.get('speciality')}&location_like=${searchParams.get('location')}`)
            .then(res => res.json())
            .then(data => setDoctors(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getDoctorsDetails();
    }, [searchParams])

    return <div className="searchpage-container">
        <FindDoctorSearch />
        <div className="search-results-container">
            <h2>{doctors.length} doctors available in {searchParams.get('location')}</h2>
            <h3>Book appoinments with minimum wait-time & verified doctor details</h3>

            {
                doctors.map(doctor => <DoctorCard {...doctor} key={doctor.name} />)
            }

        </div>
    </div>
}