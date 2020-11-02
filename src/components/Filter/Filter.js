import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import styles from "./Filter.module.css";

function Filter({ value, onChangeFilter }) {
  return (
    <div className={styles.filter}>
      <label className={styles.label}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={(e) => onChangeFilter(e.target.value)}
          className={styles.input}
        ></input>
      </label>
    </div>
  );
}

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
