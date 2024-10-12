import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";

export const ContactCard = ({ contact }) => {
  const { actions } = useContext(Context);
  const [isDeleting, setIsDeleting] = useState(false);  
  const contactId = contact?.id;
  const contactIdString = contactId?.toString();
  const navigate = useNavigate();

  if (!contact) {
    return <div>Loading...</div>;
  }

  const handleEditClick = () => {
    navigate("/edit/" + contactIdString);
  };

  const handleDeleteClick = async () => {
    setIsDeleting(true);  
    await actions.deleteContact(contactId);
    setIsDeleting(false); 
  };

  return (
    <div className="card mb-3" style={{ maxWidth: "100%", backgroundColor: "#343a40", color: "#fff" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://pngimg.com/uploads/mandalorian/mandalorian_PNG23.png"
            className="img-fluid rounded-start"
            alt="contact"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{contact.name}</h3>
            <p className="card-text fs-3">{contact.email}</p>
            <p className="card-text fs-3">{contact.phone}</p>
            <p className="card-text fs-3">{contact.address}</p>
            <div className="d-flex gap-2">
              <button className="btn btn-secondary" onClick={handleEditClick}>
                Edit Contact
              </button>
              <button
                className="btn btn-danger"
                onClick={handleDeleteClick}
                disabled={isDeleting}  
              >
                {isDeleting ? "Deleting..." : "Delete Contact"}  
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
