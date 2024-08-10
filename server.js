const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Activer la compression Gzip
app.use(compression());

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Route d'exemple
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
