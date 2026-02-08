import app from "./app";
import { dbConnect } from "./shared/models";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await dbConnect();
  app.listen(PORT, () =>
    console.log(`🚀 Server running on port ${PORT}`)
  );
};

startServer();