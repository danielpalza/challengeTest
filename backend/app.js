import express from "express";
import AccountsRoutes from './routes/accounts.routes.js'
var app = express();


// Routes
app.use('/api/accounts', AccountsRoutes);

app.listen(3000, () => {
 console.log("Server running on port 3000");
});