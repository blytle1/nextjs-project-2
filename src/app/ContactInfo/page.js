import Image from 'next/image';
import formImage from '../ContactInfo/tech.jpeg'
import Header from '../Components/header';  
import styles from '../ContactInfo/form.modules.css'; 

export default function ContactInfo() {
  return (
    <div>
      <Header />
      <h2>Contact Information</h2>
      <main className="main1">
        <form className="form1">
          <div className="div1">
            <h1 className="head1">Let's Get Started</h1>
            <p>Fill out the form below to get in touch with us.</p>
            <div>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="Enter your email" required />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="years">How Many Years Have You Been Teaching?</label>
                <select id="years" name="years" required>
                <option value="1">1-5 years</option>
                <option value="2">6-10 years</option>
                <option value="3">11-15 years</option>
                <option value="4">16-20 years</option>
                <option value="5">21+ years</option>
                </select>
              </div>
            </div>
            <div>
              <div className="div3">
                <input className="input1" type="checkbox" name="terms" value="checked"/>
                <p>I agree to the terms and conditions that my data will be taken and sold.</p>
              </div>
            </div>
            <div className="div2">
              <Image className="image1" src={formImage} alt="techimage" /> 
              <button className="button1">Thank You!!</button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}