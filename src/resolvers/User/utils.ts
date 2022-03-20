import { User } from "@prisma/client";
import { sign } from "jsonwebtoken";

import { JWT_SECRET } from "../../env";
import { ACCESS_TOKEN_EXPIRY } from "./constants";

export const signAccessToken = ({ id }: User) =>
  sign({}, JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRY,
    subject: id,
  });
