select * from Actor;

select * from Movie;

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

select * from Rating;

<!-- 1)A) Chave estrangeira é um valor da tabela que deve ser inserido e para aceitar ser inserido
esse valor precisa existir na tabela informada como referencia. -->


<!-- 1)B) -->
insert into Rating(id, comment, rate, movie_id)
values("rating1", "filme bom", "10", "001"),
("rating2", "filme bom", "10", "004"),
("rating3", "filme bom", "10", "003"),
("rating4", "filme bom", "10", "002");

<!-- 1)C)
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`Hopper-4314167-rafael-beserra`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)) -->

insert into Rating(id, comment, rate, movie_id)
values("rating5", "filme bom", "10", "005");

<!-- 1)D) -->
alter table Movie
drop column rating;

<!-- 1)D) -->
alter table Movie
drop column rating;

<!-- 1)E)
	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`Hopper-4314167-rafael-beserra`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
	O erro ocorre por não ser possível deletar por restrição de foreign key(por estar sendo usado o dato em outra tabela). -->

delete from Movie where id = "001";