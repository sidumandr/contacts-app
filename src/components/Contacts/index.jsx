import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import {} from "./style.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    // {
    //   fullname: "Safa",
    //   phone_number: 10101010,
    // },
    // {
    //   fullname: "İlhan",
    //   phone_number: 20202020,
    // },
    // {
    //   fullname: "Duman",
    //   phone_number: 30303030,
    // },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
