export function FormTemplate({ handleSubmit, handleChange, buttonDisable }) {
  return (
    <div>
        <h1> Form Learning</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label> Username</label>
          <input type="text" name="username" onChange={handleChange} />
        </div>
        <div className="row">
          <label> Password</label>
          <input type="text" name="password" onChange={handleChange} />
        </div>
        <div className="row">
          <input type="submit" disabled={buttonDisable} />
        </div>
      </form>
    </div>
  );
}
