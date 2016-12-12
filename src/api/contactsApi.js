import delay from './delay';

const contacts = [
  {
    id: 1,
    name: "Eunice Chang",
    email: "omgunis@gmail.com",
    subject: "Job Offer",
    message: "I love your website, I'd like to offer you a job"
  },
  {
    id: 2,
    name: "Jeramy Ritchie",
    email: "jeramyritchie@gmail.com",
    subject: "Hey",
    message: "Hey"
  }
];

const generateId = (contact) => {
  return contacts.length + 1;
};

class ContactApi {
  static saveContact(contact){
    contact = Object.assign({}, contact);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(contact.name.length === 0){
          reject(`Please enter your name`);
        }
        if(contact.email.length === 0){
          reject(`Please enter a valid email address`);
        }
        else {
          contact.id = generateId(contact);
          contacts.push(contact);
        }

        resolve(contact);
      }, delay);
    });
  }
}

export default ContactApi;
