import { Link } from 'react-router-dom'
import './DoctorCard.css'

export const DoctorCard = ({ name, speciality, experience, location, clinic, consultationFees, profilePic }) => {
    return <div className="doctor-card-container">
        <div className="doctor-card-details-container">
            <div className="doctor-card-profile-image-container">
                <img src={profilePic} alt="name" />
            </div>
            <div className="doctor-card-details">
                <div className="doctor-card-detail-name">{name}</div>
                <div className="doctor-card-detail-speciality">{speciality}</div>
                <div className="doctor-card-detail-experience">{experience} years experience overall</div>
                <div className="doctor-card-detail-location">{location}</div>
                <div className="doctor-card-detail-clinic">{clinic}</div>
                <div className="doctor-card-detail-consultationfees">₹{consultationFees} Consultation fees at clinic</div>
            </div>
        </div>
        <div className="doctor-card-options-container">
            <Link to="/payment">
                <button className='book-appoinment-btn'><div>Book Appoinment</div><div>No Booking Fee</div></button>
            </Link>
        </div>
    </div>
}