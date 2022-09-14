import { connection } from "../../data/connection";

export default async function selectUsersForName(name: string): Promise<any> {
  const result = await connection.raw(`
    SELECT * FROM aula48_exercicio
    WHERE name = "${name}";
  `)
  return result[0];
}

// .raw(`
//     SELECT * FROM aula48_exercicio
//     WHERE name = "${name}";

// ("aula48_exercicio")
//   .where("name", "like", `${name}`)
