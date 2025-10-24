import React from 'react'
import  './FormPageCss.css'
function FormPage({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    
}) {
  return (
    <div>
        <div className="container  mt-5 ">
            <h2>Login-Form Validation</h2>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <label htmlFor="">Email</label>
                        <input type="text" name='email'  placeholder='Email' autoComplete='off' value={values.email} onChange={handleChange}/>
                        <div className="errors" style={{color:"red"}}>
                              <p>{errors.email && touched.email && errors.email}</p>                  
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="">Password</label>
                        <input type="password" name='password'placeholder='Password'  autoComplete='off' value={values.password} onChange={handleChange}/>
                        <div className="errors" style={{color:"red"}}>
                              <p>{errors.password && touched.password && errors.password}</p>                  
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="">ConfirmPassword</label>
                        <input type="password" name='confirmPassword' placeholder='confirmPassword'  value={values.confirmPassword} autoComplete='off' onChange={handleChange}/>
                        <div className="errors" style={{color:"red"}}>
                              <p>{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</p>                  
                        </div>
                    </div>
                    <div className="btn">
                        <button type='submit' className='btn btn-success'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default FormPage