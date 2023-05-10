import * as jwt from "jsonwebtoken";
import { AuthenticationData, UserRole } from "../business/model/user";

export class TokenGenerator {
  public generateToken = (id: string, role: UserRole) => {
    const token = jwt.sign({ id, role }, process.env.JWT_KEY as string, {
      expiresIn: "1h",
    });
    return token;
  };

  public getTokenData = (token: string): AuthenticationData => {
    const payload = jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as jwt.JwtPayload;

    return {
      id: payload.id as string,
      role: UserRole[payload.role as keyof typeof UserRole],
    };
  };
}
