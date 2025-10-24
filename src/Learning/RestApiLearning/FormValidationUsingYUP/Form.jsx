export function Form({ errors, touched, handleChange, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <label> Email </label>
            <input type="text" name="email" onChange={handleChange} />

            <div className="errors" style={{ color: "red" }}>
              <p>{errors?.email && touched?.email && errors?.email}</p>
            </div>
          </div>
          <div className="row">
            <label> Password </label>
            <input type="password" name="password" onChange={handleChange} />

            <div className="errors" style={{ color: "red" }}>
              <p>{errors?.password && touched?.password && errors?.password}</p>
            </div>
          </div>

          <div className="row">
            <label> Confirm Password </label>
            <input
              type="password"
              name="passwordConfirmation"
              onChange={handleChange}
            />

            <div className="errors" style={{ color: "red" }}>
              <p>
                {errors?.passwordConfirmation &&
                  touched?.passwordConfirmation &&
                  errors?.passwordConfirmation}
              </p>
            </div>
          </div>
          <div className="row">
            <input type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
