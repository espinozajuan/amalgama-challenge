import React, { useMemo } from 'react';

// Componente para lista de direcciones
const AddressList = ({ addresses }) => (
  <div>
    <h4>{addresses.length > 1 ? 'Addresses' : 'Address'}:</h4>
    {addresses.map((address, index) => (
      <ul key={index}>
        <li>{address.line_1}</li>
        <li>{address.line_2}</li>
        <li>{address.zip_code}</li>
        <li>{address.city}</li>
        <li>{address.state}</li>
      </ul>
    ))}
  </div>
);

// Componente para detalles de contacto
const ContactCard = ({ contact }) => (
  <div key={contact.id}>
    <div>
      <img src={contact.avatar_url} alt={`${contact.full_name}'s avatar`} />
      <h2>{contact.full_name}</h2>
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

const ContactsScreen = ({ contacts, cities, states }) => {
  // Memoizamos los contactos para evitar renderizaciones innecesarias
  const contactsToDisplay = useMemo(
    () =>
      contacts.map((contact) => ({
        id: contact.id,
        avatar_url: contact.avatar_url,
        full_name: `${contact.first_name} ${contact.last_name}`,
        company: contact.company,
        details: truncate(contact.details, 100),
        email: contact.email,
        phone_number: `(${contact.phone.area_code}) ${contact.phone.number}`,
        addresses: contact.addresses.map((address) => ({
          line_1: address.line_1,
          line_2: address.line_2,
          zip_code: address.zip_code,
          city: findById(cities, address.city_id),
          state: findById(states, address.state_id),
        })),
      })),
    [contacts, cities, states]
  );

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href='/home'>Home</a>
          </li>
          <li>
            <a href='/contacts'>My Contacts</a>
          </li>
        </ul>
      </nav>
      <h1>Contacts 👥</h1>
      {contactsToDisplay.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactsScreen;
