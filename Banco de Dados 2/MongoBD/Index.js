//Criação de index no artista da coleção música devido à grande procura de artistas que pode acontecer 
db.Musica.createIndex({artista:1});

//Criação de index no usuário da coleção playlist
db.Playlist.createIndex({usuario:1});