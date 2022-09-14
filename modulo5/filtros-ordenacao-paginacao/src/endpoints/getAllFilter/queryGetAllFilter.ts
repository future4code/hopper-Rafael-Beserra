import { connection } from "../../data/connection";

export default async function selectAllFilter(
    where: string,
  which: string,
  sort: string,
  order: string,
  size:number,
  page: number
): Promise<any> {
  const result = await connection("aula48_exercicio")
  .where(`${where}`, "like", `%${which}%`)
  .orderBy(sort, order)
  .limit(size)
  .offset(page);
  return result;
}