import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PhoneDetails() {
  const { id } = useParams();
  console.log(id);
  const [phone, setPhone] = useState([]);
  const {
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram,
  } = phone;
  console.log(name);
  useEffect(() => {
    fetch(`http://localhost:5005/api/phones/${id}`)
      .then((data) => {
        data.json().then((phone) => {
          setPhone(phone);
        });
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-centerß">
      <img class="object-scale-down h-30 w-60" src={`../images/${imageFileName}`} alt={name} />
      <div className="text-4xl text-[#303633]">{name}</div>
      <table
        class="table-auto"
        width="100%"
        border="0"
        cellpadding="2"
        cellspacing="1"
      >
        <tbody>
          <br />
          <tr>
            <td class="TableLayout">Manufacturer: </td>
            <td class="TableLayout"> {manufacturer}</td>
          </tr>
          <br />
          <tr>
            <td class="TableLayout">Description: </td>
            <td class="TableLayout"> {description}</td>
          </tr>
          <br />
          <tr>
            <td class="TableLayout">Color: </td>
            <td class="TableLayout">{color}</td>
          </tr>
          <br />
          <tr>
            <td class="TableLayout">Price: </td>
            <td class="TableLayout">{price} €</td>
          </tr>
          <br />
          <tr>
            <td class="TableLayout">Screen: </td>
            <td class="TableLayout">{screen}</td>
          </tr>
          <br />
          <tr>
            <td class="TableLayout">Processor: </td>
            <td class="TableLayout">{processor}</td>
          </tr>
          <br />
          <tr>
            <td class="TableLayout">RAM:</td>
            <td class="TableLayout">{ram}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PhoneDetails;
