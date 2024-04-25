import Header from '../Components/header';  
import styles from './tool.modules.css';

export default function Assessment() {
  return (
    <div>
      <Header />
      <h2>Assessment Tool</h2>
      <div>
              <div className='div1'>
                <label htmlFor="years">Student's visual acuity?</label>
                <select id="acuity" name="acuity" required>
                <option value="0">Please make a selection</option>
                <option value="1">20/40 - 20/70</option>
                <option value="2">greater than 20/70 or less than 20/200</option>
                <option value="3">20/200 or less than 20/400</option>
                <option value="4">greater than 20/400</option>
                <option value="5">total blindness or light perception</option>
                </select>
              </div>
              <div className='div1'>
                <label htmlFor="years">Student's visual field?</label>
                <select id="years" name="years" required>
                <option value="0">Please make a selection</option>
                <option value="1">No field loss</option>
                <option value="2">30 degrees to 10 degrees</option>
                <option value="3">10 degrees to 1 degree</option>
                <option value="4">light perception or total blindness</option>
                </select>
              </div>
              <div className='div1'>
                <label htmlFor="years">Student's experience with AT?</label>
                <select id="years" name="years" required>
                <option value="0">Please make a selection</option>
                <option value="1">Extensive experience with AT</option>
                <option value="2">Proficient with 1-2 devices</option>
                <option value="3">Some experience with AT</option>
                <option value="4">Little experience with At</option>
                <option value="5">No experience with AT</option>
                </select>
              </div>
              <div className='div1'>
                <label htmlFor="years">Does your student advocate for their materials?</label>
                <select id="years" name="years" required>
                <option value="0">Please make a selection</option>
                <option value="1">Advocates on a routine basis</option>
                <option value="2">Advocates most of the time</option>
                <option value="3">Sometime advocates</option>
                <option value="4">Rarely advocates</option>
                <option value="5">Never advocates</option>
                </select>
              </div>
              <div className='div1'>
                <label htmlFor="years">How involved are the student's parents?</label>
                <select id="years" name="years" required>
                <option value="0">Please make a selection</option>
                <option value="1">Extensive support for AT</option>
                <option value="2">Very supportive for AT</option>
                <option value="3">Provides some support for AT</option>
                <option value="4">Rarely supports AT</option>
                <option value="5">Never supports AT</option>
                </select>
              </div>
              <div className='div1'>
                <label htmlFor="years">Does student recieve support from general education teacher?</label>
                <select id="years" name="years" required>
                <option value="0">Please make a selection</option>
                <option value="1">Extensive support for AT</option>
                <option value="2">Very supportive for AT</option>
                <option value="3">Provides some support for AT</option>
                <option value="4">Rarely supports AT</option>
                <option value="5">Never supports AT</option>
                </select>
              </div>
              <div className="div1">
              <button className="button1">Submit</button>
            </div>
            </div>
    </div>
  );
}