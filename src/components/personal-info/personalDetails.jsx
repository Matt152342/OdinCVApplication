
function PersonalDetails ({address, email, fullname, phoneNumber}) {

    return (
        <div className="personalDetails">
            <h3>{fullname}</h3>
            <h4>{email} | {phoneNumber}</h4>
            <h4>{address}</h4>
        </div>
    )
}

export default PersonalDetails;