import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';

const contactsPath = path.join(process.cwd(), PATH_DB);

export const thanos = async () => {
    try {
        const data = await fs.readFile(contactsPath, 'utf-8');
        let contacts = JSON.parse(data);

         contacts = contacts.filter(() => Math.random() < 0.5);

        await fs.writeFile(contactsPath, JSON.stringify( contacts, null, 2,), 'utf-8');
        console.log('Contact is dellet');
    } catch (error) {
        console.log('error', error);
    }
};

await thanos();
