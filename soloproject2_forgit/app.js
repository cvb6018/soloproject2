import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath} from 'url';
import userRoutes from './routes/userRoutes.js';
import blogRoutes from "./routes/blogRoutes.js";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/IST256Solo2', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoCreate: true
    }).then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.error("Error connecting to MongoDB", err);
    })

app.use('/users', userRoutes);
app.use('/blog', blogRoutes);

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, 'frontend'), {
    // set content type explicitly from .js files
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

// Define the route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/index.html'))
});


app.listen(port, () => {
    console.log("Server is running");
})





