import { useState } from "react";
import InputGroup  from "../inputGroup";

function PersonalForm ({address, email, fullname, phoneNumber, onChange}) {
    const [isOpen, setIsOpen] = useState(true);
    
    return (
        <div className="formSectionContainer">
            <div className="formHeader">
                <h2>Personal Details</h2>
            </div>

            <form className="personalForm">
                <InputGroup 
                    id="fullname"
                    type="text"
                    placeholder="John Wick"
                    value={fullname}
                    dataKey="fullname"
                    labelText="Fullname"
                    onChange={onChange}
                />
                <InputGroup 
                    id="email"
                    type="text"
                    placeholder="john.wick@gmail.com"
                    value={email}
                    dataKey="email"
                    labelText="Email"
                    onChange={onChange}
                />
                <InputGroup
                    id="phoneNumber"
                    type="text"
                    placeholder="+00 000 000 0000"
                    value={phoneNumber}
                    dataKey="phoneNumber"
                    labelText="Phone number"
                    onChange={onChange}
                />
                <InputGroup
                    id="address"
                    type="text"
                    placeholder="Horseshoe Road, New York"
                    value={address}
                    dataKey="address"
                    labelText="Physical Address"
                    onChange={onChange}
                />
            </form>

            <div>
                <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close" : "Open"}</button>
            </div>
        </div>
    )
}

export default PersonalForm;