//Consultas:

//   -> Exibir todas as músicas
	   db.Musica.find({});

//   -> Exibir a quantidade de músicas cadastradas
	   db.Musica.find({}).count();

//   -> Exibir músicas que possuam o gênero 'Pop'
       db.Musica.find({"gênero":"Pop"});
 
//   -> Exibir a soma do preço de todas as músicas cadastradas
       db.Musica.aggregate( [{ $group: { _id: null, preco_total: { $sum: "$preço" }}}] );
	
//   -> Exibir músicas que possuam como compositor "Roberto Carlos" ou "Chorão"
       db.Musica.find({"compositores":{$in: ["Roberto Carlos","Chorão"]}});

//   -> Exibir músicas que possuam preço maior que 4 reais
       db.Musica.find({"preço":{$gt:4}},{_id:0,duração:0,gênero:0,compositores:0});

//  -> Exibir músicas que possuam o gênero 'Rock' limitada a 3 documentos
       db.Musica.find({"gênero":"Rock"}).limit(3);

//   -> Exibir os álbuns que foram gravados por uma gravadora da cidade Rio de Janeiro
       db.Album.find({"gravadora.cidade": "Rio de Janeiro"},{_id:0, nome:0});

//   -> Exibir todas as músicas que possuam "Noite" no nome, exibindo o nome da música, nome do artista e o gênero
	   db.getCollection('Musica').find({nome: /Noite/}, {_id:0,duração:0,preço:0, compositores:0});

//    -> Exibir as características de todas as músicas de cada playlist 
       db.Playlist.aggregate([
        {
            $lookup:
            { 
           from: "Musica",
           localField: "musicas",
           foreignField: "_id",
           as : "Músicas do Album"
           } 
        }
       ]);

// Exibir todas as playlists que contenham uma determinada música
      db.Playlist.aggregate([
          {
              $lookup:
              { 
             from: "Musica",
             localField: "musicas",
             foreignField: "_id",
             as : "Músicas do Album"
             } 
          },
         {
             $match:
                 {musicas: ObjectId("5b60df73151c6612cad83cde")}
         },
      ]);

