```
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

###### 3)A)
	o operador ON indica os operadoes que devem ser iguais


###### 3)B)
```
select m.title , m.id, r.rate
from Movie as m
join Rating as r ON m.id = r.movie_id;
```