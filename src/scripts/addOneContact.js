import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';
import { createFakeContact } from '../utils/createFakeContact.js';

const contactsPath = path.join(process.cwd(), PATH_DB);

export const addOneContact = async () => {
    try {
        const data = await fs.readFile(contactsPath, 'utf-8');
        const  contacts = JSON.parse(data);

        const newContact = createFakeContact();
        contacts.push(newContact);

        await fs.writeFile(contactsPath, JSON.stringify( contacts, null, 2,), 'utf-8');
        console.log('Add contact');
    } catch (error) {
        console.log('Add contacts error', error);
    }
};

await addOneContact();





// import { PATH_DB } from '../constants/contacts.js';
// import fs from 'fs/promises';
// import { createFakeContact } from '../utils/createFakeContact.js';
// import path from 'node:path';


// const contactsPath = path.join(process.cwd(), PATH_DB);
// const generateContacts = async (number) => {
//     try {
//         const data = await fs.readFile(contactsPath, 'utf-8');
//         const contacts = JSON.parse(data);

//         for (let i = 0; i < number; i++) {
//             const newContact = createFakeContact();
//             contacts.push(newContact);
//         }
//        await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), 'utf-8');
//         console.log(`Generating ${number} contacts:`);

//     } catch (error) {
//         console.log('Error generating contacts', error);
//     }
// };

// await generateContacts(5);



