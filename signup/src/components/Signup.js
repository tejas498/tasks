import React , {useState} from "react";
import '../App.css';

const Signup = () => {

    const [userdata , setUserdata] = useState(
        {
            fname : "",
            lname : "",
            mail : "",
            gender : "",
            mnumber : "",
            address : "",
        }
    )

    // const [ data , setData] = useState([]);
    const [errors , setErrors] = useState({});
    const [ submit , setSubmit] = useState(false)
    const [ isedit , setIsedit] = useState(false)
    
    const handleinput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name , value);
        setUserdata({...userdata, [name] : value});
    }
    
    const handlesubmit = (e) => {
        e.preventDefault();
        const newErrors = validate(userdata)
        if( Object.keys(newErrors).length > 0){
            setErrors(newErrors);
            return;
        } 

        setSubmit(true)
        setErrors([])
    
        // const newRecord = { ...userdata , id: new Date().getTime().toString()}
        // setData([...data,newRecord]);
        
    }


    const validate = (ud) => {
        const errors = {};
        const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const contactRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

        if(!ud.fname){
            errors.fname = "FirstName is Required."
        }
        if(!ud.lname){
            errors.lname = "LastName is Required."
        }
        if(!ud.mail){
            errors.mail = "Email is required."
        }else if(!mailRegex.test(ud.mail)){
            errors.mail = "This is not valid Email."
        }
        if(!ud.gender){
            errors.gender = "Select Gender."
        }
        if(!ud.mnumber){
            errors.mnumber = "Enter mobile number."
        }else if(!contactRegex.test(ud.mnumber)){
            errors.mnumber = "This is not valid mobile Number."
        }
        if(!ud.address){
            errors.address = "Address is required."
        }
        return errors;
    }

    const editData = (e) => {
        e.preventDefault()
        setIsedit(true)
    }

    const updatedata = (e) => {
        e.preventDefault()
        setIsedit(false)
        const newErrors = validate(userdata)
        if( Object.keys(newErrors).length > 0){
            setErrors(newErrors);
            return;
        } 
        setErrors([])
    }
    return (
        <>
            { !submit && (
                <>
            <h1 style={{textAlign: "center"}}>Sign Up</h1>
            <form action="" className="signup" onSubmit={handlesubmit}>
                <div className="item">
                    <p>First Name:</p>
                    <input type="text" name="fname" id="fname" size={100} placeholder="First Name" value={userdata.fname}
                    onChange={handleinput}/>
                    <div style={{color: "red"}}>{errors.fname}</div>
                </div>
                {console.log(userdata.fname)}
                <div className="item">
                    <p>Last Name:</p>
                    <input type="text" name="lname" id="lname" size={100} placeholder="Last Name"
                    value={userdata.lname}
                    onChange={handleinput}/>
                    <div style={{color: "red"}}>{errors.lname}</div>
                </div>
                <div className="item">
                    <p>Email:</p>
                    <input type="text" name="mail" id="mail" size={100} placeholder="Email" value={userdata.mail}
                    onChange={handleinput} />
                    <div style={{color: "red"}}>{errors.mail}</div>
                </div>
                <div className="item">
                    <p>Gender:</p>
                    <select name="gender" id="gender" style={{ width: 702, height: 23 }} value={userdata.gender}
                    onChange={handleinput}>
                        <option value="" disabled selected hidden>Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="No">Prefer Not To Say</option>
                        <option value="other">Other</option>
                    </select>
                    <div style={{color: "red"}}>{errors.gender}</div>
                </div>
                <div className="item">
                    <p>Contact number:</p>
                    <input type="tel" name="mnumber" id="mnumber" size={100}
                    placeholder="Contact Number" value={userdata.mnumber}
                    onChange={handleinput} />
                    <div style={{color: "red"}}>{errors.mnumber}</div>
                </div>
                <div className="item">
                    <p>Address: </p>
                    <textarea name="address" id="address" cols="93" rows="7" value={userdata.address }
                    onChange={handleinput}></textarea>
                    <div style={{color: "red"}}>{errors.address}</div>
                </div>
                <div className="item">
                    <button type="submit" >submit</button>
                </div>
            </form>
            </>
            )}
            { isedit && (
                <>
                <h1 style={{textAlign: "center"}}>Sign Up</h1>
            <form action="" className="signup" onSubmit={handlesubmit}>
                <div className="item">
                    <p>First Name:</p>
                    <input type="text" name="fname" id="fname" size={100} placeholder="First Name" value={userdata.fname}
                    onChange={handleinput}/>
                    <div style={{color: "red"}}>{errors.fname}</div>
                </div>
                {console.log(userdata.fname)}
                <div className="item">
                    <p>Last Name:</p>
                    <input type="text" name="lname" id="lname" size={100} placeholder="Last Name"
                    value={userdata.lname}
                    onChange={handleinput}/>
                    <div style={{color: "red"}}>{errors.lname}</div>
                </div>
                <div className="item">
                    <p>Email:</p>
                    <input type="text" name="mail" id="mail" size={100} placeholder="Email" value={userdata.mail}
                    onChange={handleinput} />
                    <div style={{color: "red"}}>{errors.mail}</div>
                </div>
                <div className="item">
                    <p>Gender:</p>
                    <select name="gender" id="gender" style={{ width: 702, height: 23 }} value={userdata.gender}
                    onChange={handleinput}>
                        <option value="" disabled selected hidden>Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="No">Prefer Not To Say</option>
                        <option value="other">Other</option>
                    </select>
                    <div style={{color: "red"}}>{errors.gender}</div>
                </div>
                <div className="item">
                    <p>Contact number:</p>
                    <input type="tel" name="mnumber" id="mnumber" size={100}
                    placeholder="Contact Number" value={userdata.mnumber}
                    onChange={handleinput} />
                    <div style={{color: "red"}}>{errors.mnumber}</div>
                </div>
                <div className="item">
                    <p>Address: </p>
                    <textarea name="address" id="address" cols="93" rows="7" value={userdata.address }
                    onChange={handleinput}></textarea>
                    <div style={{color: "red"}}>{errors.address}</div>
                </div>
                <div className="item">
                    <button type="submit" onClick={updatedata} >update</button>
                </div>
            </form>
            </>
            )}
            <div>
                {
                    submit  && <>
                                <h3 style={{textAlign: "center"}}>{userdata.fname} {userdata.lname}</h3>
                                <h3 style={{textAlign: "center"}}>{userdata.mail}</h3>
                                <h3 style={{textAlign: "center"}}>{userdata.gender}</h3>
                                <h3 style={{textAlign: "center"}}>{userdata.mnumber}</h3>
                                <h3 style={{textAlign: "center"}}>{userdata.address}</h3>
                                <div className="item">
                                    <button type="submit" onClick={editData}>EDIT</button>
                                </div>
                            </>  
                        
                        
                   
                }
            </div>
        </>
    );
}

export default Signup;