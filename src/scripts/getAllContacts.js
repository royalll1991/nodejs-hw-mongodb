import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const constants = JSON.parse(data);

    return constants;
};

console.log(await getAllContacts());
