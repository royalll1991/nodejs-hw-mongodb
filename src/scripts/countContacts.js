import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const allContacts = JSON.parse(data);

    return allContacts.length;
};

console.log(await countContacts());


