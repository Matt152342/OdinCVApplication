import { useState } from 'react'
import PersonalForm from './components/personal-info/personalForm.jsx';
import PersonalDetails from './components/personal-info/personalDetails.jsx';
import EducationForm from './components/education/educationForm.jsx';
import WorkForm from './components/work-exp/workForm.jsx';
import './App.css'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    address: '',
    email: '',
    fullname: '',
    phoneNumber: '',
  });

  const [educationInfo, setEducationInfo] = useState({
    schoolName: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
  });

  const [workInfo, setWorkInfo] = useState({
    companyName: '',
    positionTitle: '',
    responsibilities: '',
    startDate: '',
    endDate: '',
  })

  function handlePersonalInfoChange (e) {
    const { key } = e.target.dataset;
    setPersonalInfo({...personalInfo, [key]: e.target.value});
  }

  function handleEducationInfoChange (e) {
    const { key } = e.target.dataset;
    setEducationInfo({...educationInfo, [key]: e.target.value})
  }

  return (
    <>
      <div className="formSection">
        <PersonalForm
          address={personalInfo.address}
          email={personalInfo.email}
          fullname={personalInfo.fullname}
          phoneNumber={personalInfo.phoneNumber}
          onChange={handlePersonalInfoChange}
        />

        <EducationForm
          schoolName={educationInfo.schoolName}
          degree={educationInfo.degree}
          startDate={educationInfo.startDate}
          endDate={educationInfo.endDate}
          location={educationInfo.location}
          onChange={handleEducationInfoChange}
        />

        <WorkForm
          companyName={workInfo.companyName}
          positionTitle={workInfo.positionTitle}
          responsibilities={workInfo.responsibilities}
          startDate={workInfo.startDate}
          endDate={workInfo.endDate}
        />
      </div>

      <div className="cvSection">
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
