import React from "react";
import Header from "./Header";
import ContactsList from "./ContactsList/ContactsList";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import styles from "./App.module.css";

export default function App() {
  return (
    <div>
      <Header />
      <ContactForm />
      <h3 className={styles.heading}>Contacts</h3>
      <Filter />
      <ContactsList />
    </div>
  );
}
