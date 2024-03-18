import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DB_URL,
  bcrypt_salt_round: process.env.BCRYPT_SALT_ROUNDS,
  jwt: {
    secret: process.env.JWT_SECRET,
    refresh_secret: process.env.JWT_REFRESH_SECRET,
    expiresIn: process.env.JWT_EXPIRATION_TIME,
    refresh_expires: process.env.JWT_REFRESH_EXPIRATION_TIME,
  },
  cloude: {
    cloude_name: process.env.CLOUDE_NAME,
    cloude_api_key: process.env.CLOUDE_API_KEY,
    cloude_secret: process.env.CLOUDE_SECRET,
  },
  payment: {
    rezarpay_api_secret: process.env.RAZORPAY_APT_SECRET,
    rezarpay_api_key: process.env.RAZORPAY_API_KEY
  },
  domain: process.env.DOMAIN_NAME
};
