import "./Contact.css";

export const Contact = ({ avatar, firstName, lastName, phone }) => {
  return (
    <div className="contact-item row">
      <div className="contact-photo col">
        <img src={avatar} alt="contact photo"></img>
      </div>
      <div className="contact-info col">
        <div className="contact-name row">
          {firstName} {lastName}
        </div>
        <div className="contact-number row">{phone}</div>
      </div>
    </div>
  );
};
