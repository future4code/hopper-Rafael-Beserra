type User = {
    id: number,
    nome: string,
    telefone: string,
    email: string,
    website: string,
    posts: Post[]
}

type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
}
// export const users:Array<User>
export const users:User[] =[
    {
      "id": 1,
      "nome": "Leanne Graham",
      "email": "Sincero@april.biz",
      "telefone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      posts: [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
      ],
    },
    {
      "id": 2,
      "nome": "Ervin Howell",
      "email": "Shanna@melissa.tv",
      "telefone": "010-692-6593 x09125",
      "website": "anastasia.net",
      posts: [
        {
          "userId": 2,
          "id": 11,
          "title": "et ea vero quia laudantium autem",
          "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
        },
        {
          "userId": 2,
          "id": 12,
          "title": "in quibusdam tempore odit est dolorem",
          "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
        },
        {
          "userId": 2,
          "id": 13,
          "title": "dolorum ut in voluptas mollitia et saepe quo animi",
          "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
        },
      ]
    },
    {
      "id": 3,
      "nome": "Clementine Bauch",
      "email": "Nathan@yesenia.net",
      "telefone": "1-463-123-4447",
      "website": "ramiro.info",
      posts: [
        {
          "userId": 3,
          "id": 21,
          "title": "asperiores ea ipsam voluptatibus modi minima quia sint",
          "body": "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
        },
        {
          "userId": 3,
          "id": 22,
          "title": "dolor sint quo a velit explicabo quia nam",
          "body": "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
        },
        {
          "userId": 3,
          "id": 23,
          "title": "maxime id vitae nihil numquam",
          "body": "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
        },
      ]
    }
]