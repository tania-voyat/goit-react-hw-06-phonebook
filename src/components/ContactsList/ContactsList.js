import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import styles from "./ContactsList.module.css";

const ContactsList = ({ contacts, onRemoveContact }) => (
  <TransitionGroup component="ul" className={styles.contactList}>
    {contacts.map(({ id, name, number }) => (
      <CSSTransition key={id} timeout={250} classNames={styles}>
        <li className={styles.contactListItem}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            type="button"
            onClick={() => onRemoveContact(id)}
            className={styles.button}
          ></button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

const mapStateToProps = (state) => {
  const visibleContacts = state.contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
  );

  return {
    contacts: visibleContacts,
  };
};
const mapDispatchToProps = {
  onRemoveContact: contactsActions.removeContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
