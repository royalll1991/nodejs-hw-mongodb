import path from 'path';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

const contactsPath = path.join(process.cwd(), PATH_DB);

export const removeAllContacts = async () => {
    await fs.writeFile(contactsPath, JSON.stringify([], null, 2), 'utf-8');
    
};

await removeAllContacts();
