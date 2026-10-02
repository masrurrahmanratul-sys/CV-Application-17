import { useState } from 'react';
import GeneralInfo from './assets/Component/GeneralInfo';
import Education from './assets/Component/Education';
import Experience from './assets/Component/Experience';
import "./assets/Styless/App.css";

function App() {
  // isEditing controls the whole CV
  // true = show all input fields
  // false = show all plain text
  const [isEditing, setIsEditing] = useState(true)

  // general info state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  // education state
  const [school, setSchool] = useState('')
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  // experience state
  const [company, setCompany] = useState('')
  const [position, setPosition] = useState('')
  const [responsibilities, setResponsibilities] = useState('')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')

  return (
    <div className="app">
      <h1>CV Application</h1>

      {/* pass state and setters down as props */}
      <GeneralInfo
        isEditing={isEditing}
        name={name}
        email={email}
        phone={phone}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
      />

      <Education
        isEditing={isEditing}
        school={school}
        title={title}
        date={date}
        setSchool={setSchool}
        setTitle={setTitle}
        setDate={setDate}
      />

      <Experience
        isEditing={isEditing}
        company={company}
        position={position}
        responsibilities={responsibilities}
        dateFrom={dateFrom}
        dateTo={dateTo}
        setCompany={setCompany}
        setPosition={setPosition}
        setResponsibilities={setResponsibilities}
        setDateFrom={setDateFrom}
        setDateTo={setDateTo}
      />

      {/* ONE button controls the whole CV! */}
      {isEditing ? (
        // submit button hides all inputs
        // shows all plain text
        <button
          className="submit-btn"
          onClick={() => setIsEditing(false)}
        >
          Submit CV
        </button>
      ) : (
        // edit button shows all inputs again
        // with all previous values still there!
        <button
          className="edit-btn"
          onClick={() => setIsEditing(true)}
        >
          Edit CV
        </button>
      )}
    </div>
  )
}

export default App