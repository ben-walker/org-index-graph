import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../../env";
import { ACCESS_TOKEN_EXPIRY } from "./constants";

export const signAccessToken = (user: User) =>
  jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRY });
