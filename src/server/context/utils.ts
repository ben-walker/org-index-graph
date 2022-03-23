import { Request } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../env";
import { TOKEN_BEARER_PREFIX } from "./constants";

export const decodeUserId = (req: Request) => {
  const accessToken = req.headers.authorization || "";
  const token = accessToken.replace(TOKEN_BEARER_PREFIX, "");

  try {
    const { sub } = verify(token, JWT_SECRET) as JwtPayload;

    return sub;
  } catch {
    return;
  }
};
