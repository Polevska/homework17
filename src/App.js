import { Contact } from "./components/contact/Contact";
import logo1 from "./img/1.png";
import logo2 from "./img/2.png";
import logo3 from "./img/3.png";
import logo4 from "./img/4.png";
import logo5 from "./img/5.png";
import logo6 from "./img/6.png";
import "./App.css";
import { useState } from "react";
import { CheckBox } from "./components/checkbox/Checkbox";

const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
    avatar: logo1,
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
    avatar: logo2,
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
    avatar: logo3,
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
    avatar: logo4,
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
    avatar: logo5,
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
    avatar: logo6,
  },
];

function App() {
  const [searchtext, setSearchtext] = useState("");
  const [isMan, setIsMan] = useState(true);
  const [isWomen, setIsWomen] = useState(true);
  const [isNA, setIsNA] = useState(true);

  const renderContacItems = (contacts) => {
    return contacts.map((item) => {
      return (
        <Contact
          avatar={item.avatar}
          firstName={item.firstName}
          lastName={item.lastName}
          phone={item.phone}
        />
      );
    });
  };

  const handleSearchChange = (event) => {
    setSearchtext(event.target.value);
  };

  const handleIsManChange = () => {
    setIsMan(!isMan);
  };

  const handleIsWomenChange = () => {
    setIsWomen(!isWomen);
  };

  const handleIsNAChange = () => {
    setIsNA(!isNA);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.firstName.toLowerCase().search(searchtext.toLowerCase()) != -1 ||
      contact.lastName.toLowerCase().search(searchtext.toLowerCase()) != -1 ||
      contact.phone.toLowerCase().search(searchtext.toLowerCase()) != -1
  );

  const mans = filteredContacts.filter((contact) => {
    return contact.gender === "male" && isMan;
  });

  const woman = filteredContacts.filter((contact) => {
    return contact.gender === "female" && isWomen;
  });

  const na = filteredContacts.filter((contact) => {
    return contact.gender === undefined && isNA;
  });

  const contactsByGender = [...mans, ...woman, ...na];

  return (
    <div className="App col">
      <div className="contacts">
        <input
          onChange={handleSearchChange}
          className="search-input"
          placeholder="Search name, number, etc"
        />
        <div className="checkbox-list row">
          <CheckBox
            id="m"
            label="Ч"
            checked={isMan}
            onChange={handleIsManChange}
          />
          <CheckBox
            id="w"
            label="Ж"
            checked={isWomen}
            onChange={handleIsWomenChange}
          />
          <CheckBox
            id="na"
            label="Н/B"
            checked={isNA}
            onChange={handleIsNAChange}
          />
        </div>
        <div className="contact-list">
          {renderContacItems(contactsByGender)}
        </div>
      </div>
    </div>
  );
}

export default App;
