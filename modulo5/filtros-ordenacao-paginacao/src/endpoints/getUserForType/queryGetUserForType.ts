import { connection } from "../../data/connection";

export default async function selectUsersForType(type: string): Promise<any> {
  const result = await connection.raw(`
    SELECT * FROM aula48_exercicio
    WHERE type = "${type}";
  `)
  return result[0];
}