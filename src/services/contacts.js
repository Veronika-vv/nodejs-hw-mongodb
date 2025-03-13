import { contactsCollection } from '../db/models/contact.js';

export const getAllContacts = () => contactsCollection.find();

export const getContactsById = (contactId) =>
  contactsCollection.findById(contactId);

export const createContact = (payload) => {
  return contactsCollection.create(payload);
};

export const updateContact = (contactId, payload) => {
  return contactsCollection.findByIdAndUpdate(contactId, payload, {
    new: true,
  });
};

export const deleteContact = (contactId) => {
  return contactsCollection.findOneAndDelete({
    _id: contactId,
  });
};
