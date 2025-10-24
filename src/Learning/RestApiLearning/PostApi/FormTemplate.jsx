export function FormTemplate({ handleSubmit, handleChange, buttonDisable }) {
  return (
    <div>
      <h1>Form Learning</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label>NAME</label>
          <input type="text" name="profileName" onChange={handleChange} />
        </div>
        <div className="row">
          <label>JOB</label>
          <input type="text" name="profileJob" onChange={handleChange} />
        </div>
        <div className="row">
          <input type="submit" disabled={buttonDisable} value="Submit" />
        </div>
      </form>
    </div>
  );
}
