
function EducationDetails ({schoolName, degree, startDate, endDate, location}) {

    return (
        <div className="educationDetails">
            <div className="educationInfo">
                <p className="dates">{startDate} {endDate ? "-" : ""} {endDate}</p>
                <p className="location">{location}</p>
            </div>
            
            <div>
                <p className="school">{schoolName}</p>
                <p className="degree">{degree}</p>
            </div>
        </div>
    )
}

export default EducationDetails;