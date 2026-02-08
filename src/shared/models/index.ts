import sequelize from "../config/database";

export const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected");
  } catch (error) {
    console.error("❌ DB connection failed:", error);
  }
};

export default sequelize;