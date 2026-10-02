import "../Styless/Experience.css";

// receives everything as props from App
// no state here anymore!
function Experience({ isEditing, company, position, responsibilities, dateFrom, dateTo, setCompany, setPosition, setResponsibilities, setDateFrom, setDateTo }) {
  return (
    <div className="section">
      <h2>Practical Experience</h2>

      {isEditing ? (
        <div className="form">
          <label>Company Name:</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Enter company name"
          />

          <label>Position Title:</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Enter position title"
          />

          <label>Responsibilities:</label>
          <textarea
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
            placeholder="Enter main responsibilities"
          />

          <label>Date From:</label>
          <input
            type="text"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            placeholder="e.g. January 2020"
          />

          <label>Date To:</label>
          <input
            type="text"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            placeholder="e.g. December 2023"
          />
        </div>
      ) : (
        <div className="display">
          <p><strong>Company:</strong> {company}</p>
          <p><strong>Position:</strong> {position}</p>
          <p><strong>Responsibilities:</strong> {responsibilities}</p>
          <p><strong>From:</strong> {dateFrom}</p>
          <p><strong>To:</strong> {dateTo}</p>
        </div>
      )}
    </div>
  )
}

export default Experience