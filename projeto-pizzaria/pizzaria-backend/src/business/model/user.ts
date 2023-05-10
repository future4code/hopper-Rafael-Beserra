export enum UserRole {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: UserRole = UserRole.NORMAL
  ) {
    this.id = id
  }
  getId():string{
    return this.id
  }

  getEmail():string{
    return this.email
  }

  getPassword():string{
    return this.password
  }

  getName():string{
    return this.name
  }

  getRole():UserRole{
    return this.role
  }
}

export interface UserInputDTO {
  name: string;
  email: string;
  password: string;
  role: UserRole
}

export interface UserInsert extends UserInputDTO {
  id: string
}

export interface LoginInputDTO {
  email: string;
  password: string;
}

export interface EditUserInputDTO {
  name: string;
  email: string;
  id: string;
  token: string;
}

export interface EditUserInput {
  name: string;
  email: string;
  id: string;
}

export interface AuthenticationData {
  id: string;
  role: UserRole;
}

export interface TokenDTO {
  token: string
}

export type FindIdIdDTO = {
  id: string
}