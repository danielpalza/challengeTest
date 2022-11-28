import express from "express";
import cors from "cors";
import AccountsRoutes from "./routes/accounts.routes.js";
let  app = express();

app.use(cors())
//app.options('*', cors())
// Routes
app.use("/api/accounts", AccountsRoutes);

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
