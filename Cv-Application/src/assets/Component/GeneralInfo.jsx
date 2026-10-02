import "../Styless/GeneralInfo.css";
// receives everything as props from App
// no state here anymore!
function GeneralInfo({ isEditing, name, email, phone, setName, setEmail, setPhone }) {
  return (
    <div className="section">
      <h2>General Information</h2>

      {/* if isEditing show inputs, otherwise show text */}
      {isEditing ? (
        <div className="form">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />

          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone"
          />
        </div>
      ) : (
        <div className="display">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
        </div>
      )}
    </div>
  )
}

export default GeneralInfo