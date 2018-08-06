
// Atualizar o nome do compositor que possuir apenas "Erasmo" para "Erasmo Carlos"
db.Musica.update({compositores: "Erasmo"}, {$set:{compositores: "Erasmo Carlos"}});

// Atualizar o número de faixas do álbum "Pra Sempre" para 12
db.Album.update({nome:"Pra Sempre"}, {$set:{número_de_faixas:12}});

// Remover todas as músicas do artista "Anitta"
db.Musica.remove({artista: "Anitta"});
       


