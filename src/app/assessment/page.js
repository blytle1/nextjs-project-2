'use client';
import React, { useState } from 'react';
import Header from '../Components/header';  
import styles from './tool.modules.css';

export default function Assessment() {
  const [acuity, setAcuity] = useState("");
  const [field, setField] = useState("");
  const [experience, setExperience] = useState("");
  const [advocacy, setAdvocacy] = useState("");
  const [parentInvolvement, setParentInvolvement] = useState("");
  const [teacherSupport, setTeacherSupport] = useState("");
  const [totalScore, setTotalScore] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the state variables
    console.log(acuity, field, experience, advocacy, parentInvolvement, teacherSupport);
    const score = Number(acuity) + Number(field) + Number(experience) + Number(advocacy) + Number(parentInvolvement) + Number(teacherSupport);
    setTotalScore(score);
  };

  return (
    <div>
      <Header />
      <div>
        <form onSubmit={handleSubmit}>
              <div className='div1'>
                <label htmlFor="acuity">Student's visual acuity?</label>
                <select id="acuity" name="acuity" value={acuity} onChange={(e) => setAcuity(e.target.value)} required>
                <option value="0">Please make a selection</option>
                <option value="1">20/40 - 20/70</option>
                <option value="2">greater than 20/70 or less than 20/200</option>
                <option value="3">20/200 or less than 20/400</option>
                <option value="4">greater than 20/400</option>
                <option value="5">total blindness or light perception</option>
                </select>
              </div>
              <div className='div1'>
                <label htmlFor="field">Student's visual field?</label>
                <select id="field" name="field" value={field} onChange={(e) => setField(e.target.value)} required>
                <option value="0">Please make a selection</option>
                <option value="0">No field loss</option>
                <option value="1">30 degrees to 10 degrees</option>
                <option value="3">10 degrees to 1 degree</option>
                <option value="5">light perception or total blindness</option>
                </select>
              </div>
              <div className='div1'>
                <label htmlFor="experience">Student's experience with AT?</label>
                <select id="experience" name="experience" value={experience} onChange={(e) => setExperience(e.target.value)} required>
                <option value="0">Please make a selection</option>
                <option value="0">Extensive experience with AT</option>
                <option value="1">Proficient with 1-2 devices</option>
                <option value="2">Some experience with AT</option>
                <option value="4">Little experience with At</option>
                <option value="5">No experience with AT</option>
                </select>
              </div>
              <div className='div1'>
                <label htmlFor="advocate">Does your student advocate for their materials?</label>
                <select id="advocate" name="advocate" value={advocacy} onChange={(e) => setAdvocacy(e.target.value)} required>
                <option value="0">Please make a selection</option>
                <option value="0">Advocates on a routine basis</option>
                <option value="1">Advocates most of the time</option>
                <option value="2">Sometime advocates</option>
                <option value="4">Rarely advocates</option>
                <option value="5">Never advocates</option>
                </select>
              </div>
              <div className='div1'>
                <label htmlFor="parentInvolvement">How involved are the student's parents?</label>
                <select id="parentInvolvement" name="parentInvolvement" value={parentInvolvement} onChange={(e) => setParentInvolvement(e.target.value)} required>
                <option value="0">Please make a selection</option>
                <option value="0">Extensive support for AT</option>
                <option value="1">Very supportive for AT</option>
                <option value="2">Provides some support for AT</option>
                <option value="4">Rarely supports AT</option>
                <option value="5">Never supports AT</option>
                </select>
              </div>
              <div className='div1'>
                <label htmlFor="teacherSupport">Does student recieve support from general education teacher?</label>
                <select id="teacherSupport" name="teacherSupport" value={teacherSupport} onChange={(e) => setTeacherSupport(e.target.value)} required>
                <option value="0">Please make a selection</option>
                <option value="0">Extensive support for AT</option>
                <option value="1">Very supportive for AT</option>
                <option value="2">Provides some support for AT</option>
                <option value="4">Rarely supports AT</option>
                <option value="5">Never supports AT</option>
                </select>
              </div>
              <div className="div1">
              <button className="button1">Submit</button>
            </div>
            </form>
        <div>
          <h2>Total Score: {totalScore !== null ? totalScore : ""}</h2>
        </div>
      </div>
    </div>
  );
}