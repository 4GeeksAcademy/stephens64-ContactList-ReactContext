import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const navigate = useNavigate();
	const [contact, setContact] = useState({});

	const handleClick = async () => {
		await actions.updateContact(fullName, email, phone, address, id);
		navigate("/");

	useEffect(() => {
		let contacts = store.contactList;
		console.log(contacts);
		let contact = contacts.find((item) => item.id === parseInt(id));
		setContact(contact);
		setFullName(contact.name);
		setEmail(contact.email);
		setPhone(contact.phone);
		setAddress(contact.address);
	}, []);

	
	};

	return (
		<div className="editContactCard text-center">
			<div className="col-md-6 mx-auto mb-3">
				<label className="form-label" htmlFor="name">Full Name</label>
				<input
					className="form-control"
					value={fullName}
					onChange={(e) => setFullName(e.target.value)}
					type="text"
					id="name"
					name="name"
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
				/>
			</div>

			<div className="text-center">
				<button
					onClick={handleClick}
					className="btn btn-primary"
					style={{ width: "auto" }}
				>
					Save
				</button>
			</div>
		</div>
	);
};
