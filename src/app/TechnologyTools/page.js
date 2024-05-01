import Header from '../Components/header';  
import { sql } from '@vercel/postgres';

export default async function TechnologyTools() {

  const returned = await sql `SELECT brand, model, type FROM assistive_technology;`;
  let stringedReturn = JSON.stringify(returned.rows);
  let dataArray = returned.rows;
   console.log(dataArray);

  return (
    <div>
      <Header />
      <h2>Technology Tools</h2>

    <br></br>
     <table>
    <thead>
      <tr>
        {dataArray.length > 0 && Object.keys(dataArray[0]).map((key) => (
          <th key={key}>{key}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {dataArray.map((item) => (
        <tr key={item.id}>
          {Object.values(item).map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table> 
  <br></br>
    </div>
  );
}
