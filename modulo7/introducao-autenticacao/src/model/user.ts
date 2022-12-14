import { type } from "os"

export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
}

export interface UserInputDTO {
   name: string,
   nickname: string,
   email: string,
   password: string
}

export interface LoginInputDTO{
   email: string,
   password: string
}

export interface EditUserInputDTO {
   name: string,
   nickname: string,
   token: string
}

export interface EditUserInput {
   name: string,
   nickname: string,
   id: string
}

export type AuthenticationData = {
   id: string
}

export type FindIdDTO = {
   token: string
}

export interface UserInsert extends UserInputDTO {
   id: string
}