import { useState } from "react";
import InputGroup from "../inputGroup";

function EducationForm ({schoolName, degree, startDate, endDate, location, onChange}) {
    const [isOpen, setisOpen] = useState(true);

    return (
        <div className="formContainer">
            <div className="formHeader" onClick={() => setisOpen(!isOpen)}>
                <h2>Education</h2>
            </div>

            <form action="" className={`educationForm ${isOpen ? 'active' : 'closed'}`}>
                <InputGroup
                    id="schoolName"
                    type="text"
                    placeholder="Stanford"
                    value={schoolName}
                    dataKey="schoolName"
                    labelText="School"
                    onChange={onChange}
                />
                <InputGroup
                    id="degree"
                    type="text"
                    placeholder="Computer Science"
                    value={degree}
                    dataKey="degree"
                    labelText="Degree"
                    onChange={onChange}
                />

                <div className="dateGroup">
                    <InputGroup
                        id="startDate"
                        type="text"
                        placeholder="1 January 2026"
                        value={startDate}
                        dataKey="startDate"
                        labelText="Start Date"
                        onChange={onChange}
                    />
                    <InputGroup
                        id="endDate"
                        type="text"
                        placeholder="1 January 2030"
                        value={endDate}
                        dataKey="endDate"
                        labelText="End Date"
                        onChange={onChange}
                    />
                </div>

                <InputGroup
                    id="location"
                    type="text"
                    placeholder="Santa Clara County, California"
                    value={location}
                    dataKey="location"
                    labelText="Location"
                    onChange={onChange}
                />
            </form>

        </div>
    )
}

export default EducationForm;