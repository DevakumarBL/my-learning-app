import React from 'react'
import './RegisterFormPageCss.css'
function RegisterFormPage({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
}) {
  return (
    <div>
        <div className="container">
            <div className="header">
                <h1>Register Form</h1>
            </div>
            <div className="from">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <label htmlFor="">UserName</label>
                        <input type="text"  name="name" value={values.name } onChange={handleChange} />
                        <div className="errors">
                            <p style={{color:"red"}}>{touched.name && errors.name}</p>
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" value={values.email} onChange={handleChange} />
                        <div className="errors">
                            <p style={{color:"red"}}>{touched.email && errors.email}</p>
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="">password</label>
                        <input type="password"  name="password" value={values.password} onChange={handleChange} />
                        <div className="errors">
                            <p style={{color:"red"}}>{touched.password && errors.password}</p>
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="">ConfirmPassword</label>
                        <input type="password" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} />
                        <div className="errors">
                            <p style={{color:"red"}}>{touched.confirmPassword && errors.confirmPassword}</p>
                        </div>
                    </div>
                    <div className="btn">
                        <button type='submit' className='btn btn-success'>Register Now!</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default RegisterFormPage