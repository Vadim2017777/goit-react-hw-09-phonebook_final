import React, { Component } from 'react';
import { connect } from 'react-redux';

import { onFetchContacts } from '../../redux/Contact/contactsOperations';
import { overlapToggle } from '../../redux/Contact/contactActions';

import contactsSelectors from '../../redux/Contact/contactsSelectors';

import Notification from '../Natification/Natification';
import ContactListForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

class TaskerView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  componentDidUpdate() {
    const { overlap, onOverlap } = this.props;
    if (overlap) {
      setTimeout(() => {
        onOverlap(overlap);
      }, 1500);
    }
  }

  render() {
    const showContacts = this.props.contacts.length;
    const { error } = this.props;
    return (
      <>
        <Notification />
        {error && <h1>Sorry:{error.message}</h1>}
        <ContactListForm />
        {showContacts > 1 && <Filter />}
        <ContactList />
      </>
    );
  }
}

const mDTP = { fetchContacts: onFetchContacts, onOverlap: overlapToggle };
const mSTP = state => ({
  contacts: contactsSelectors.getContacts(state),
  error: contactsSelectors.getError(state),
  overlap: contactsSelectors.getOverlap(state),
});

export default connect(mSTP, mDTP)(TaskerView);
