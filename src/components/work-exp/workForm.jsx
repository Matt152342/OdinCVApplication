import { useState } from "react";
import InputGroup  from "../inputGroup";

function WorkForm ({companyName, positionTitle, responsibilities, startDate, endDate}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="formContainer">
            <div className="formHeader" onClick={() => setIsOpen(!isOpen)}>
                <h2>Work Experience</h2>
            </div>

            <div className={`workForm ${isOpen ? 'open' : 'hidden'}`}>
                <form action="" id="workForm">
                    <InputGroup
                        id="companyName"
                        type="text"
                        placeholder="Tekkie Town"
                        value={companyName}
                        dataKey="companyName"
                        labelText="Company Name"
                    />
                    <InputGroup
                        id="positionTitle"
                        type="text"
                        placeholder="Senior Accountant"
                        value={positionTitle}
                        dataKey="positionTitle"
                        labelText="Position Title"
                    />
                    <InputGroup
                        id="responsibilities"
                        type="text"
                        placeholder="Did creditors and debtors"
                        value={responsibilities}
                        dataKey="responsibilities"
                        labelText="Responsibilities"
                    />

                    <div className="dateGroup">
                        <InputGroup
                            id="startDate"
                            type="text"
                            placeholder="January 2016"
                            value={startDate}
                            dataKey="startDate"
                            labelText="Start Date"
                        />
                        <InputGroup
                            id="endDate"
                            type="text"
                            placeholder="December 2026"
                            value={endDate}
                            datakey="endDate"
                            labelText="End Date"
                        />
                    </div>
                </form>

                <div className="formBtns">
                    <button className="cancel">Cancel</button>
                    <button className="submit" type="submit" form="workForm">Submit</button>
                </div>
            </div>

            <button className={`add ${isOpen ? 'hidden' : ''}`}>Add</button>
        </div>
    )
}

export default WorkForm;