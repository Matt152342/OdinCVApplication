import { useState } from 'react'
import PersonalForm from './components/personal-info/personalForm.jsx';
import PersonalDetails from './components/personal-info/personalDetails.jsx';
import EducationForm from './components/education/educationForm.jsx';
import EducationDetails from './components/education/educationDetails.jsx';
import WorkForm from './components/work-exp/workForm.jsx';
import WorkDetails from './components/work-exp/workDetails.jsx';
import './App.css';

const initialEducation = {
  schoolName: '',
  degree: '',
  startDate: '',
  endDate: '',
  location: '',
}

const initialWork = {
  companyName: '',
  positionTitle: '',
  responsibilities: '',
  startDate: '',
  endDate: '',
}

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    address: '',
    email: '',
    fullname: '',
    phoneNumber: '',
  });

  const [educationInfo, setEducationInfo] = useState(initialEducation);
  const [educationList, setEducationList] = useState([]);

  const [workInfo, setWorkInfo] = useState(initialWork);
  const [workList, setWorkList] = useState([]);

  function handlePersonalInfoChange (e) {
    const { key } = e.target.dataset;
    setPersonalInfo({...personalInfo, [key]: e.target.value});
  }

  function handleEducationInfoChange (e) {
    const { key } = e.target.dataset;
    setEducationInfo({...educationInfo, [key]: e.target.value})
  }

  function handleWorkInfoChange (e) {
    const { key } = e.target.dataset;
    setWorkInfo({...workInfo, [key]: e.target.value})
  }

  function handleEducationSubmit (e) {
    e.preventDefault();

    const newEntry = {
      ...educationInfo,
      id: crypto.randomUUID(),
    };

    setEducationList([...educationList, newEntry]);
    setEducationInfo(initialEducation);
  }

  function handleEducationListChange (id, e) {
    const { key } = e.target.dataset;
    const value = e.target.value;

    return setEducationList((prevList) => {
      return prevList.map((item) => {
        if (item.id === id) {
          return {...item, [key]: value};
        }

        return item;
      });
    });
  }

  function handleWorkSubmit (e) {
    e.preventDefault();

    const newEntry = {
      ...workInfo,
      id: crypto.randomUUID(),
    };

    setWorkList([...workList, newEntry]);
    setWorkInfo(initialWork);
  }

  function handleWorkListChange (id, e) {
    const {key} = e.target.dataset;
    const value = e.target.value;

    setWorkList((prevList) => {
      return prevList.map((item) => {
        if (item.id === id) {
          return {...item, [key]: value};
        }

        return item;
      });
    });
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

        {
          educationList.map((item) => {
            return (
              <EducationForm
                key={item.id}
                schoolName={item.schoolName}
                degree={item.degree}
                startDate={item.startDate}
                endDate={item.endDate}
                location={item.location}
                onChange={(e) => handleEducationListChange(item.id, e)}
              />
            )
          })
        }

        <EducationForm
          schoolName={educationInfo.schoolName}
          degree={educationInfo.degree}
          startDate={educationInfo.startDate}
          endDate={educationInfo.endDate}
          location={educationInfo.location}
          onChange={handleEducationInfoChange}
          onSubmit={handleEducationSubmit}
        />

        {
          workList.map((item) => {
            return (
              <WorkForm
                key={item.id}
                companyName={item.companyName}
                positionTitle={item.positionTitle}
                responsibilities={item.responsibilities}
                startDate={item.startDate}
                endDate={item.endDate}
                onChange={(e) => handleWorkListChange(item.id, e)}
              />
            )
          })
        }

        <WorkForm
          companyName={workInfo.companyName}
          positionTitle={workInfo.positionTitle}
          responsibilities={workInfo.responsibilities}
          startDate={workInfo.startDate}
          endDate={workInfo.endDate}
          onChange={handleWorkInfoChange}
          onSubmit={handleWorkSubmit}
        />
      </div>

      <div className="cvSection">
        <PersonalDetails
          address={personalInfo.address}
          email={personalInfo.email}
          fullname={personalInfo.fullname}
          phoneNumber={personalInfo.phoneNumber}
        />

        <h2 className="educationHeader">Education</h2>
        {educationList.map((entry => {
          return (
            <EducationDetails
              key={entry.id}
              schoolName={entry.schoolName}
              degree={entry.degree}
              startDate={entry.startDate}
              endDate={entry.endDate}
              location={entry.location}
            />
          )
        }))}

        <h2 className="workHeader">Work</h2>
        {workList.map((entry) => {
          return (
            <WorkDetails
              key={entry.id}
              companyName={entry.companyName}
              positionTitle={entry.positionTitle}
              responsibilities={entry.responsibilities}
              startDate={entry.startDate}
              endDate={entry.endDate}
            />
          )
        })}
      </div>
    </>
  )
}

export default App
