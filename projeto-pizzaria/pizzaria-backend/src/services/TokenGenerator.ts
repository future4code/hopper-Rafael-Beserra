import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../business/model/user";

export class TokenGenerator {
  public generateToken = (id: string) => {
    const token = jwt.sign({ id}, process.env.JWT_KEY as string, {
      expiresIn: "2h",
    });
    return token;
  };

  public getTokenData = (token: string): AuthenticationData => {
    const payload = jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as jwt.JwtPayload;

    return {
      id: payload.id as string
    };
  };
}
