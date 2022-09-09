select * from Funfionário_List;

select id AS identifier, nome from Funfionário_List;

select id as identifier, nome, email from Funfionário_List
where id = "003";

select id as identifier, nome, email from Funfionário_List
where nome like "%a%";
 
 select id as identifier, nome, email from Funfionário_List
 where nome not like "%r%" and emal like "%u%";