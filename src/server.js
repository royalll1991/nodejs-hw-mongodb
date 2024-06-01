import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { ENV_VARS } from './constants/constants.js';
import { env } from './utils/env.js';
import { getAllContacts, getContactById } from './services/contacts.js';

function setupServer() { 
const app = express();
    
app.use(
    pino({
        transport: {
            target: 'pino-pretty',
        }
    }));
    
app.use(cors());
    
app.get('/contacts', async (req, res) => { 
    const contacts = await getAllContacts();
    res.json({
        status: 200,
        message: "Successfully found contacts!",
        data: contacts,
    });
});
    
app.get('/contacts/:contactId', async (req, res) => { 
    const id = req.params.contactId;
    const contact = await getContactById(id);
     if (!contact) {
                return res.status(404).json({
                    status: 404,
                    message: `Contact with id ${id} not found!`,
                });
            }
            res.json({
                status: 200,
                message: `Successfully found contact with id ${id}!`,
                data: contact,
            });
});
    
    app.use('*',(req, res) => {
        res.status(404).send('Not found');
});
    
const PORT = env(ENV_VARS.PORT, 3000);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}` );
});
};


export default setupServer;