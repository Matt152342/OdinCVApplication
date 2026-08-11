import { useState } from 'react'
import PersonalForm from './components/personal-info/personalForm.jsx';
import PersonalDetails from './components/personal-info/personalDetails.jsx';
import exampleInfo from './exampleInfo.jsx';
import './App.css'

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleInfo.personalInfo);

  function handlePersonalInfoChange (e) {
    const { key } = e.target.dataset;
    setPersonalInfo({...personalInfo, [key]: e.target.value});
  }

  return (
    <>
      <div className="formSection">
        <h1>Form Section</h1>
        <PersonalForm
          address={personalInfo.address}
          email={personalInfo.email}
          fullname={personalInfo.fullname}
          phoneNumber={personalInfo.phoneNumber}
          onChange={handlePersonalInfoChange}
        />
      </div>

      <div className="cvSection">
        <h1>CV Application</h1>
        <PersonalDetails
          address={personalInfo.address}
          email={personalInfo.email}
          fullname={personalInfo.fullname}
          phoneNumber={personalInfo.phoneNumber}
        />
      </div>
    </>
  )
}

export default App
