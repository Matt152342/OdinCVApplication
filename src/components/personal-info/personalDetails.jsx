
function PersonalDetails ({address, email, fullname, phoneNumber}) {

    return (
        <div className="personalDetails">
            <h1>{fullname}</h1>
            <h3>{email} {(email && '|')} {phoneNumber} {(phoneNumber && '|')} {address}</h3>
        </div>
    )
}

export default PersonalDetails;