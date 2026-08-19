import { useState } from "react";
import InputGroup from "../inputGroup";
import arrowImage from '../../assets/arrow.png';
import './educationStyles.css';

function EducationForm ({schoolName, degree, startDate, endDate, location, onChange, onSubmit, onDelete}) {
    const [isOpen, setisOpen] = useState(false);

    return (
        <div className="formContainer">
            <div className="formHeader" onClick={() => setisOpen(!isOpen)}>
                <h3>{schoolName ? `${schoolName}` : "New Education"}</h3>
                <img className={`arrowIcon ${isOpen ? 'open' : ''}`} src={arrowImage} alt="" />
            </div>

            <div className={`educationForm ${isOpen ? 'open' : 'hidden'}`}>
                <form action="" id="educationForm" onSubmit={onSubmit}>
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

                    <div className="educationBtns">
                        <button className="delete" type="button" onClick={onDelete}>Delete</button>
                        {onSubmit && (<button className="submit" type="submit">Submit</button>)}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EducationForm;