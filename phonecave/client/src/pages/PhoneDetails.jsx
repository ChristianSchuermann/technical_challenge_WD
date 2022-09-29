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
        <div className="flex flex-col items-center justify-center">
          <img src={`../images/${imageFileName}`} alt={name} />
          <h1>{name}</h1>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td>Manufacturer: </td>
                <td>{manufacturer}</td>
              </tr>
              <tr>
                <td>Description: </td>
                <td>{description}</td>
              </tr>
              <tr>
                <td>Color: </td>
                <td>{color}</td>
              </tr>
              <tr>
                <td>Price: </td>
                <td>{price} €</td>
              </tr>
              <tr>
                <td>Screen: </td>
                <td>{screen}</td>
              </tr>
              <tr>
                <td>Processor: </td>
                <td>{processor}</td>
              </tr>
              <tr>
                <td>RAM:</td>
                <td>{ram}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )};

export default PhoneDetails;
