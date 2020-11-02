import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "../contacts/contactsActions";

const onAddContact = (state, action) => [...state, action.payload.contact];

const onRemoveContact = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const items = createReducer([], {
  [contactsActions.addContact]: onAddContact,
  [contactsActions.removeContact]: onRemoveContact,
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({ items, filter });

//   componentDidMount() {
//     const addedContacts = localStorage.getItem("contacts");
//     if (addedContacts) {
//       this.setState({
//         contacts: JSON.parse(addedContacts),
//       });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//     if (this.state.alert === true) {
//       setTimeout(() => {
//         this.setState({ alert: false });
//       }, 5000);
//     }
//   }

//     this.setState((prevState) => {
//       const addedContact = prevState.contacts.map((contact) => contact.name);

//       if (addedContact.includes(name)) {
//         return { alert: true };
//       } else return { contacts: [...prevState.contacts, contact] };
//     });
//   };
