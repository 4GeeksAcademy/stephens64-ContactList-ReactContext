import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
    const { actions } = useContext(Context);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);  
    const navigate = useNavigate();

    const handleClick = async () => {
        setIsSubmitting(true);  
        await actions.addContact(fullName, email, phone, address);
        setIsSubmitting(false);  
        navigate("/");  
    };

    return (
        <div className="addContactCard container">
            <div className="col-md-6 mx-auto mb-3">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input
                    className="form-control"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                />
            </div>

            <div className="col-md-6 mx-auto mb-3">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                />
            </div>

            <div className="col-md-6 mx-auto mb-3">
                <label className="form-label" htmlFor="phone">Phone</label>
                <input
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                />
            </div>

            <div className="col-md-6 mx-auto mb-3">
                <label className="form-label" htmlFor="address">Address</label>
                <input
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Address"
                />
            </div>

            <div className="text-center">
                <button
                    onClick={handleClick}
                    className="btn btn-primary"
                    style={{ width: "auto" }}
                    disabled={isSubmitting}  
                >
                    {isSubmitting ? "Saving..." : "Save"} 
                </button>
            </div>
        </div>
    );
};
