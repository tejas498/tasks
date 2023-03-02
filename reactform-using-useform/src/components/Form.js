import React, { useState } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useForm } from 'react-hook-form'



const Form = () => {

    const [success , setSuccess] = useState("");
    const {
        register,
        handleSubmit,
        formState : { errors},
        reset,
        watch,
        getValues,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        setSuccess("User Registration Successful.")
        reset();
    }

    let password = watch("pwd", "");
    return (
        <>
            <div className="container shadow bg-wight mt-3">
                <div className="row bg-light mx-3">
                    <h1>React Form</h1>
                </div>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    {success && <p className='text-success fs-3 text-center'>{success}</p>}
                    <div className="row mx-3 mt-1">
                        <label htmlFor="Fullname" className='fs-4'>Fullname: </label>
                        <input type="text" name="fname" placeholder='Enter Your Fullname'
                        {...register("fname" , { required: true})}
                        />
                        {
                            errors.fname && errors.fname.type === "required" && (<p className='text-danger mb-0 pb-0'>Please Enter Fullname.</p>)
                        }
                    </div>
                    <div className="row mx-3 mt-1">
                        <label htmlFor="email" className='fs-4'>Email: </label>
                        <input type="text" name="email" placeholder='Enter Your Email'
                        {...register("email" , { required: true , 
                            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}
                        />
                        {
                            errors.email && errors.email.type === "required" && 
                            (<p className='text-danger mb-0 pb-0'>
                                Please Enter Email.
                            </p>) 
                        }
                        {
                            errors.email && errors.email.type === "pattern" && (<p className='text-danger mb-0 pb-0'>
                                Please Enter Valid Email.
                            </p>) 
                        }
                    </div>
                    <div className="row mx-3 mt-1">
                        <label htmlFor="Phone" className='fs-4'>Phone Number: </label>
                        <input type="text" name="contact" placeholder='Enter Your Contact Number' 
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                        {...register("contact" , { required: true}) }
                        />
                        {
                            errors.contact && errors.contact.type === "required" &&
                            (<p className='text-danger mb-0 pb-0'>
                                Please Enter Contact Number.
                            </p>)
                        }
                        {/* {
                            errors.contact && errors.contact.type === "pattern" &&
                            (<p className='text-danger mb-0 pb-0'>
                                Please Enter Valid Contact Number.
                            </p>)
                        } */}
                    </div>
                    <div className="row mx-3 mt-1">
                        <label htmlFor="password" className='fs-4'>Password: </label>
                        <input type="password" name="pwd" placeholder='Password'
                        {...register("pwd", { required: true , minLength:5 , maxLength:10})}
                        />
                        {
                            errors.pwd && errors.pwd.type === "required" &&
                            (<p className='text-danger mb-0 pb-0'>
                                Please Enter Password.
                            </p>)
                        }
                        {
                            errors.pwd && errors.pwd.type === "minLength" &&
                            (<p className='text-danger mb-0 pb-0'>
                                Password must contain atleast 6-character.
                            </p>)
                        }
                    </div>
                    <div className="row mx-3 mt-1">
                        <label htmlFor="cpassword" className='fs-4'>Confirm Password: </label>
                        <input type="password" name="cpwd" placeholder='Confirm Password'
                        {...register("cpwd", { required: true , minLength:5 , maxLength:10,
                            validate: (value) => value === getValues("pwd")
                        
                        })}
                        />
                        {
                            errors.cpwd && errors.cpwd.type === "required" &&
                            (<p className='text-danger mb-0 pb-0'>
                                Please Confirm Password.
                            </p>)
                        }
                        {
                            errors.cpwd && errors.cpwd.type === "validate" &&
                            (<p className='text-danger mb-0 pb-0'>
                                Password Must Be Same.
                            </p>)
                        }
                    </div>
                    <div className="row mx-3 mt-1">
                        <label htmlFor="state" className='fs-4'>Select Your State: </label>
                    <select name="state" id="" {...register("state", {required: true})}>
                            <option value="" disabled selected hidden>Select State</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Delhi">Delhi</option>
                        </select>
                    </div>
                    <div className="row mx-3 mt-1">
                        <label htmlFor="state" className='fs-4'>Select Gender: </label>
                        <select name="gender" id="" {...register("gender" , {required: true})}>
                            <option value="" disabled selected hidden>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="row mx-3 mt-1">
                        <div className="col-1">
                            <input type="checkbox" name='tc'className='float-end mt-2' {...register("tc" , {required: true})}/>
                        </div>
                        <div className="col-11">
                            <label htmlFor="tc" className='float-start'>I agree all Terms & Conditions. </label>
                            {
                                errors.tc && errors.tc.type === "required" && (
                                    <p className='text-danger mb-0 pb-0'>Please Agree To Terms & Conditions.</p>
                                )
                            }
                        </div>    
                    </div>
                    <input type="submit" name="" className='btn btn-primary my-3 ms-3'/>

                </form>
            </div> 
        </>
    )
}

export default Form