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

class ContactApi {
  static saveContact(contact){
    contact = Object.assign({}, contact);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minContactNameLength = 1;
        if(contact.name.length < minContactNameLength){
          reject(`Please enter your name`);
        }
        else {
          contact.id = contacts.length + 1;
          contacts.push(contact);
        }

        resolve(contact);
      }, delay);
    });
  }
}

export default ContactApi;
