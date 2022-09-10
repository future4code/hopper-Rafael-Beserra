```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
```
select * from Movie;
```
```
select * from Actor;
```
```
select * from MovieCast;
```
###### 2)A)
	Essa tabela é criada com a relação dos filmes da tabela Movie e os atores da tabela Actor.

/*2)B)*/
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("001","001"),
("002","002"),
("003","003"),
("004","004"),
("004","001"),
("004","002")
;
```

/*2)C)
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`Hopper-4314167-rafael-beserra`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
	Não pode ser inserido pois não existe na relação
*/
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("005","001");
```

###### 2)D)
	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`Hopper-4314167-rafael-beserra`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
informa não poder por ter relação com outra tabela.

```
delete from Actor
where id = "002";
```