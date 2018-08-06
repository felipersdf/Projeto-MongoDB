//Inserts na Coleção Álbum
db.Album.insert(
    {
       nome: "Bocas Ordinárias" ,
       artista: "Charlie Brown Jr."  ,
       ano_de_lancamento: 2002,
       número_de_faixas: 12,
       gravadora: { 
		     nome: "EMI",
 	             cidade: "São Paulo"
                  },
       musicas: [   ObjectId("5b60df73151c6612cad83cdc"),
                    ObjectId("5b60df73151c6612cad83cdd"),
                    ObjectId("5b60df73151c6612cad83cde"),
                    ObjectId("5b60df73151c6612cad83cdf")
	        ]	   
    } 
);
    
db.Album.insert(
    {
       nome: "Pra Sempre" ,
       artista: "Roberto Carlos"  ,
       ano_de_lancamento: 2003,
       número_de_faixas: 10,
       gravadora: { 
		     nome: "Sony Records",
 	             cidade: "Rio de Janeiro"
                  },
       musicas: [   ObjectId("5b60df73151c6612cad83cdf"),
                    ObjectId("5b60e3fe151c6612cad83cec"),
                    ObjectId("5b60e3fe151c6612cad83ced"),
                    ObjectId("5b60e3fe151c6612cad83cee"),
                    ObjectId("5b60e3fe151c6612cad83cef")
	        ]	   
    } 
);

//Inserts na Coleção Música
db.Musica.insertMany(
	{
             nome: "Só Por Uma Noite",
             artista: "Charlie Brown Jr.",
	     duração: "3:23" ,
             preço: 2.99,
             gênero: ["Punk", "Rock"],
             compositores:["Chorão"]
	},
        {
             nome: "Não Fure os Olhos da Verdade",
             artista: "Charlie Brown Jr.",
	     duração: "4:13" ,
             preço: 2.99,
             gênero: ["Punk", "Rock"],
             compositores:["Chorão", "Tadeu"],
            },
        {
             nome: "Tarja Preta",
             artista: "Charlie Brown Jr.",
	     duração: "2:42" ,
             preço: 1.99,
             gênero: ["Punk", "Rock"],
             compositores:["Felipe"],
            },  
            {
             nome: "Com a Boca Amargando",
             artista: "Charlie Brown Jr.",
	     duração: "5:42",
             preço: 1.99,
             gênero: ["Punk", "Rock"],
             compositores:["Chorão", "Aaron"],
            }  
      
);

db.Musica.insertMany(
            [
            {
             nome: "Pra Sempre",
             artista: "Roberto Carlos",
	     duração: "6:21",
             preço: 2.99,
             gênero: ["MPB", "Rock"],
             compositores:["Roberto Carlos", "Erasmo Carlos"], 
             },
            {
             nome: "O Cadillac",
             artista: "Roberto Carlos",
	     duração: "4:53",
             preço: 2.99,
             gênero: ["MPB", "Rock", "Clássico"],
             compositores:["Erasmo Carlos"], 
             },
             {           
             nome: "Seres Humanos",
             artista: "Roberto Carlos",
	     duração: "5:45",
             preço: 2.99,
             gênero: ["MPB", "Rock"],
             compositores:["Roberto Carlos"], 
             }, 
             {
             nome: "Todo Mundo Me Pergunta",
             artista: "Roberto Carlos",
	     duração: "5:26",
             preço: 2.99,
             gênero: ["MPB","Rock"],
             compositores:["Roberto Carlos"], 
             },
             {  
             nome: "O Sol",
             artista: "Vitor Kley",
	     duração: "3:25",
             preço: 4.99,
             gênero: ["Pop", "Rock"],
             compositores:["Vitor Kley"], 
             },
             {  
             nome: "Bang",
             artista: "Anitta",
	     duração: "3:53",
             preço: 4.99,
             gênero: ["Funk","Pop"],
             compositores:["Larissa Machado", "Umberto Tavares", "Jeferson Junior"], 
             },
            {  
             nome: "Hard Times",
             artista: "Paramore",
	     duração: "3:52",
             preço: 4.99,
             gênero: ["Rock"],
             compositores:["Hailey"], 
             },
            {  
             nome: "I Told You So",
             artista: "Paramore",
	     duração: "2:34",
             preço: 4.99,
             gênero: ["Rock"],
             compositores:["Jack Wilson"], 
             },  
            ]);


db.Musica.insert({
             nome: "Noite de Terror",
             artista: "Roberto Carlos",
	     duração: "5:13" ,
             preço: 3.99,
             gênero: ["Pop"],
             compositores:["Erasmo"]
    });

//Inserts na Coleção Playlist

db.Playlist.insert({
    nome: "Brasil-sil-sil",
    usuario: "zezinho123",
    musicas: [ ObjectId("5b60df73151c6612cad83cde"),
               ObjectId("5b60e3fe151c6612cad83ced"),
               ObjectId("5b60df73151c6612cad83cdc"),
               ObjectId("5b60df73151c6612cad83cdd"),
               ObjectId("5b60e3fe151c6612cad83cf0"),
               ObjectId("5b60e3fe151c6612cad83cef")
             ]
}
);

db.Playlist.insert({
    nome: "Internacional",
    usuario: "felipersdf",
    musicas: [ ObjectId("5b60e3fe151c6612cad83cf2"),
               ObjectId("5b60e3fe151c6612cad83cf3")
             ]
    });