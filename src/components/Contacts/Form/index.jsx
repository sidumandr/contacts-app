import { useState } from "react";

const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues); // // uzun hali = useState({ fullname:"", phone_number: "" }), yukarıda bir obje tanımladık(initialFormValues) ve bütün inputları içerisine atadık. sebebi ise, 2 değil de 10 tane input olsaydı daha yorucu olurdu. bu yüzden obje halinde yazdık.
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form]);

    setForm(initialFormValues); // uzun hali = setForm({ fullname:"", phone_number: "" })
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Fullname"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>

      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>

      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
