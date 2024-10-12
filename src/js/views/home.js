import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard.js";
import { Link } from "react-router-dom";

export const Home = () => {
    const { store, actions } = useContext(Context);

    
    useEffect(() => {
        actions.getContactList();
    }, []);  

    console.log("Updated contact list:", store.contactList);

    return (
        <div className="mt-5">
            <div className="container">
                <div className="button-container">
                    <Link className="btn btn-primary" to="/add-contact">Add New Contact</Link>
                </div>

                <ul className="list-group mt-3">
                    {store.contactList.length > 0 ? (
                        store.contactList.map((item, index) => (
                            <li className="list-group-item" key={index}>
                                <ContactCard contact={item} />
                            </li>
                        ))
                    ) : (
                        <li className="list-group-item">No contacts available</li>
                    )}
                </ul>
            </div>
        </div>
    );
};
