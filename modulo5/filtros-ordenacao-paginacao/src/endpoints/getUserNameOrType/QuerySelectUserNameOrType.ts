import { connection } from "../../data/connection";

export default async function selectForName(
  name: string,
  sort: string,
  order: string
): Promise<any> {
  const result = await connection("aula48_exercicio")
    .where("name", "like", `%${name}%`)
    .orderBy(sort, order);
    return result;
}
