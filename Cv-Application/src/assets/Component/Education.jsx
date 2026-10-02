import "../Styless/Education.css";

// receives everything as props from App
// no state here anymore!
function Education({ isEditing, school, title, date, setSchool, setTitle, setDate }) {
  return (
    <div className="section">
      <h2>Education</h2>

      {isEditing ? (
        <div className="form">
          <label>School Name:</label>
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            placeholder="Enter school name"
          />

          <label>Title of Study:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title of study"
          />

          <label>Date of Study:</label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="e.g. 2020 - 2024"
          />
        </div>
      ) : (
        <div className="display">
          <p><strong>School:</strong> {school}</p>
          <p><strong>Title:</strong> {title}</p>
          <p><strong>Date:</strong> {date}</p>
        </div>
      )}
    </div>
  )
}

export default Education