const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contactList: [],
        },
        actions: {
            getContactList: async () => {
                const response = await fetch("https://playground.4geeks.com/contact/agendas/brock");
                if (response.ok) {
                    const data = await response.json();
                    setStore({ contactList: data.contacts });
                } else {
                    console.error("Failed to fetch contact list. Status:", response.status);
                }
            },
            addContact: async (name, email, phone, address) => {
                const response = await fetch("https://playground.4geeks.com/contact/agendas/brock/contacts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        phone: phone,
                        address: address,
                        agenda_slug: "brock"
                    })
                });

                if (response.ok) {
                    getActions().getContactList();  
                } else {
                    const errorData = await response.json();
                    console.error("Failed to add contact. Status:", response.status, "Error data:", errorData);
                }
            },
            updateContact: async (name, email, phone, address, contactId) => {
                const response = await fetch(`https://playground.4geeks.com/contact/agendas/brock/contacts/${contactId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        address: address,
                        phone: phone
                    })
                });

                if (response.ok) {
                    getActions().getContactList();  
                } else {
                    console.error("Failed to update contact. Status:", response.status);
                }
            },
            deleteContact: async (contactId) => {
                const response = await fetch("https://playground.4geeks.com/contact/agendas/brock/contacts/" + contactId, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                if (response.ok) {
                    getActions().getContactList(); 
                } else {
                    console.error("Failed to delete contact. Status:", response.status);
                }
            }
        }
    };
};

export default getState;
