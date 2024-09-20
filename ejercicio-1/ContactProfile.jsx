import React from 'react';
import AddressList from './AddressList';

const ContactProfile = ({ contact }) => (
  <div>
    <div>
      <img src={contact.avatar_url} alt={`${contact.first_name}'s avatar`} />
      <h2>{`${contact.first_name} ${contact.last_name}`}</h2>
      <h3>{contact.company}</h3>
    </div>
    <p>{contact.details}</p>
    <ul>
      <li>Email: {contact.email}</li>
      <li>Phone: {contact.phone_number}</li>
    </ul>
    <AddressList addresses={contact.addresses} />
  </div>
);

export default ContactProfile;
