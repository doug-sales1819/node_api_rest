import * as dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT = process.env.PORT || 3030;

app.listen(PORT, (error) => {
    if (error) {
        console.error('Error when starting the app: ' + error);
    }
    console.log(`http://localhost:${PORT}`);
});