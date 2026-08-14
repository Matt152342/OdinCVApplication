import { useState } from "react";
import InputGroup  from "../inputGroup";

function WorkForm ({companyName, positionTitle, responsibilities, startDate, endDate, onChange, onSubmit}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="formContainer">
            <div className="formHeader" onClick={() => setIsOpen(!isOpen)}>
                <h3>Work Experience</h3>
            </div>

            <div className={`workForm ${isOpen ? 'open' : 'hidden'}`}>
                <form action="" id="workForm" onSubmit={onSubmit}>
                    <InputGroup
                        id="companyName"
                        type="text"
                        placeholder="Tekkie Town"
                        value={companyName}
                        dataKey="companyName"
                        labelText="Company Name"
                        onChange={onChange}
                    />
                    <InputGroup
                        id="positionTitle"
                        type="text"
                        placeholder="Senior Accountant"
                        value={positionTitle}
                        dataKey="positionTitle"
                        labelText="Position Title"
                        onChange={onChange}
                    />
                    <InputGroup
                        id="responsibilities"
                        type="text"
                        placeholder="Did creditors and debtors"
                        value={responsibilities}
                        dataKey="responsibilities"
                        labelText="Responsibilities"
                        onChange={onChange}
                    />

                    <div className="dateGroup">
                        <InputGroup
                            id="startDate"
                            type="text"
                            placeholder="January 2016"
                            value={startDate}
                            dataKey="startDate"
                            labelText="Start Date"
                            onChange={onChange}
                        />
                        <InputGroup
                            id="endDate"
                            type="text"
                            placeholder="December 2026"
                            value={endDate}
                            dataKey="endDate"
                            labelText="End Date"
                            onChange={onChange}
                        />
                    </div>

                    <div className="formBtns">
                        <button className="cancel">Cancel</button>
                        <button className="submit" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default WorkForm;