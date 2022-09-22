import { connection } from "../../data/connection";

export default async function selectForType(
  type: string,
  sort: string,
  order: string
): Promise<any> {
  const result = await connection("aula48_exercicio")
    .where("type", "like", `%${type}%`)
    .orderBy(sort, order);
  return result;
}
