const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Sert les fichiers statiques (HTML, CSS, JS, etc.) depuis le dossier "public"
app.use(express.static(path.join(__dirname, 'public')));

// Exemple d'API backend (facultatif)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello depuis le backend Node.js !' });
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
