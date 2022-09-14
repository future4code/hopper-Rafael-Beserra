import { connection } from "../../data/connection";

export default async function selectForPage(
  name: string,
  sort: string,
  order: string,
  page: number
): Promise<any> {
  const result = await connection("aula48_exercicio")
  // .where("name", "like", `%${name}%`)
  // .orderBy(sort, order)
  .limit(5)
  .offset(page);
  return result;
}

// const result = await connection.raw(`
// select * from aula48_exercicio
// limit 10
// `)