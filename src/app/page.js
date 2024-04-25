import Header from './Components/header';   
import React from 'react'; // 
import Image from 'next/image';
import formImage from './images/braillesense.png';
import formImage2 from './images/qbraille.png'; 
import formImage3 from './images/braillenote.jpeg';

const imageData = [
  {link: 'https://hims-inc.com/product/braillesense-6/' }, 
];
const imageData2 = [
  {link: 'https://hims-inc.com/product/qbraille-xl/' }, 
];
const imageData3 = [
  {link: 'https://store.humanware.com/hus/blindness-braillenote-touch-plus-32.html' }, 
];

export default function Home() {
  return (
    <div>
      <Header />
      <h2>Home Page</h2>
      <h3>Welcome To The Home Page!</h3>
      <h3>Please use the Navigation Bar at the top to access the different pages of this web tool application.</h3>
      <div>
        <p>This web tool application is designed to best support teachers of students with visual impairments (TSVIs).
          Through the use of this tool, TSVIs can better prepare for their students' assistive technology (AT) needs.
          The Assessment Tool link at the top will direct you to the assessment tool page where you can input your student's information and receive a list of AT recommendations.
          Additionally, please make sure and fill out the Contact Information page so that we can better assist you with any questions or concerns you may have.
          The tool is free to use, and we are always looking for ways to improve it. Please feel free to reach out to us with any feedback you may have.
          Below are some helpful links to resources that may be of use to you.  Click on the various images to take you directly to the manufacturer's website.
        </p>
      </div>
      <div className="image-container">
        {imageData.map((item, index) => ( 
          <div key={index} className="image-wrapper">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Image src={formImage} alt={`Image ${index}`} width={375} height={200} />
            </a>
          </div>
        ))}
        {imageData2.map((item, index) => ( 
          <div key={index} className="image-wrapper">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Image src={formImage2} alt={`Image ${index}`} width={375} height={200} />
            </a>
          </div>
        ))}
        {imageData3.map((item, index) => ( 
          <div key={index} className="image-wrapper">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Image src={formImage3} alt={`Image ${index}`} width={375} height={200} />
            </a>
          </div>
        ))}
    </div>
    </div>
  );
}
