import { sql } from '@vercel/postgres';
import Link from 'next/link'; 

export default async function TechnologyTools() {
  const returned = await sql `SELECT * FROM assistive_technology;`;
  let stringedReturn = JSON.stringify(returned.rows);
  let dataArray = returned.rows;
  return (
    <>
    <br></br>Hello world, Connecting it all together.
    <br></br>
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
    </>
  );
}