
function WorkDetails ({companyName, positionTitle, responsibilities, startDate, endDate}) {
    return (
        <div className="workDetails">
            <div className="workHead">
                <p className="position">{companyName}{(positionTitle && ',')} {positionTitle}</p>
                <p className="dates">{startDate} {(endDate && ',')} {endDate}</p>
            </div>

            <div className="responsibilities">
                {responsibilities}
            </div>
        </div>
    )
}

export default WorkDetails;