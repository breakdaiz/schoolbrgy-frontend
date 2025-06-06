import React, { useState } from "react";
import axios from "axios";

import brgyLogo from "../assets/BRGY881-LOGO.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("male");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  const [uniformSize, setUniformSize] = useState("");

  const registerHandler = async e => {
    e.preventDefault();

    try {
      const response = await axios.post("https://schoolbrgy-api.vercel.app/register", {
        firstName,
        lastName,
        age,
        gender,
        address,
        contactNumber,
        schoolName,
        gradeLevel,
        uniformSize,
      });
      console.log(response);
      if (response.status) {
        alert("Thank you for Registration")
        navigate("/success-login"); //use this  instead of history.push
      }
      else {
        alert("Please Try again!")
      }


    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/*  Section for Registration */}
      <section id='register-form'>
        <div
          className=' w-full h-full flex flex-col items-center mx-auto space-y-6 
         bg-gradient-to-b from-blue-800 from-80% to-indigo-30% to-100% '
        >
          <img src={brgyLogo} className=' w-30 h-30 xl:w-40 xl:h-40 my-5' />

          <div className='border shadow p-6  w-90 bg-white rounded-lg mx-auto xl:w-150 mb-6 '>
            <h2 className='font-bold text-3xl mb-5 font-poppinsvm text-center'>
              Register Student
            </h2>
            <form className='flex flex-col mx-auto' onSubmit={registerHandler}>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 font-bold mb-2'
                  htmlFor='firstName'
                >
                  First Name / Unang Pangalan
                </label>
                <input
                required
                  type='text'
                  name='firstName'
                  className=' w-full px-3 py-2 font-semibold border-1 rounded-sm border-gray-600
                  focus:outline-none  md:mr-3 md:mb-0'
                  placeholder='Enter First Name'
                  onChange={e => setFirstName(e.target.value)}
                />
              </div>
              {/* Last Name */}
              <div className='mb-4'>
                <label
                  className='block text-gray-700 font-bold mb-2'
                  htmlFor='lastName'
                >
                  Last Name / Apelyido
                </label>
                <input
                required
                  type='text'
                  name='lastName'
                  className=' w-full px-3 py-2 font-semibold border-1 rounded-sm border-gray-600
                  focus:outline-none  md:mr-3 md:mb-0'
                  placeholder='Enter Last Name'
                  onChange={e => setLastName(e.target.value)}
                />
              </div>

              {/* Age */}
              <div className='mb-4'>
                <label
                  className='block text-gray-700 font-bold mb-2'
                  htmlFor='age'
                >
                  Age / Edad
                </label>
                <input
                required
                  type='number'
                  name='age'
                  className='w-full px-3 py-2 font-semibold border-1 rounded-sm border-gray-600
                  focus:outline-none md:mr-3 md:mb-0'
                  placeholder='Enter Age'
                  onChange={e => setAge(e.target.value)}
                />
              </div>

              {/* Gender */}
              <div className='mb-4'>
                <label
                  className='block text-gray-700 font-bold mb-2'
                  htmlFor='age'
                >
                  Gender / Kasarian
                </label>

                <div className='flex items-center mb-2'>
                  <input
                    type='radio'
                    id='male'
                    value='male'
                    name='gender-radio'
                    checked
                    onChange={e => setGender(e.target.value)}
                    className='w-4 h-4 mr-2 bg-gray-100 border-gray-300 text-blue-600'
                  />
                  <label
                    htmlFor='male'
                    className='font-medium text-gray-900 dark:text-gray-600 '
                  >
                    Male
                  </label>
                </div>

                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='female'
                    value='female'
                    name='gender-radio'
                    onChange={e => setGender(e.target.value)}
                    className='w-4 h-4 mr-2 bg-gray-100 border-gray-300 text-blue-600'
                  />
                  <label
                    htmlFor='female'
                    className='font-medium text-gray-900 dark:text-gray-600 '
                  >
                    Female
                  </label>
                </div>
              </div>

              {/* Contact # */}
              <div className='mb-4'>
                <label
                  className='block text-gray-700 font-bold mb-2'
                  htmlFor='contact-number'
                >
                  Contact #
                </label>
                <input
                required
                  type='text'
                  name='contact-number'
                  className='w-full px-3 py-2 font-semibold border-1 rounded-sm border-gray-600
                  focus:outline-none md:mr-3 md:mb-0'
                  placeholder='Enter Contact #'
                  onChange={e => setContactNumber(e.target.value)}
                />
              </div>

              {/* Address */}
              <div className='mb-4'>
                <label
                  className='block text-gray-700 font-bold mb-2'
                  htmlFor='address'
                >
                  Address
                </label>
                <input
                required
                  type='text'
                  name='address'
                  className='w-full px-3 py-2 font-semibold border-1 rounded-sm border-gray-600
                  focus:outline-none md:mr-3 md:mb-0'
                  placeholder='Enter Address'
                  onChange={e => setAddress(e.target.value)}
                />
              </div>

              {/* School Name */}
              <div className='mb-4'>
                <label
                  className='block text-gray-700 font-bold mb-2'
                  htmlFor='schoolName'
                >
                  Name of School / Pangalan ng Paaralan
                </label>
                <input
                required
                  type='text'
                  name='schoolName'
                  className='w-full px-3 py-2 font-semibold border-1 rounded-sm border-gray-600
                  focus:outline-none md:mr-3 md:mb-0'
                  placeholder='Enter School Name'
                  onChange={e => setSchoolName(e.target.value)}
                />
              </div>

              {/* Grade  */}
              <div className='mb-4'>
                <label
                  className='block text-gray-700 font-bold mb-2'
                  htmlFor='gradeLevel'
                >
                  Grade sa Pasukan
                </label>
                <input
                required
                  type='text'
                  name='gradeLevel'
                  className='w-full px-3 py-2 font-semibold border-1 rounded-sm border-gray-600
                  focus:outline-none md:mr-3 md:mb-0'
                  placeholder='Eg: Grade 1'
                  onChange={e => setGradeLevel(e.target.value)}
                />
              </div>

              {/* School Name */}
              <div className='mb-10'>
                <label
                  className='block text-gray-700 font-bold mb-2'
                  htmlFor='uniformSize'
                >
                  Size of Uniform (Shorts or Palda)
                </label>
                <input
                required
                  type='text'
                  name='uniformSize'
                  className='w-full px-3 py-2 font-semibold border-1 rounded-sm border-gray-600
                  focus:outline-none md:mr-3 md:mb-0'
                  placeholder='Eg: Small or 50'
                  onChange={e => setUniformSize(e.target.value)}
                />
              </div>

              {/* Submit Button */}
              <div className='mb-4'>
                <button
                  type='submit'
                  className='w-full bg-teal-600 text-white py-2 rounded-md cursor-pointer'
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
