import {Link} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import checkSession from "../util/session";
import Logo from "../components/Logo";
import Submit from "../components/buttons/Submit";

const Register = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const validate=(data)=>{
        if((data["name"]).length < 3){
            alert("Name should be atleast 3 characters long");
            return false;
        }else if(data["mobile"].toString().length !== 10){
            alert("Mobile number should be 10 digits long");
            return false;
        }
        return true;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        let data = {
            "name": e.target["full-name"].value.trim(),
            "mobile": parseInt(e.target["mobile"].value),
            "age": parseInt(e.target["age"].value),
            "date_of_birth": e.target["dob"].value,
            "standard": parseInt(e.target["class"].value),
            "state": e.target["state"].value
        };
        if (!validate(data)) {
            setIsSubmitting(false);
            return;
        }
        let URL = import.meta.env.VITE_REACT_API_URL + "/api/signup";
        console.log(data);
        try {
            const res = await axios.post(URL, data);
            alert(res.data.message);
            if(res.status === 200){
                window.location.href = "/login";
            }
        }catch(err){
            console.log(err);
        }finally{
            setIsSubmitting(false);
        }
    }
    
    useEffect(()=>{
        async function redirect() {
            let session = await checkSession();
            console.log("Session on - " + session);
            if (session) {
                alert("You have already logged in. Start the test.");
                window.location.href = "/test";
            }
        }
        redirect();  
    },[]);
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            <div className="mb-8">
                <Logo/>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg min-w-sm">
                <h1 className="text-2xl font-bold text-black text-center mb-3">Register for the test</h1>
                <p className="text-red-500 text-center mb-3">{`(All the fields are mandatory)`}</p>
                <hr />
                <p className="text-center mb-6 mt-3">Already registered? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
                <form className="space-y-4 md:text-lg text-md text-black font-medium" onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="full-name">Full name:</label>
                        <input required type="text" id="full-name" name="full-name" className="border border-black rounded-md p-2" />

                        <label htmlFor="mobile">Mobile number:</label>
                        <input required type="tel" id="mobile" name="mobile" className="border border-black rounded-md p-2" />

                        <label htmlFor="age">Age:</label>
                        <input required type="number" id="age" name="age" className="border border-black rounded-md p-2" />

                        <label htmlFor="dob">Birth date:</label>
                        <input required type="date" id="dob" name="dob" className="border border-black rounded-md p-2" />

                        <label htmlFor="class">Class:</label>
                        <input required type="number" id="class" name="class" className="border border-black rounded-md p-2" />

                        <label htmlFor="state" className="text-black font-medium">State:</label>
                        <select required name="state" id="state" className="border border-black rounded-md p-2">
                            <option value="">select-state</option>
                            <option value="Other">Other</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                            <option value="Andaman & Nicobar">Andaman & Nicobar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Dadra & Nagar Haveli">Dadra & Nagar Haveli</option>
                            <option value="Daman & Diu">Daman and Diu</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Ladakh">Ladakh</option>
                            <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                        </select>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Submit text="Register" isLoading={isSubmitting}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
