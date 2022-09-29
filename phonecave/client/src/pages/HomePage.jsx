import { useEffect, useState } from "react";
import "../App.css";
import Details from "../components/Details";

function HomePage() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5005/api/phones`)
      .then((data) => {
        data.json().then((phones) => {
          setPhones(phones);
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {phones.map((phone, i) => {
        return <Details key={i} phone={phone} />;
      })}
    </div>
  );
}

export default HomePage;
