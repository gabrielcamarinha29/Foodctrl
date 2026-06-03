// ═══════════════════════════════════════════════
//  DADOS
// ═══════════════════════════════════════════════
let categories=[
  {id:'bowl-quente',nome:'Bowl Quente',icon:'🍲'},
  {id:'bowl-frio',nome:'Bowl Frio',icon:'🥗'},
  {id:'monte-bowl',nome:'Monte Seu Bowl',icon:'🧺'},
  {id:'sopa',nome:'Sopa',icon:'🍜'},
  {id:'infantil',nome:'Infantil',icon:'👶'},
  {id:'porcao',nome:'Porção / Base',icon:'🥄'},
];

// ═══════════════════════════════════════════════
// FICHAS IMPORTADAS DA PLANILHA
// ═══════════════════════════════════════════════
const fichasImportadas = [
  {id:100,nome:'Proteíco',categoria:'bowl-quente',rendimento:1,venda:32.9,vendaIfood:34.9,taxaIfood:15,status:'Ativo',ings:[{ingId:22,qtd:150},{ingId:4,qtd:250},{ingId:3,qtd:250},{ingId:41,qtd:30},{ingId:78,qtd:20},{ingId:61,qtd:50},{ingId:47,qtd:50},{ingId:33,qtd:160},{ingId:92,qtd:1},{ingId:82,qtd:1},{ingId:86,qtd:1}]},
  {id:101,nome:'Brasileiro',categoria:'bowl-quente',rendimento:1,venda:32.9,vendaIfood:34.9,taxaIfood:15,status:'Ativo',ings:[{ingId:22,qtd:150},{ingId:4,qtd:250},{ingId:3,qtd:250},{ingId:27,qtd:50},{ingId:45,qtd:0.25},{ingId:61,qtd:50},{ingId:47,qtd:50},{ingId:33,qtd:160},{ingId:92,qtd:1},{ingId:82,qtd:1},{ingId:86,qtd:1},{ingId:46,qtd:0.05}]},
  {id:102,nome:'Vegetariano',categoria:'bowl-quente',rendimento:1,venda:42.9,vendaIfood:42.9,taxaIfood:15,status:'Ativo',ings:[{ingId:37,qtd:160},{ingId:97,qtd:1},{ingId:1,qtd:100},{ingId:7,qtd:100},{ingId:30,qtd:100},{ingId:10,qtd:100},{ingId:82,qtd:1}]},
  {id:103,nome:'Campo',categoria:'bowl-quente',rendimento:1,venda:39.9,vendaIfood:44.9,taxaIfood:15,status:'Ativo',ings:[{ingId:33,qtd:160},{ingId:94,qtd:1},{ingId:11,qtd:100},{ingId:96,qtd:1},{ingId:47,qtd:100},{ingId:82,qtd:1}]},
  {id:104,nome:'Fava',categoria:'bowl-quente',rendimento:1,venda:45.9,vendaIfood:49.9,taxaIfood:15,status:'Ativo',ings:[{ingId:35,qtd:140},{ingId:99,qtd:1},{ingId:7,qtd:100},{ingId:25,qtd:100},{ingId:27,qtd:40},{ingId:46,qtd:1},{ingId:47,qtd:80},{ingId:82,qtd:1}]},
  {id:105,nome:'Fusion',categoria:'bowl-quente',rendimento:1,venda:44.9,vendaIfood:49.9,taxaIfood:15,status:'Ativo',ings:[{ingId:42,qtd:160},{ingId:98,qtd:1},{ingId:21,qtd:100},{ingId:27,qtd:100},{ingId:47,qtd:100},{ingId:82,qtd:1}]},
  {id:106,nome:'Capadocia',categoria:'bowl-quente',rendimento:1,venda:44.9,vendaIfood:49.9,taxaIfood:15,status:'Ativo',ings:[{ingId:42,qtd:160},{ingId:98,qtd:1},{ingId:21,qtd:100},{ingId:27,qtd:100},{ingId:47,qtd:100},{ingId:82,qtd:1}]},
  {id:107,nome:'Caipira',categoria:'bowl-quente',rendimento:1,venda:38.9,vendaIfood:38.9,taxaIfood:15,status:'Ativo',ings:[{ingId:33,qtd:150},{ingId:30,qtd:100},{ingId:20,qtd:1},{ingId:13,qtd:100},{ingId:25,qtd:200},{ingId:45,qtd:0.2},{ingId:82,qtd:1}]},
  {id:108,nome:'Marroquino',categoria:'bowl-frio',rendimento:1,venda:46.9,vendaIfood:52.9,taxaIfood:15,status:'Ativo',ings:[{ingId:36,qtd:140},{ingId:93,qtd:1},{ingId:10,qtd:330},{ingId:64,qtd:200},{ingId:70,qtd:8},{ingId:82,qtd:1},{ingId:47,qtd:50}]},
  {id:109,nome:'Oriental Quente',categoria:'bowl-quente',rendimento:1,venda:47.9,vendaIfood:75.9,taxaIfood:15,status:'Ativo',ings:[{ingId:95,qtd:1},{ingId:35,qtd:140},{ingId:21,qtd:30},{ingId:10,qtd:200},{ingId:74,qtd:15},{ingId:82,qtd:1},{ingId:47,qtd:50},{ingId:58,qtd:16},{ingId:61,qtd:5}]},
  {id:110,nome:'Macarrão com Shitake',categoria:'bowl-quente',rendimento:1,venda:47.9,vendaIfood:52.9,taxaIfood:15,status:'Ativo',ings:[{ingId:100,qtd:1},{ingId:35,qtd:140},{ingId:60,qtd:100},{ingId:61,qtd:130},{ingId:47,qtd:30},{ingId:82,qtd:1}]},
  {id:111,nome:'Cuzcuz Marroquino',categoria:'porcao',rendimento:30,venda:12.9,vendaIfood:12.9,taxaIfood:15,status:'Ativo',ings:[{ingId:43,qtd:2000},{ingId:1,qtd:600},{ingId:12,qtd:600},{ingId:21,qtd:550},{ingId:71,qtd:175},{ingId:90,qtd:30},{ingId:47,qtd:100}]},
  {id:112,nome:'Creme de Milho',categoria:'porcao',rendimento:13,venda:8.9,vendaIfood:8.9,taxaIfood:15,status:'Ativo',ings:[{ingId:45,qtd:8},{ingId:80,qtd:1300},{ingId:11,qtd:200},{ingId:29,qtd:80},{ingId:47,qtd:100}]},
  {id:113,nome:'Gohan',categoria:'porcao',rendimento:20,venda:5.9,vendaIfood:5.9,taxaIfood:15,status:'Ativo',ings:[{ingId:56,qtd:2000},{ingId:57,qtd:100},{ingId:47,qtd:50},{ingId:61,qtd:20}]},
  {id:114,nome:'Arroz de Brócolis',categoria:'porcao',rendimento:20,venda:5.9,vendaIfood:5.9,taxaIfood:15,status:'Ativo',ings:[{ingId:48,qtd:2000},{ingId:10,qtd:500},{ingId:29,qtd:50},{ingId:47,qtd:100},{ingId:61,qtd:20}]},
  {id:115,nome:'Quinoa',categoria:'porcao',rendimento:15,venda:8.9,vendaIfood:8.9,taxaIfood:15,status:'Ativo',ings:[{ingId:69,qtd:1000},{ingId:67,qtd:500},{ingId:68,qtd:500},{ingId:47,qtd:50},{ingId:61,qtd:20}]},
  {id:116,nome:'Arroz de Açafrão',categoria:'porcao',rendimento:20,venda:5.9,vendaIfood:5.9,taxaIfood:15,status:'Ativo',ings:[{ingId:48,qtd:2000},{ingId:65,qtd:20},{ingId:29,qtd:50},{ingId:47,qtd:50},{ingId:61,qtd:20}]},
  {id:117,nome:'Arroz 7 Grãos',categoria:'porcao',rendimento:20,venda:6.9,vendaIfood:6.9,taxaIfood:15,status:'Ativo',ings:[{ingId:63,qtd:1000},{ingId:48,qtd:1000},{ingId:69,qtd:200},{ingId:64,qtd:200},{ingId:47,qtd:50},{ingId:61,qtd:20}]},
  {id:118,nome:'Creme de Shitake',categoria:'porcao',rendimento:10,venda:9.9,vendaIfood:9.9,taxaIfood:15,status:'Ativo',ings:[{ingId:37,qtd:1000},{ingId:80,qtd:500},{ingId:79,qtd:100},{ingId:29,qtd:50},{ingId:52,qtd:5},{ingId:61,qtd:20}]},
];


let DB=[
  {id:1,nome:'Abobrinha',categoria:'Hortfruit',un:'Kg',preco:3.99,fc:1.05,qtd:0,min:0,max:0,custoMedio:0},
  {id:2,nome:'Alface Americana',categoria:'Hortfruit',un:'Und',preco:2.99,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:3,nome:'Alface Crespa',categoria:'Hortfruit',un:'Und',preco:1.99,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:4,nome:'Alface Roxa',categoria:'Hortfruit',un:'Und',preco:2.49,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:5,nome:'Abacate',categoria:'Hortfruit',un:'Kg',preco:4.99,fc:1.6,qtd:0,min:0,max:0,custoMedio:0},
  {id:6,nome:'Batata Calabresa',categoria:'Hortfruit',un:'Kg',preco:3.99,fc:1.1,qtd:0,min:0,max:0,custoMedio:0},
  {id:7,nome:'Batata Doce',categoria:'Hortfruit',un:'Kg',preco:3.99,fc:1.2,qtd:0,min:0,max:0,custoMedio:0},
  {id:8,nome:'Batata Lavada',categoria:'Hortfruit',un:'Kg',preco:5.99,fc:1.1,qtd:0,min:0,max:0,custoMedio:0},
  {id:9,nome:'Berinjela',categoria:'Hortfruit',un:'Kg',preco:4.99,fc:1.1,qtd:0,min:0,max:0,custoMedio:0},
  {id:10,nome:'Brócolis',categoria:'Hortfruit',un:'Und',preco:3.99,fc:1.8,qtd:0,min:0,max:0,custoMedio:0},
  {id:11,nome:'Cebola',categoria:'Hortfruit',un:'Kg',preco:5.99,fc:1.1,qtd:0,min:0,max:0,custoMedio:0},
  {id:12,nome:'Cenoura',categoria:'Hortfruit',un:'Kg',preco:3.99,fc:1.1,qtd:0,min:0,max:0,custoMedio:0},
  {id:13,nome:'Couve',categoria:'Hortfruit',un:'Kg',preco:1.99,fc:1.8,qtd:0,min:0,max:0,custoMedio:0},
  {id:14,nome:'Hortelã',categoria:'Hortfruit',un:'Und',preco:1.99,fc:1.3,qtd:0,min:0,max:0,custoMedio:0},
  {id:15,nome:'Laranja',categoria:'Hortfruit',un:'Kg',preco:5.99,fc:2,qtd:0,min:0,max:0,custoMedio:0},
  {id:16,nome:'Limão',categoria:'Hortfruit',un:'Kg',preco:6.99,fc:2,qtd:0,min:0,max:0,custoMedio:0},
  {id:17,nome:'Espinafre',categoria:'Hortfruit',un:'Und',preco:2.99,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:18,nome:'Maçã Verde',categoria:'Hortfruit',un:'Kg',preco:15.99,fc:1.1,qtd:0,min:0,max:0,custoMedio:0},
  {id:19,nome:'Manjericão',categoria:'Hortfruit',un:'Und',preco:1.99,fc:1.3,qtd:0,min:0,max:0,custoMedio:0},
  {id:20,nome:'Ovo',categoria:'Hortfruit',un:'Und',preco:1.0,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:21,nome:'Pimentão Colorido',categoria:'Hortfruit',un:'Kg',preco:19.99,fc:1.15,qtd:0,min:0,max:0,custoMedio:0},
  {id:22,nome:'Rúcula',categoria:'Hortfruit',un:'Und',preco:1.99,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:23,nome:'Salsa Grande',categoria:'Hortfruit',un:'Und',preco:3.99,fc:1.4,qtd:0,min:0,max:0,custoMedio:0},
  {id:24,nome:'Tomate Salada',categoria:'Hortfruit',un:'Kg',preco:3.99,fc:1.05,qtd:0,min:0,max:0,custoMedio:0},
  {id:25,nome:'Tomate Cereja',categoria:'Hortfruit',un:'bdj',preco:3.99,fc:1.03,qtd:0,min:0,max:0,custoMedio:0},
  {id:26,nome:'Tomilho',categoria:'Hortfruit',un:'Und',preco:1.99,fc:1.2,qtd:0,min:0,max:0,custoMedio:0},
  {id:27,nome:'Ervilha Congelada',categoria:'Hortfruit',un:'Kg',preco:17.5,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:28,nome:'Manga',categoria:'Hortfruit',un:'Kg',preco:4.99,fc:1.7,qtd:0,min:0,max:0,custoMedio:0},
  {id:29,nome:'Alho Congelado',categoria:'Hortfruit',un:'Kg',preco:19.98,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:30,nome:'Abóbora Bahiana',categoria:'Hortfruit',un:'Kg',preco:3.99,fc:1.37,qtd:0,min:0,max:0,custoMedio:0},
  {id:31,nome:'Patinho',categoria:'Proteína',un:'kg',preco:34.9,fc:1.1,qtd:0,min:0,max:0,custoMedio:0},
  {id:32,nome:'Sobrecoxa',categoria:'Proteína',un:'kg',preco:8.98,fc:1.35,qtd:0,min:0,max:0,custoMedio:0},
  {id:33,nome:'Peito de Frango',categoria:'Proteína',un:'kg',preco:16.2,fc:1.1,qtd:0,min:0,max:0,custoMedio:0},
  {id:34,nome:'Mignon Suíno',categoria:'Proteína',un:'kg',preco:20.8,fc:1.01,qtd:0,min:0,max:0,custoMedio:0},
  {id:35,nome:'Mignon Bovino',categoria:'Proteína',un:'kg',preco:54.0,fc:1.15,qtd:0,min:0,max:0,custoMedio:0},
  {id:36,nome:'Salmão',categoria:'Proteína',un:'kg',preco:70.0,fc:1.4,qtd:0,min:0,max:0,custoMedio:0},
  {id:37,nome:'Shitake',categoria:'Proteína',un:'kg',preco:60.0,fc:1.5,qtd:0,min:0,max:0,custoMedio:0},
  {id:38,nome:'Shitake Inteiro',categoria:'Proteína',un:'kg',preco:60.0,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:39,nome:'Atum',categoria:'Proteína',un:'kg',preco:36.9,fc:1.35,qtd:0,min:0,max:0,custoMedio:0},
  {id:40,nome:'Tilápia',categoria:'Proteína',un:'kg',preco:38.1,fc:1.3,qtd:0,min:0,max:0,custoMedio:0},
  {id:41,nome:'Bacon',categoria:'Proteína',un:'kg',preco:22.98,fc:1.2,qtd:0,min:0,max:0,custoMedio:0},
  {id:42,nome:'Camarão',categoria:'Proteína',un:'Kg',preco:79.9,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:43,nome:'Couscous Marroquino',categoria:'Secos',un:'Kg',preco:16.5,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:44,nome:'Farinha de Trigo',categoria:'Secos',un:'Kg',preco:4.99,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:45,nome:'Milho Verde',categoria:'Secos',un:'Sachê',preco:2.6,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:46,nome:'Palmito Pupunha',categoria:'Secos',un:'Rodela',preco:1.0,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:47,nome:'Óleo de Soja',categoria:'Secos',un:'Litro',preco:7.8,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:48,nome:'Arroz Branco',categoria:'Secos',un:'kg',preco:6.5,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:49,nome:'Feijão',categoria:'Secos',un:'kg',preco:7.89,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:50,nome:'Açúcar',categoria:'Secos',un:'kg',preco:4.8,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:51,nome:'Vinho Branco',categoria:'Secos',un:'Litro',preco:17.78,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:52,nome:'Noz Moscada',categoria:'Secos',un:'Kg',preco:65.0,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:53,nome:'Louro',categoria:'Secos',un:'folha',preco:0.3,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:54,nome:'Cravo',categoria:'Secos',un:'Kg',preco:31.8,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:55,nome:'Lentilha',categoria:'Secos',un:'Kg',preco:15.9,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:56,nome:'Arroz Japonês',categoria:'Secos',un:'Kg',preco:12.0,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:57,nome:'Vinagre de Arroz',categoria:'Secos',un:'Litro',preco:9.0,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:58,nome:'Shoyo',categoria:'Secos',un:'Litro',preco:8.8,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:59,nome:'Molho Teriaky',categoria:'Secos',un:'Litro',preco:12.8,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:60,nome:'Macarrão',categoria:'Secos',un:'kg',preco:11.3,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:61,nome:'Sal',categoria:'Secos',un:'kg',preco:2.99,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:62,nome:'Pão de Forma',categoria:'Secos',un:'Pacote',preco:7.99,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:63,nome:'Arroz Integral',categoria:'Grãos',un:'kg',preco:7.79,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:64,nome:'Grão de Bico',categoria:'Grãos',un:'Kg',preco:13.98,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:65,nome:'Açafrão',categoria:'Grãos',un:'Kg',preco:22.9,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:66,nome:'Semente de Abóbora s/ Casca',categoria:'Grãos',un:'kg',preco:44.9,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:67,nome:'Quinoa Preta',categoria:'Grãos',un:'kg',preco:38.9,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:68,nome:'Quinoa Vermelha',categoria:'Grãos',un:'kg',preco:35.9,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:69,nome:'Quinoa Branca',categoria:'Grãos',un:'kg',preco:35.9,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:70,nome:'Amêndoa Laminada',categoria:'Grãos',un:'kg',preco:81.9,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:71,nome:'Tâmara Sem Caroço',categoria:'Grãos',un:'kg',preco:25.9,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:72,nome:'Gergelim Preto s/ Casca',categoria:'Grãos',un:'kg',preco:31.9,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:73,nome:'Gergelim Branco s/ Casca',categoria:'Grãos',un:'kg',preco:34.9,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:74,nome:'Amendoim',categoria:'Grãos',un:'kg',preco:24.0,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:75,nome:'Semente de Linhaça Dourada',categoria:'Grãos',un:'kg',preco:18.9,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:76,nome:'Semente de Girassol s/ Casca',categoria:'Grãos',un:'kg',preco:20.9,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:77,nome:'Gorgonzola',categoria:'Laticineos',un:'Kg',preco:54.0,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:78,nome:'Parmesão',categoria:'Laticineos',un:'Kg',preco:51.9,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:79,nome:'Manteiga',categoria:'Laticineos',un:'Kg',preco:49.0,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:80,nome:'Leite',categoria:'Laticineos',un:'Litro',preco:5.0,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:81,nome:'Iogurte Splat Integral',categoria:'Laticineos',un:'kg',preco:8.25,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:82,nome:'Bowl 750ml com Tampa',categoria:'Descartáveis',un:'Und',preco:2.0,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:83,nome:'Bowl 500ml com Tampa',categoria:'Descartáveis',un:'Und',preco:1.26,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:84,nome:'Bowl 300ml com Tampa',categoria:'Descartáveis',un:'Und',preco:1.03,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:85,nome:'Caixa 600ml',categoria:'Descartáveis',un:'Und',preco:1.12,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:86,nome:'Caixa 300ml',categoria:'Descartáveis',un:'Und',preco:0.77,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:87,nome:'Pote Molho 60ml com Tampa',categoria:'Descartáveis',un:'Und',preco:0.23,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:88,nome:'Pote Molho 30ml com Tampa',categoria:'Descartáveis',un:'Und',preco:0.17,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:89,nome:'Sacola Kraft 28cm',categoria:'Descartáveis',un:'Und',preco:0.47,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:90,nome:'Bobina Plástica',categoria:'Descartáveis',un:'Und',preco:0.03,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:91,nome:'Sacola Kraft 33cm',categoria:'Descartáveis',un:'Und',preco:0.2,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:92,nome:'Molho Mostarda com Mel',categoria:'Porções',un:'Und',preco:0.65,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:93,nome:'Porção Couscous',categoria:'Porções',un:'Porção',preco:1.86,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:94,nome:'Creme de Milho',categoria:'Porções',un:'Porção',preco:2.38,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:95,nome:'Gohan',categoria:'Porções',un:'Porção',preco:0.73,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:96,nome:'Arroz de Brócolis',categoria:'Porções',un:'Porção',preco:0.67,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:97,nome:'Quinoa',categoria:'Porções',un:'Porção',preco:2.88,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:98,nome:'Arroz de Açafrão',categoria:'Porções',un:'Porção',preco:0.52,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:99,nome:'Arroz 7 Grãos',categoria:'Porções',un:'Porção',preco:1.1,fc:1,qtd:0,min:0,max:0,custoMedio:0},
  {id:100,nome:'Creme de Shitake',categoria:'Porções',un:'Porção',preco:8.71,fc:1,qtd:0,min:0,max:0,custoMedio:0}
];
let nextIngId=101;

let fichas=[
  {id:1,nome:'Bowl Frango Grelhado',categoria:'bowl-quente',rendimento:1,venda:32.90,vendaIfood:36.90,taxaIfood:12,status:'Ativo',ings:[{ingId:33,qtd:150},{ingId:48,qtd:100},{ingId:10,qtd:50},{ingId:12,qtd:40},{ingId:11,qtd:20}]},
  {id:2,nome:'Bowl Salmão Oriental',categoria:'bowl-frio',rendimento:1,venda:48.90,vendaIfood:54.90,taxaIfood:12,status:'Ativo',ings:[{ingId:36,qtd:120},{ingId:56,qtd:100},{ingId:58,qtd:15},{ingId:59,qtd:15},{ingId:72,qtd:5}]},
  {id:3,nome:'Sopa de Lentilha',categoria:'sopa',rendimento:2,venda:22.90,vendaIfood:26.90,taxaIfood:12,status:'Ativo',ings:[{ingId:55,qtd:200},{ingId:11,qtd:60},{ingId:12,qtd:60},{ingId:47,qtd:20},{ingId:65,qtd:3}]},
  {id:4,nome:'Bowl Infantil Frango',categoria:'infantil',rendimento:1,venda:24.90,vendaIfood:28.90,taxaIfood:12,status:'Ativo',ings:[{ingId:33,qtd:100},{ingId:48,qtd:80},{ingId:12,qtd:30}]},
  {id:5,nome:'Bowl Monte Seu',categoria:'monte-bowl',rendimento:1,venda:38.90,vendaIfood:43.90,taxaIfood:12,status:'Ativo',ings:[{ingId:63,qtd:100},{ingId:69,qtd:50},{ingId:24,qtd:60},{ingId:2,qtd:30},{ingId:72,qtd:5}]},
  ...fichasImportadas,
];
let nextFichaId=200;

// estoqueData é um alias — o estoque agora vive no próprio DB
// Mantido para compatibilidade com funções existentes
const estoqueData = {
  get length(){ return DB.length; },
  filter(fn){ return DB.filter(fn); },
  find(fn){ return DB.find(fn); },
  reduce(fn,init){ return DB.reduce(fn,init); },
  push(){ console.warn('Use DB.push diretamente'); },
  [Symbol.iterator](){ return DB[Symbol.iterator](); },
};
let historicoData=[];
let nextHistId=8;
let estFilter='todos';
// ═══════════════════════════════════════════════
//  PERSISTÊNCIA — localStorage
// ═══════════════════════════════════════════════
const LS_KEYS = {
  db:          'fc_db',
  fichas:      'fc_fichas',
  categories:  'fc_categories',
  compras:     'fc_compras',
  historico:   'fc_historico',
  nextIngId:   'fc_nextIngId',
  nextFichaId: 'fc_nextFichaId',
  nextHistId:  'fc_nextHistId',
};

// Debounce para evitar salvar excessivamente em campos numéricos
let _saveTimer=null;
function saveAllDebounced(delay=800){
  clearTimeout(_saveTimer);
  _saveTimer=setTimeout(saveAll,delay);
}

// Salva todos os dados no localStorage
function saveAll(){
  try {
    localStorage.setItem(LS_KEYS.db,          JSON.stringify(DB));
    localStorage.setItem(LS_KEYS.fichas,      JSON.stringify(fichas));
    localStorage.setItem(LS_KEYS.categories,  JSON.stringify(categories));
    localStorage.setItem(LS_KEYS.compras,     JSON.stringify(comprasData));
    localStorage.setItem(LS_KEYS.historico,   JSON.stringify(historicoData));
    localStorage.setItem(LS_KEYS.nextIngId,   nextIngId);
    localStorage.setItem(LS_KEYS.nextFichaId, nextFichaId);
    localStorage.setItem(LS_KEYS.nextHistId,  nextHistId);
    // Feedback visual no indicador de save
    const lbl=document.getElementById('save-label');
    const ico=document.getElementById('save-indicator');
    if(lbl&&ico){
      lbl.textContent='Salvando...';
      ico.style.borderColor='rgba(249,115,22,.4)';
      ico.children[0].style.color='var(--accent)';
      clearTimeout(ico._t);
      ico._t=setTimeout(()=>{
        lbl.textContent='Salvo';
        ico.style.borderColor='var(--border)';
        ico.children[0].style.color='var(--green)';
        ico.children[0].className='ti ti-cloud-check';
      },600);
    }
  } catch(e) {
    console.warn('localStorage cheio ou indisponível:', e);
    const lbl=document.getElementById('save-label');
    if(lbl) lbl.textContent='Erro ao salvar';
  }
}

// Carrega dados do localStorage — sobrescreve as variáveis iniciais se existirem dados salvos
function loadAll(){
  try {
    const db2  = localStorage.getItem(LS_KEYS.db);
    const fic2 = localStorage.getItem(LS_KEYS.fichas);
    const cat2 = localStorage.getItem(LS_KEYS.categories);
    const com2 = localStorage.getItem(LS_KEYS.compras);
    const his2 = localStorage.getItem(LS_KEYS.historico);

    if(db2)  { DB.length=0; JSON.parse(db2).forEach(x=>DB.push(x)); }
    if(fic2) { fichas.length=0; JSON.parse(fic2).forEach(x=>fichas.push(x)); }
    if(cat2) { categories.length=0; JSON.parse(cat2).forEach(x=>categories.push(x)); }
    if(com2) { comprasData.length=0; JSON.parse(com2).forEach(x=>comprasData.push(x)); }
    if(his2) { historicoData.length=0; JSON.parse(his2).forEach(x=>historicoData.push(x)); }

    if(localStorage.getItem(LS_KEYS.nextIngId))   nextIngId   = +localStorage.getItem(LS_KEYS.nextIngId);
    if(localStorage.getItem(LS_KEYS.nextFichaId)) nextFichaId = +localStorage.getItem(LS_KEYS.nextFichaId);
    if(localStorage.getItem(LS_KEYS.nextHistId))  nextHistId  = +localStorage.getItem(LS_KEYS.nextHistId);

    return !!(db2||fic2); // retorna true se havia dados salvos
  } catch(e) {
    console.warn('Erro ao carregar localStorage:', e);
    return false;
  }
}

// Apaga todos os dados salvos e reinicia com os padrões
function resetStorage(){
  if(!confirm('Apagar TODOS os dados salvos e reiniciar do zero?\n\nEsta ação não pode ser desfeita.')) return;
  Object.values(LS_KEYS).forEach(k=>localStorage.removeItem(k));
  showToast('Dados apagados. Recarregando...','ok');
  setTimeout(()=>location.reload(), 1200);
}


let entradaIngId=null;

// ═══════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════
const fmt=v=>'R$ '+parseFloat(v).toFixed(2).replace('.',',');
const fcClass=fc=>fc===1?'fc-1':fc<1.15?'fc-low':fc<1.35?'fc-mid':'fc-high';
function getCat(id){return categories.find(c=>c.id===id)||{nome:'—',icon:'📋'}}
const CAT_BADGE={'bowl-quente':'badge-danger','bowl-frio':'badge-blue','monte-bowl':'badge-teal','sopa':'badge-warn','infantil':'badge-pink'};
function catBadge(id){return CAT_BADGE[id]||'badge-purple'}

// Resolve custo de um item (ingrediente ou subficha)
function resolveItemCusto(fi){
  if(fi.subFichaId){
    const sub=fichas.find(f=>f.id===fi.subFichaId);
    if(!sub)return{custo:0,nome:'?',un:'Porção',fc:1,isSub:true};
    const sc=calcFicha(sub);
    return{custo:sc.liq*fi.qtd,custoUnit:sc.liq,nome:sub.nome,un:'Porção',fc:1,isSub:true};
  }
  const ing=DB.find(d=>d.id===fi.ingId);
  if(!ing)return{custo:0,nome:'?',un:'—',fc:1,isSub:false};
  const unKg=ing.un.toLowerCase()==='kg'||ing.un.toLowerCase()==='litro';
  const cu=ing.preco/(unKg?1000:1);
  return{custo:fi.qtd*ing.fc*cu,custoUnit:cu,nome:ing.nome,un:ing.un,fc:ing.fc,cat:ing.categoria,isSub:false};
}
function calcFicha(f){
  let bruto=0,liq=0;
  (f.ings||[]).forEach(fi=>{
    if(fi.subFichaId){
      const sub=fichas.find(s=>s.id===fi.subFichaId);
      if(!sub)return;
      const sc=calcFicha(sub);
      bruto+=sc.liq*fi.qtd; liq+=sc.liq*fi.qtd;
      return;
    }
    const ing=DB.find(d=>d.id===fi.ingId);if(!ing)return;
    const unKg=ing.un.toLowerCase()==='kg'||ing.un.toLowerCase()==='litro';
    const cu=ing.preco/(unKg?1000:1);
    bruto+=fi.qtd*ing.fc*cu;liq+=fi.qtd*cu;
  });
  const custoTotal=liq;                                   // custo total da receita (sem FC)
  const custoTotalFC=bruto;                               // custo total com FC
  const custoLiq=liq/f.rendimento;                        // custo por porção
  const custoPorcaoFC=bruto/f.rendimento;                 // custo por porção com FC
  const marg=f.venda>0?((f.venda-custoPorcaoFC)/f.venda*100):0;
  const cmv=f.venda>0?(custoPorcaoFC/f.venda*100):0;
  const taxa=f.taxaIfood||0;
  const vi=f.vendaIfood||0;
  const liquidoIfood=vi*(1-taxa/100);
  const margIfood=vi>0?((liquidoIfood-custoPorcaoFC)/liquidoIfood*100):0;
  const cmvIfood=vi>0?(custoPorcaoFC/vi*100):0;
  return{
    bruto:custoPorcaoFC, liq:custoPorcaoFC,
    custoTotal:custoTotalFC, custoTotalSemFC:custoTotal,
    marg, cmv, liquidoIfood, margIfood, cmvIfood, vendaIfood:vi
  };
}

function usedIn(ingId){return fichas.filter(f=>f.ings.some(i=>i.ingId===ingId)).length}

function overlayClose(e,id){if(e.target.id===id)closeModal(id)}
function closeModal(id){document.getElementById(id).style.display='none'}

// ═══════════════════════════════════════════════
//  NAVEGAÇÃO
// ═══════════════════════════════════════════════
const SCREEN_CONFIG={
  dashboard:{title:'Dashboard',primary:null,secondary:null},
  ingredientes:{title:'Base de Ingredientes',primary:{label:'Novo ingrediente',fn:'openIngModal()'},secondary:{label:'Exportar',icon:'ti-download'}},
  fichas:{title:'Fichas Técnicas',primary:{label:'Nova ficha',fn:'openFichaModal()'},secondary:{label:'Exportar',icon:'ti-download'}},
  estoque:{title:'Controle de Estoque',primary:{label:'Registrar entrada',fn:'openEntradaGeneral()'},secondary:{label:'Exportar',icon:'ti-download'}},
  compras:{title:'Lista de Compras',primary:{label:'Gerar lista automática',fn:'gerarListaCompras()'},secondary:{label:'Exportar PDF',icon:'ti-file-download'}},
};

function showScreen(name){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  const sc=document.getElementById('screen-'+name);
  if(sc) sc.classList.add('active');
  const nav=document.getElementById('nav-'+name);
  if(nav) nav.classList.add('active');
  const cfg=SCREEN_CONFIG[name]||{title:name};
  document.getElementById('page-title').textContent=cfg.title;
  const tp=document.getElementById('topbar-primary');
  const ts=document.getElementById('topbar-secondary');
  if(cfg.primary){
    tp.style.display='flex';
    tp.innerHTML=`<i class="ti ti-plus"></i> ${cfg.primary.label}`;
    tp.onclick=new Function(cfg.primary.fn);
  } else {tp.style.display='none';}
  if(cfg.secondary){
    ts.style.display='flex';
    ts.innerHTML=`${cfg.secondary.icon?`<i class="ti ${cfg.secondary.icon}"></i>`:''}${cfg.secondary.label}`;
  } else {ts.style.display='none';}

  if(name==='dashboard') renderDashboard();
  if(name==='ingredientes'){renderIngStats();renderIngCatTabs();applyIngFilter();}
  if(name==='fichas'){renderFichaStats();renderFichaCatTabs();renderFichas();}
  if(name==='estoque'){renderEstoqueStats();renderEstoque();}
  if(name==='compras') renderCompras();
}

// ═══════════════════════════════════════════════
//  DASHBOARD
// ═══════════════════════════════════════════════
function renderDashboard(){
  document.getElementById('d-fichas').textContent=fichas.length;
  document.getElementById('d-ings').textContent=DB.length;
  const ms=fichas.map(f=>calcFicha(f).marg).filter(m=>m>0);
  document.getElementById('d-margem').textContent=ms.length?Math.max(...ms).toFixed(1)+'%':'—';
  const criticos=DB.filter(e=>(e.qtd||0)<(e.min||0)&&e.min>0).length;
  const nb=document.getElementById('nav-badge-estoque');
  if(nb) nb.textContent=criticos>0?criticos:'';

  // categorias
  const counts={};fichas.forEach(f=>{counts[f.categoria]=(counts[f.categoria]||0)+1});
  document.getElementById('d-cat-list').innerHTML=categories.map(c=>{
    const n=counts[c.id]||0;
    const pct=fichas.length?Math.round(n/fichas.length*100):0;
    return`<div class="prog-item">
      <div class="prog-label"><span>${c.icon} ${c.nome}</span><span style="color:var(--text2)">${n} ficha${n!==1?'s':''}</span></div>
      <div class="prog-bar"><div class="prog-fill" style="width:${pct}%;background:var(--accent)"></div></div>
    </div>`;
  }).join('');

  // top FC
  const topFC=[...DB].filter(d=>d.fc>1).sort((a,b)=>b.fc-a.fc).slice(0,6);
  document.getElementById('d-fc-list').innerHTML=topFC.map(ing=>{
    const perda=Math.round((ing.fc-1)*100);
    return`<div class="prog-item">
      <div class="prog-label">
        <span>${ing.nome}</span>
        <span style="color:${ing.fc<1.3?'var(--yellow)':'var(--red)'}">${ing.fc.toFixed(2)} (${perda}% perda)</span>
      </div>
      <div class="prog-bar"><div class="prog-fill" style="width:${Math.min(perda*2,100)}%;background:${ing.fc<1.3?'var(--yellow)':'var(--red)'}"></div></div>
    </div>`;
  }).join('');

  // ranking fichas
  const ranked=[...fichas].map(f=>({...f,calc:calcFicha(f)})).sort((a,b)=>b.calc.marg-a.calc.marg);
  document.getElementById('d-fichas-list').innerHTML=`<table style="width:100%;border-collapse:collapse">
    <thead><tr>
      <th style="font-size:10px;color:var(--text3);text-transform:uppercase;padding:0 0 8px;text-align:left">#</th>
      <th style="font-size:10px;color:var(--text3);text-transform:uppercase;padding:0 0 8px;text-align:left">Ficha</th>
      <th style="font-size:10px;color:var(--text3);text-transform:uppercase;padding:0 0 8px;text-align:left">Categoria</th>
      <th style="font-size:10px;color:var(--text3);text-transform:uppercase;padding:0 0 8px;text-align:right">Custo c/ FC</th>
      <th style="font-size:10px;color:var(--text3);text-transform:uppercase;padding:0 0 8px;text-align:right">Venda direta</th>
      <th style="font-size:10px;color:var(--text3);text-transform:uppercase;padding:0 0 8px;text-align:right">CMV%</th>
      <th style="font-size:10px;color:var(--text3);text-transform:uppercase;padding:0 0 8px;text-align:right">Margem%</th>
    </tr></thead>
    <tbody>${ranked.map((f,i)=>{
      const cat=getCat(f.categoria);
      const mc=f.calc.marg>=65?'var(--green)':f.calc.marg>=50?'var(--yellow)':'var(--red)';
      return`<tr style="border-top:1px solid rgba(42,49,72,.4)">
        <td style="padding:9px 0;color:var(--text3);font-size:13px">${i+1}</td>
        <td style="padding:9px 8px;font-weight:500;font-size:13px">${f.nome}</td>
        <td style="padding:9px 8px"><span class="badge ${catBadge(f.categoria)}">${cat.icon} ${cat.nome}</span></td>
        <td style="padding:9px 8px;text-align:right;color:var(--accent);font-weight:600">${fmt(f.calc.liq)}</td>
        <td style="padding:9px 8px;text-align:right;color:var(--green);font-weight:600">${fmt(f.venda)}</td>
        <td style="padding:9px 8px;text-align:right;font-weight:700;color:${f.calc.cmv<=30?'var(--green)':f.calc.cmv<=40?'var(--yellow)':'var(--red)'}">${f.venda>0?f.calc.cmv.toFixed(1)+'%':'—'}</td>
        <td style="padding:9px 8px;text-align:right;font-weight:700;color:${mc}">${f.calc.marg.toFixed(1)}%</td>
      </tr>`;
    }).join('')}</tbody>
  </table>`;
}

// ═══════════════════════════════════════════════
//  INGREDIENTES
// ═══════════════════════════════════════════════
let ING_CATS=['Todas','Hortfruit','Proteína','Secos','Grãos','Laticineos','Descartáveis','Porções'];
const PAGE_SIZE=14;
let ingCatFilter='Todas',ingPage=1,ingSortCol='nome',ingSortAsc=true,filteredDB=[...DB];
let editIngId=null;

function renderIngStats(){
  document.getElementById('si-total').textContent=DB.length;
  document.getElementById('si-hort').textContent=DB.filter(d=>d.categoria==='Hortfruit').length;
  document.getElementById('si-prot').textContent=DB.filter(d=>d.categoria==='Proteína').length;
  document.getElementById('si-secos').textContent=DB.filter(d=>d.categoria==='Secos'||d.categoria==='Grãos').length;
  document.getElementById('si-fc').textContent=DB.filter(d=>d.fc>1).length;
}
function renderIngCatTabs(){
  document.getElementById('ing-cat-tabs').innerHTML=ING_CATS.map(c=>
    `<button class="ftab${c===ingCatFilter?' active':''}" onclick="setIngCat('${c}')">${c}</button>`
  ).join('');
}
function setIngCat(c){ingCatFilter=c;ingPage=1;applyIngFilter();}
function ingSort(col){if(ingSortCol===col)ingSortAsc=!ingSortAsc;else{ingSortCol=col;ingSortAsc=true;}applyIngFilter();}
function applyIngFilter(){
  const q=document.getElementById('ing-q').value.toLowerCase();
  filteredDB=DB.filter(d=>(ingCatFilter==='Todas'||d.categoria===ingCatFilter)&&(!q||d.nome.toLowerCase().includes(q)));
  filteredDB.sort((a,b)=>{
    let va=a[ingSortCol]||'',vb=b[ingSortCol]||'';
    return typeof va==='string'?(ingSortAsc?va.localeCompare(vb):vb.localeCompare(va)):(ingSortAsc?va-vb:vb-va);
  });
  ingPage=1;renderIngTable();
}
function renderIngTable(){
  const start=(ingPage-1)*PAGE_SIZE,page=filteredDB.slice(start,start+PAGE_SIZE);
  const tbody=document.getElementById('ing-tbody');
  if(!page.length){tbody.innerHTML=`<tr><td colspan="9" style="text-align:center;padding:30px;color:var(--text3)">Nenhum ingrediente encontrado</td></tr>`;renderIngPagination();return;}
  tbody.innerHTML=page.map(ing=>{
    const unKg=ing.un.toLowerCase()==='kg';
    const c100=unKg?(ing.preco/1000*100*ing.fc):null;
    const perda=Math.round((ing.fc-1)*100);
    const usado=usedIn(ing.id);
    return`<tr>
      <td style="font-weight:500">${ing.nome}</td>
      <td><span class="badge cat-${ing.categoria}">${ing.categoria}</span></td>
      <td style="text-align:right">${fmt(ing.preco)}</td>
      <td style="text-align:right;color:var(--text3)">${ing.un}</td>
      <td style="text-align:right"><span class="fc-chip ${fcClass(ing.fc)}">${ing.fc.toFixed(2)}</span></td>
      <td style="text-align:right;color:${perda===0?'var(--text3)':perda<15?'var(--teal)':perda<35?'var(--yellow)':'var(--red)'}">${perda===0?'—':perda+'%'}</td>
      <td style="text-align:right;color:var(--text2)">${c100?fmt(c100):'—'}</td>
      <td style="text-align:center">${usado>0?`<span class="badge badge-blue" style="cursor:pointer" onclick="showScreen('fichas')">${usado} ficha${usado>1?'s':''}</span>`:`<span style="color:var(--text3);font-size:11px">—</span>`}</td>
      <td style="text-align:center;white-space:nowrap">
        <button class="act-btn edit" onclick="openIngModal(${ing.id})"><i class="ti ti-edit"></i></button>
        <button class="act-btn del" onclick="delIng(${ing.id})"><i class="ti ti-trash"></i></button>
      </td>
    </tr>`;
  }).join('');
  document.getElementById('ing-page-info').textContent=`${start+1}–${Math.min(start+PAGE_SIZE,filteredDB.length)} de ${filteredDB.length} ingredientes`;
  renderIngPagination();
}
function renderIngPagination(){
  const total=Math.ceil(filteredDB.length/PAGE_SIZE),el=document.getElementById('ing-page-btns');
  let h='';
  if(ingPage>1) h+=`<button class="pbtn" onclick="ingGoPage(${ingPage-1})"><i class="ti ti-chevron-left"></i></button>`;
  for(let i=1;i<=total;i++){
    if(i===1||i===total||Math.abs(i-ingPage)<=1) h+=`<button class="pbtn${i===ingPage?' active':''}" onclick="ingGoPage(${i})">${i}</button>`;
    else if(Math.abs(i-ingPage)===2) h+=`<span style="color:var(--text3);padding:0 3px">…</span>`;
  }
  if(ingPage<total) h+=`<button class="pbtn" onclick="ingGoPage(${ingPage+1})"><i class="ti ti-chevron-right"></i></button>`;
  el.innerHTML=h;
}
function ingGoPage(p){ingPage=p;renderIngTable();}

function openIngModal(id){
  editIngId=id||null;
  document.getElementById('ing-modal-title').textContent=id?'Editar ingrediente':'Novo ingrediente';
  if(id){
    const ing=DB.find(d=>d.id===id);
    document.getElementById('if-nome').value=ing.nome;
    document.getElementById('if-cat').value=ing.categoria;
    document.getElementById('if-un').value=ing.un;
    document.getElementById('if-preco').value=ing.preco;
    document.getElementById('if-fc').value=ing.fc.toFixed(2);
  } else {
    document.getElementById('if-nome').value='';
    document.getElementById('if-cat').value='Hortfruit';
    document.getElementById('if-un').value='kg';
    document.getElementById('if-preco').value='';
    document.getElementById('if-fc').value='1.00';
  }
  updateIngPreview();
  document.getElementById('ing-overlay').style.display='flex';
}
function updateIngPreview(){
  const p=parseFloat(document.getElementById('if-preco').value)||0;
  const fc=parseFloat(document.getElementById('if-fc').value)||1;
  const un=document.getElementById('if-un').value;
  const perda=Math.round((fc-1)*100);
  const el=document.getElementById('if-preview');
  if(!p){el.textContent='Preencha o preço e o FC para ver o custo real calculado.';return;}
  const unKg=un.toLowerCase()==='kg';
  const c100=unKg?(p/1000*100*fc):null;
  el.innerHTML=`FC <b>${fc.toFixed(2)}</b> = <b>${perda}%</b> de perda no pré-preparo.`+(c100?` Custo real por 100g: <b>${fmt(c100)}</b>.`:'');
}
function saveIng(){
  const nome=document.getElementById('if-nome').value.trim();
  if(!nome){alert('Informe o nome do ingrediente');return;}
  const existente=editIngId?DB.find(d=>d.id===editIngId):null;
  const obj={
    id:editIngId||nextIngId++,
    nome,
    categoria:document.getElementById('if-cat').value,
    un:document.getElementById('if-un').value,
    preco:parseFloat(document.getElementById('if-preco').value)||0,
    fc:parseFloat(document.getElementById('if-fc').value)||1,
    // preserva dados de estoque se existirem
    qtd:existente?existente.qtd:0,
    min:existente?existente.min:0,
    max:existente?existente.max:0,
    custoMedio:existente?existente.custoMedio:0,
  };
  if(editIngId){const idx=DB.findIndex(d=>d.id===editIngId);DB[idx]=obj;}else DB.push(obj);
  saveAll();
  closeModal('ing-overlay');renderIngStats();renderIngCatTabs();applyIngFilter();
}
function delIng(id){
  const uso=usedIn(id);
  if(uso>0){alert(`Este ingrediente está em ${uso} ficha(s) técnica(s). Remova-o das fichas primeiro.`);return;}
  if(!confirm('Remover este ingrediente?'))return;
  DB=DB.filter(d=>d.id!==id);filteredDB=filteredDB.filter(d=>d.id!==id);
  saveAll();
  renderIngStats();renderIngTable();
}

// ═══════════════════════════════════════════════
//  FICHAS TÉCNICAS
// ═══════════════════════════════════════════════
let fichaCatFilter='todas',editFichaId=null,modalFichaIngs=[],modalFotos=[];

function renderFichaStats(){
  document.getElementById('sf-total').textContent=fichas.length;
  document.getElementById('sf-cats').textContent=categories.length;
  const ms=fichas.map(f=>calcFicha(f).marg).filter(m=>m>0);
  document.getElementById('sf-melhor').textContent=ms.length?Math.max(...ms).toFixed(1)+'%':'—';
  document.getElementById('sf-atencao').textContent=fichas.filter(f=>calcFicha(f).marg<55&&f.venda>0).length;
}
function renderFichaCatTabs(){
  const counts={};fichas.forEach(f=>{counts[f.categoria]=(counts[f.categoria]||0)+1});
  const el=document.getElementById('ficha-cat-tabs');
  let h=`<button class="ctab${fichaCatFilter==='todas'?' active':''}" onclick="setFichaCat('todas')">Todas <span style="opacity:.5">${fichas.length}</span></button>`;
  categories.forEach(c=>{h+=`<button class="ctab${fichaCatFilter===c.id?' active':''}" onclick="setFichaCat('${c.id}')">${c.icon} ${c.nome} <span style="opacity:.5">${counts[c.id]||0}</span></button>`;});
  h+=`<button class="add-cat-btn" onclick="openCatModal()"><i class="ti ti-plus"></i> Nova categoria</button>`;
  el.innerHTML=h;
}
function setFichaCat(id){fichaCatFilter=id;renderFichaCatTabs();renderFichas();}
function renderFichas(){
  const q=(document.getElementById('ficha-q').value||'').toLowerCase();
  const list=fichas.filter(f=>(fichaCatFilter==='todas'||f.categoria===fichaCatFilter)&&(!q||f.nome.toLowerCase().includes(q)));
  const grid=document.getElementById('fichas-grid');
  if(!list.length){grid.innerHTML=`<div class="empty-state"><i class="ti ti-clipboard-off"></i>Nenhuma ficha encontrada.<br><button class="btn btn-primary btn-sm" style="margin-top:10px" onclick="openFichaModal()"><i class="ti ti-plus"></i> Criar ficha</button></div>`;return;}
  grid.innerHTML=list.map(f=>{
    const cat=getCat(f.categoria),calc=calcFicha(f);
    const mc=calc.marg>=65?'var(--green)':calc.marg>=50?'var(--yellow)':'var(--red)';
    const mci=calc.margIfood>=65?'var(--green)':calc.margIfood>=50?'var(--yellow)':'var(--red)';
    return`<div class="fcard" onclick="openDetail(${f.id})">
      <div class="fcard-top">
        <div class="fcard-title">${f.nome}</div>
        <div class="fcard-tags">
          <span class="badge ${catBadge(f.categoria)}">${cat.icon} ${cat.nome}</span>
          <span class="badge ${f.status==='Ativo'?'badge-ok':'badge-warn'}">${f.status}</span>
          ${f.rendimento>1?`<span class="badge badge-blue">🍽️ ${f.rendimento} porções</span>`:''}
        </div>
        ${f.rendimento>1?`<div style="margin-top:7px;background:var(--bg3);border-radius:7px;padding:6px 10px;font-size:11.5px;display:flex;justify-content:space-between;align-items:center">
          <span style="color:var(--text3)">Custo total da receita:</span>
          <span style="font-weight:600;color:var(--text2)">${fmt(calc.custoTotal)}</span>
        </div>`:''}
      </div>
      <div class="fcard-metrics" style="grid-template-columns:repeat(3,1fr)">
        <div class="fcard-metric">
          <div class="fm-label">${f.rendimento>1?'Custo/porção':'Custo c/ FC'}</div>
          <div class="fm-val" style="color:var(--accent)">${fmt(calc.liq)}</div>
          ${f.rendimento>1?`<div style="font-size:10px;color:var(--text3);margin-top:2px">de ${fmt(calc.custoTotal)} total</div>`:''}
        </div>
        <div class="fcard-metric"><div class="fm-label">CMV ${f.rendimento>1?'/ porção':''}</div><div class="fm-val" style="color:${mc}">${f.venda>0?calc.cmv.toFixed(1)+'%':'—'}</div></div>
        <div class="fcard-metric"><div class="fm-label">Preço ${f.rendimento>1?'/ porção':'venda'}</div><div class="fm-val" style="color:var(--green);font-size:12px">${f.venda>0?fmt(f.venda):'—'}</div></div>
      </div>
      <div class="fcard-metrics" style="grid-template-columns:repeat(3,1fr);background:rgba(20,184,166,.08)">
        <div class="fcard-metric" style="background:rgba(20,184,166,.06)"><div class="fm-label" style="color:var(--teal)">🛵 ${f.rendimento>1?'iFood/porção':'Venda iFood'}</div><div class="fm-val" style="color:var(--teal)">${f.vendaIfood>0?fmt(f.vendaIfood):'—'}</div></div>
        <div class="fcard-metric" style="background:rgba(20,184,166,.06)"><div class="fm-label" style="color:var(--teal)">CMV iFood</div><div class="fm-val" style="color:${mci}">${f.vendaIfood>0?calc.cmvIfood.toFixed(1)+'%':'—'}</div></div>
        <div class="fcard-metric" style="background:rgba(20,184,166,.06)"><div class="fm-label" style="color:var(--teal)">Margem iFood</div><div class="fm-val" style="color:${mci};font-size:12px">${f.vendaIfood>0?calc.margIfood.toFixed(1)+'%':'—'}</div></div>
      </div>
      <div class="fcard-footer">
        <span style="font-size:11.5px;color:var(--text3);display:flex;align-items:center;gap:8px">
          <span><i class="ti ti-salad" style="font-size:12px"></i> ${f.ings.length} ing.</span>
          ${f.preparo?`<span title="Tem modo de preparo"><i class="ti ti-notes" style="color:var(--blue);font-size:12px"></i></span>`:''}
          ${(f.fotos&&f.fotos.length)?`<span title="${f.fotos.length} foto${f.fotos.length>1?'s':''}"><i class="ti ti-camera" style="color:var(--purple);font-size:12px"></i> ${f.fotos.length}</span>`:''}
        </span>
        <div style="display:flex;gap:4px" onclick="event.stopPropagation()">
          <button class="btn btn-ghost btn-sm" onclick="openFichaModal(${f.id})"><i class="ti ti-edit"></i></button>
          <button class="btn btn-danger btn-sm" onclick="delFicha(${f.id})"><i class="ti ti-trash"></i></button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ── Fotos ──
function addFotos(input){
  const files=Array.from(input.files);
  files.forEach(file=>{
    if(!file.type.startsWith('image/'))return;
    const reader=new FileReader();
    reader.onload=e=>{
      modalFotos.push({name:file.name,data:e.target.result});
      renderFotosPreview();
    };
    reader.readAsDataURL(file);
  });
  input.value=''; // permite re-selecionar mesmo arquivo
}

function renderFotosPreview(){
  const el=document.getElementById('ff-fotos-preview');
  if(!el)return;
  el.innerHTML=modalFotos.map((f,i)=>`
    <div class="foto-thumb">
      <img src="${f.data}" alt="${f.name}">
      <button class="del-foto" onclick="removeFoto(${i})" title="Remover"><i class="ti ti-x"></i></button>
    </div>
  `).join('');
}

function removeFoto(idx){
  modalFotos.splice(idx,1);
  renderFotosPreview();
}

function openLightbox(src){
  const lb=document.createElement('div');
  lb.className='lightbox';
  lb.innerHTML=`<button class="lightbox-close" onclick="this.parentNode.remove()"><i class="ti ti-x"></i></button>
    <img src="${src}" onclick="event.stopPropagation()">`;
  lb.onclick=()=>lb.remove();
  document.body.appendChild(lb);
}

function openFichaModal(id){
  editFichaId=id||null;modalFichaIngs=[];
  document.getElementById('ficha-modal-title').textContent=id?'Editar ficha técnica':'Nova ficha técnica';
  document.getElementById('ff-cat').innerHTML=categories.map(c=>`<option value="${c.id}">${c.icon} ${c.nome}</option>`).join('');
  if(id){
    const f=fichas.find(x=>x.id===id);
    document.getElementById('ff-nome').value=f.nome;
    document.getElementById('ff-cat').value=f.categoria;
    document.getElementById('ff-rend').value=f.rendimento;
    document.getElementById('ff-venda').value=f.venda;
    document.getElementById('ff-venda-ifood').value=f.vendaIfood||'';
    document.getElementById('ff-taxa-ifood').value=f.taxaIfood||12;
    document.getElementById('ff-status').value=f.status;
    modalFichaIngs=f.ings.map(i=>({...i})); // preserva subFichaId se existir
    modalFotos=(f.fotos||[]).map(x=>({...x}));
    document.getElementById('ff-preparo').value=f.preparo||'';
  } else {
    document.getElementById('ff-nome').value='';
    document.getElementById('ff-rend').value='1';
    document.getElementById('ff-venda').value='';
    document.getElementById('ff-venda-ifood').value='';
    document.getElementById('ff-taxa-ifood').value='12';
    document.getElementById('ff-status').value='Ativo';
    modalFotos=[];
    document.getElementById('ff-preparo').value='';
  }
  document.getElementById('ff-ing-q').value='';
  document.getElementById('ff-ing-dd').style.display='none';
  renderFichaModalIngs();recalcFicha();renderFotosPreview();
  document.getElementById('ficha-overlay').style.display='flex';
}
function filterFichaIngs(){
  const q=document.getElementById('ff-ing-q').value.toLowerCase().trim();
  const dd=document.getElementById('ff-ing-dd');
  if(!q){dd.style.display='none';return;}

  // Ingredientes da base
  const ings=DB.filter(d=>d.nome.toLowerCase().includes(q)
    &&!modalFichaIngs.find(i=>i.ingId===d.id)
  ).slice(0,6);

  // Subfichas da categoria porcao (excluindo a própria ficha em edição)
  const subs=fichas.filter(f=>
    f.categoria==='porcao'
    &&f.nome.toLowerCase().includes(q)
    &&f.id!==editFichaId
    &&!modalFichaIngs.find(i=>i.subFichaId===f.id)
  ).slice(0,4);

  if(!ings.length&&!subs.length){dd.style.display='none';return;}

  let html='';
  if(subs.length){
    html+=`<div style="padding:5px 12px 3px;font-size:10px;color:var(--teal);text-transform:uppercase;letter-spacing:.5px;font-weight:600;border-bottom:1px solid var(--border)">🥄 Porções / Bases</div>`;
    html+=subs.map(f=>{
      const sc=calcFicha(f);
      return`<div class="ing-opt" onclick="addSubFicha(${f.id})" style="background:rgba(20,184,166,.04)">
        <span style="display:flex;align-items:center;gap:6px"><span style="background:rgba(20,184,166,.15);color:var(--teal);border-radius:4px;padding:1px 5px;font-size:10px">SUBFICHA</span>${f.nome}</span>
        <span class="ing-opt-sub" style="color:var(--teal)">${f.rendimento} porções · ${fmt(sc.liq)}/porção</span>
      </div>`;
    }).join('');
  }
  if(ings.length){
    if(subs.length) html+=`<div style="padding:5px 12px 3px;font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:.5px;font-weight:600;border-bottom:1px solid var(--border)">Ingredientes</div>`;
    html+=ings.map(d=>`<div class="ing-opt" onclick="addFichaIng(${d.id})">
      <span>${d.nome}</span>
      <span class="ing-opt-sub">${d.categoria} · ${fmt(d.preco)}/${d.un} · FC ${d.fc.toFixed(2)}</span>
    </div>`).join('');
  }
  dd.innerHTML=html;
  dd.style.display='block';
}
function addFichaIng(id){
  modalFichaIngs.push({ingId:id,qtd:100});
  document.getElementById('ff-ing-q').value='';
  document.getElementById('ff-ing-dd').style.display='none';
  renderFichaModalIngs();recalcFicha();
}
function addSubFicha(fichaId){
  modalFichaIngs.push({subFichaId:fichaId,qtd:1});
  document.getElementById('ff-ing-q').value='';
  document.getElementById('ff-ing-dd').style.display='none';
  renderFichaModalIngs();recalcFicha();
}
function removeFichaIng(idx){modalFichaIngs.splice(idx,1);renderFichaModalIngs();recalcFicha();}
function updateFichaQty(idx,v){modalFichaIngs[idx].qtd=parseFloat(v)||0;recalcFicha();}
// Helper: formata quantidade com unidade de forma inteligente
function fmtQtd(qtd, un){
  const unL=un.toLowerCase();
  // Para kg/Litro, qtd está em g/ml — exibe em g/ml se < 1000, senão kg/L
  if(unL==='kg'||unL==='litro'||unL==='l'){
    if(qtd>=1000) return (qtd/1000).toFixed(3).replace(/\.?0+$/,'')+' '+un;
    return qtd+'g';
  }
  // Para unidades fracionadas (Und, Sachê, etc.) — exibe como fração
  return qtd+' '+un;
}

function renderFichaModalIngs(){
  const rows=document.getElementById('ff-ing-rows');
  const tbl=document.getElementById('ff-ing-tbl');
  const empty=document.getElementById('ff-ing-empty');
  if(!modalFichaIngs.length){tbl.style.display='none';empty.style.display='block';return;}
  tbl.style.display='table';empty.style.display='none';
  rows.innerHTML=modalFichaIngs.map((fi,idx)=>{
    // ── SUBFICHA ──
    if(fi.subFichaId){
      const sub=fichas.find(f=>f.id===fi.subFichaId);
      if(!sub) return '';
      const sc=calcFicha(sub);
      const custo=sc.liq*fi.qtd;
      return`<tr style="background:rgba(20,184,166,.04)">
        <td style="font-weight:600;color:var(--teal)">
          <span style="background:rgba(20,184,166,.15);color:var(--teal);border-radius:4px;padding:1px 5px;font-size:10px;margin-right:5px">SUBFICHA</span>
          🥄 ${sub.nome}
        </td>
        <td style="font-size:11px;color:var(--teal)">Porção / Base</td>
        <td style="text-align:right"><input class="qty-inp" type="number" value="${fi.qtd}" min="1" step="1" oninput="updateFichaQty(${idx},this.value)" title="Número de porções"></td>
        <td style="color:var(--teal);font-size:11px">porção</td>
        <td style="text-align:right;color:var(--text3)">—</td>
        <td style="text-align:right;color:var(--text3);font-size:11px">${fmt(sc.liq)}/p.</td>
        <td style="text-align:right;color:var(--teal);font-weight:600">${fmt(custo)}</td>
        <td><button style="background:none;border:none;color:var(--text3);cursor:pointer;font-size:14px" onclick="removeFichaIng(${idx})"><i class="ti ti-x"></i></button></td>
      </tr>`;
    }
    // ── INGREDIENTE NORMAL ──
    const ing=DB.find(d=>d.id===fi.ingId);if(!ing)return'';
    const unKg=ing.un.toLowerCase()==='kg'||ing.un.toLowerCase()==='litro';
    const cu=ing.preco/(unKg?1000:1);
    const custo=fi.qtd*ing.fc*cu;
    const fcColor=ing.fc===1?'var(--green)':ing.fc<1.15?'var(--teal)':ing.fc<1.35?'var(--yellow)':'var(--red)';
    const qtdBruta=fi.qtd*ing.fc;
    return`<tr>
      <td style="font-weight:500">${ing.nome}</td>
      <td style="font-size:11px;color:var(--text3)">${ing.categoria}</td>
      <td style="text-align:right"><input class="qty-inp" type="number" value="${fi.qtd}" min="0" step="${unKg?1:0.01}" oninput="updateFichaQty(${idx},this.value)"></td>
      <td style="color:var(--text2);font-size:12px;white-space:nowrap">${unKg?'g / ml':ing.un}</td>
      <td style="text-align:right;font-weight:700;color:${fcColor}">${ing.fc.toFixed(2)}</td>
      <td style="text-align:right;color:var(--text2)">${fmtQtd(qtdBruta,ing.un)}</td>
      <td style="text-align:right;color:var(--teal);font-weight:600">${fmt(custo)}</td>
      <td><button style="background:none;border:none;color:var(--text3);cursor:pointer;font-size:14px" onclick="removeFichaIng(${idx})"><i class="ti ti-x"></i></button></td>
    </tr>`;
  }).join('');
}
function recalcFicha(){
  const rend=parseInt(document.getElementById('ff-rend').value)||1;
  const venda=parseFloat(document.getElementById('ff-venda').value)||0;
  const vendaIfood=parseFloat(document.getElementById('ff-venda-ifood').value)||0;
  const taxa=parseFloat(document.getElementById('ff-taxa-ifood').value)||0;
  let bruto=0,liq=0;
  modalFichaIngs.forEach(fi=>{
    if(fi.subFichaId){
      const sub=fichas.find(s=>s.id===fi.subFichaId);
      if(!sub)return;
      const sc=calcFicha(sub);
      bruto+=sc.liq*fi.qtd; liq+=sc.liq*fi.qtd;
      return;
    }
    const ing=DB.find(d=>d.id===fi.ingId);if(!ing)return;
    const unKg=ing.un.toLowerCase()==='kg'||ing.un.toLowerCase()==='litro';
    const cu=ing.preco/(unKg?1000:1);
    bruto+=fi.qtd*ing.fc*cu;liq+=fi.qtd*cu;
  });
  const custoTotalFC=bruto;
  const cb=bruto/rend, cl=liq/rend;
  // Atualiza label do campo rendimento para refletir divisão
  const rendLbl=document.getElementById('ff-rend-label');
  if(rendLbl&&rend>1) rendLbl.textContent=`Total: ${fmt(custoTotalFC)} ÷ ${rend} porções = ${fmt(cb)} / porção`;
  else if(rendLbl) rendLbl.textContent='';
  const marg=venda>0?((venda-cl)/venda*100):0;
  const mc=marg>=65?'var(--green)':marg>=50?'var(--yellow)':'var(--red)';
  // iFood
  const liquidoIfood=vendaIfood*(1-taxa/100);
  const margIfood=vendaIfood>0?((liquidoIfood-cl)/liquidoIfood*100):0;
  const mci=margIfood>=65?'var(--green)':margIfood>=50?'var(--yellow)':'var(--red)';
  const cmv=venda>0?(cl/venda*100):0;
  const cmvIfood=vendaIfood>0?(cl/vendaIfood*100):0;
  // Labels dinâmicos conforme rendimento
  const liqLbl=document.getElementById('sb-liq-label');
  const brutoLbl=document.getElementById('sb-bruto-label');
  const rendBox=document.getElementById('ff-rend-label-box');
  if(liqLbl) liqLbl.textContent=rend>1?'Custo / porção (c/ FC)':'Custo c/ FC';
  if(brutoLbl) brutoLbl.textContent=rend>1?`Custo total (${rend} porções)`:'Custo s/ FC';
  if(rendBox){
    if(rend>1&&custoTotalFC>0){
      rendBox.style.display='block';
      rendBox.textContent=`${fmt(custoTotalFC)} ÷ ${rend} porções = ${fmt(cb)} por porção`;
    } else { rendBox.style.display='none'; }
  }
  document.getElementById('sb-bruto').textContent=rend>1?fmt(custoTotalFC):fmt(cb);
  document.getElementById('sb-liq').textContent=fmt(cb);
  document.getElementById('sb-venda').textContent=venda>0?fmt(venda):'R$ —';
  document.getElementById('sb-venda-ifood').textContent=vendaIfood>0?fmt(vendaIfood):'R$ —';
  const scmv=document.getElementById('sb-cmv');
  scmv.textContent=venda>0?cmv.toFixed(1)+'%':'—';
  scmv.style.color=venda>0?(cmv<=30?'var(--green)':cmv<=40?'var(--yellow)':'var(--red)'):'var(--text3)';
  const scmvi=document.getElementById('sb-cmv-ifood');
  scmvi.textContent=vendaIfood>0?cmvIfood.toFixed(1)+'%':'—';
  scmvi.style.color=vendaIfood>0?(cmvIfood<=30?'var(--green)':cmvIfood<=40?'var(--yellow)':'var(--red)'):'var(--text3)';
  const mel=document.getElementById('sb-marg');
  mel.textContent=venda>0?marg.toFixed(1)+'%':'—';
  mel.style.color=venda>0?mc:'var(--text3)';
  const meli=document.getElementById('sb-marg-ifood');
  meli.textContent=vendaIfood>0?margIfood.toFixed(1)+'%':'—';
  meli.style.color=vendaIfood>0?mci:'var(--text3)';
  // liquido ifood preview
  const liq_el=document.getElementById('ff-liquido-ifood');
  liq_el.textContent=vendaIfood>0?fmt(liquidoIfood):'R$ —';
  liq_el.style.color=vendaIfood>0?'var(--teal)':'var(--text3)';
}
function saveFicha(){
  const nome=document.getElementById('ff-nome').value.trim();
  if(!nome){alert('Informe o nome da ficha');return;}
  if(!modalFichaIngs.length){alert('Adicione ao menos um ingrediente');return;}
  const obj={
    id:editFichaId||nextFichaId++,
    nome,
    categoria:document.getElementById('ff-cat').value,
    rendimento:parseInt(document.getElementById('ff-rend').value)||1,
    venda:parseFloat(document.getElementById('ff-venda').value)||0,
    vendaIfood:parseFloat(document.getElementById('ff-venda-ifood').value)||0,
    taxaIfood:parseFloat(document.getElementById('ff-taxa-ifood').value)||0,
    status:document.getElementById('ff-status').value,
    ings:[...modalFichaIngs],
    preparo:document.getElementById('ff-preparo').value.trim(),
    fotos:[...modalFotos],
  };
  if(editFichaId){const idx=fichas.findIndex(x=>x.id===editFichaId);fichas[idx]=obj;}else fichas.push(obj);
  saveAll();
  closeModal('ficha-overlay');renderFichaStats();renderFichaCatTabs();renderFichas();
}
function delFicha(id){
  if(!confirm('Remover esta ficha técnica?'))return;
  fichas=fichas.filter(f=>f.id!==id);
  saveAll();
  renderFichaStats();renderFichaCatTabs();renderFichas();
}

function openCatModal(){document.getElementById('nc-nome').value='';document.getElementById('nc-icon').value='';document.getElementById('cat-overlay').style.display='flex';}
function openIngCatModal(){document.getElementById('ic-nome').value='';document.getElementById('ing-cat-overlay').style.display='flex';}
function saveIngCat(){
  const nome=document.getElementById('ic-nome').value.trim();
  if(!nome){alert('Informe o nome da categoria');return;}
  // Adiciona à lista de categorias de ingrediente
  ING_CATS.push(nome);
  // Adiciona ao select do modal de ingrediente
  const sel=document.getElementById('if-cat');
  const opt=document.createElement('option');opt.value=nome;opt.textContent=nome;
  sel.appendChild(opt);
  saveAll();
  closeModal('ing-cat-overlay');
  renderIngCatTabs();applyIngFilter();
  showToast('Categoria "'+nome+'" criada na base de ingredientes.','ok');
}
function saveNewCat(){
  const nome=document.getElementById('nc-nome').value.trim();
  if(!nome){alert('Informe o nome');return;}
  const icon=document.getElementById('nc-icon').value.trim()||'📋';
  const id=nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');
  categories.push({id,nome,icon});
  saveAll();
  closeModal('cat-overlay');
  document.getElementById('ff-cat').innerHTML=categories.map(c=>`<option value="${c.id}">${c.icon} ${c.nome}</option>`).join('');
  renderFichaCatTabs();renderFichaStats();
}

// DETALHE FICHA
function openDetail(id){
  const f=fichas.find(x=>x.id===id);
  const cat=getCat(f.categoria),calc=calcFicha(f);
  const mc=calc.marg>=65?'var(--green)':calc.marg>=50?'var(--yellow)':'var(--red)';
  const mci=calc.margIfood>=65?'var(--green)':calc.margIfood>=50?'var(--yellow)':'var(--red)';
  document.getElementById('detail-title').textContent=f.nome;
  document.getElementById('detail-edit-btn').onclick=()=>{closeModal('detail-overlay');openFichaModal(f.id);};
  const rows=f.ings.map(fi=>{
    if(fi.subFichaId){
      const sub=fichas.find(s=>s.id===fi.subFichaId);
      if(!sub)return'';
      const sc=calcFicha(sub);
      const custo=sc.liq*fi.qtd;
      return`<tr style="background:rgba(20,184,166,.04)">
        <td style="font-weight:600;color:var(--teal)">
          <span style="background:rgba(20,184,166,.15);color:var(--teal);border-radius:4px;padding:1px 5px;font-size:10px;margin-right:4px">SUBFICHA</span>
          🥄 ${sub.nome}
        </td>
        <td><span class="badge badge-teal">Porção/Base</span></td>
        <td style="text-align:right">${fi.qtd} porção${fi.qtd!==1?'ões':''}</td>
        <td style="text-align:right;color:var(--text3)">—</td>
        <td style="text-align:right;color:var(--text3)">—</td>
        <td style="text-align:right;color:var(--text3)">—</td>
        <td style="text-align:right;color:var(--text2)">${fmt(sc.liq)}/porção</td>
        <td style="text-align:right;color:var(--teal);font-weight:600">${fmt(custo)}</td>
      </tr>`;
    }
    const ing=DB.find(d=>d.id===fi.ingId);if(!ing)return'';
    const unKg=ing.un.toLowerCase()==='kg'||ing.un.toLowerCase()==='litro';
    const cu=ing.preco/(unKg?1000:1);
    const perda=Math.round((ing.fc-1)*100);
    const fcColor=ing.fc===1?'var(--green)':ing.fc<1.35?'var(--yellow)':'var(--red)';
    const qtdLiq=fmtQtd(fi.qtd,ing.un);
    const qtdBruta=fmtQtd(fi.qtd*ing.fc,ing.un);
    return`<tr>
      <td style="font-weight:500">${ing.nome}</td>
      <td><span class="badge cat-${ing.categoria}">${ing.categoria}</span></td>
      <td style="text-align:right">${qtdLiq}</td>
      <td style="text-align:right;font-weight:700;color:${fcColor}">${ing.fc.toFixed(2)}</td>
      <td style="text-align:right;color:var(--text2)">${qtdBruta}</td>
      <td style="text-align:right;color:${perda===0?'var(--text3)':'var(--yellow)'}">${perda===0?'—':perda+'%'}</td>
      <td style="text-align:right;color:var(--text2)">${fmt(fi.qtd*cu)}</td>
      <td style="text-align:right;color:var(--teal);font-weight:600">${fmt(fi.qtd*ing.fc*cu)}</td>
    </tr>`;
  }).join('');
  document.getElementById('detail-body').innerHTML=`
    <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:14px">
      <span class="badge ${catBadge(f.categoria)}">${cat.icon} ${cat.nome}</span>
      <span class="badge ${f.status==='Ativo'?'badge-ok':'badge-warn'}">${f.status}</span>
      ${f.rendimento>1?`<span class="badge badge-blue">${f.rendimento} porções</span>`:''}
    </div>
    ${f.rendimento>1?`
    <div style="background:rgba(59,130,246,.06);border:1px solid rgba(59,130,246,.2);border-radius:10px;padding:11px 15px;margin-bottom:10px;display:flex;align-items:center;gap:16px;flex-wrap:wrap">
      <div><div style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:.4px;margin-bottom:3px">Custo total da receita</div><div style="font-size:18px;font-weight:700;font-family:var(--font-display);color:var(--text2)">${fmt(calc.custoTotal)}</div></div>
      <div style="color:var(--border);font-size:20px">÷</div>
      <div><div style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:.4px;margin-bottom:3px">Porções</div><div style="font-size:18px;font-weight:700;font-family:var(--font-display);color:var(--blue)">${f.rendimento}</div></div>
      <div style="color:var(--border);font-size:20px">=</div>
      <div><div style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:.4px;margin-bottom:3px">Custo / porção</div><div style="font-size:18px;font-weight:700;font-family:var(--font-display);color:var(--accent)">${fmt(calc.liq)}</div></div>
      <div style="margin-left:auto;text-align:right">
        <div style="font-size:10px;color:var(--text3);text-transform:uppercase;letter-spacing:.4px;margin-bottom:3px">Preço / porção</div>
        <div style="font-size:18px;font-weight:700;font-family:var(--font-display);color:var(--green)">${fmt(f.venda)}</div>
      </div>
    </div>`:''}
    <div class="stats-grid" style="grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:8px">
      <div class="scard">
        <div class="scard-label">${f.rendimento>1?'Custo / porção':'Custo c/ FC'}</div>
        <div class="scard-val" style="font-size:15px;color:var(--accent)">${fmt(calc.liq)}</div>
        ${f.rendimento>1?`<div style="font-size:11px;color:var(--text3);margin-top:2px">Total: ${fmt(calc.custoTotal)}</div>`:''}
      </div>
      <div class="scard">
        <div class="scard-label">${f.rendimento>1?'Preço / porção':'Venda direta'}</div>
        <div class="scard-val" style="font-size:15px;color:var(--green)">${fmt(f.venda)}</div>
        ${f.rendimento>1?`<div style="font-size:11px;color:var(--text3);margin-top:2px">${f.rendimento} × ${fmt(f.venda)} = ${fmt(f.venda*f.rendimento)}</div>`:''}
      </div>
      <div class="scard">
        <div class="scard-label">CMV${f.rendimento>1?' / porção':''}</div>
        <div class="scard-val" style="font-size:15px;color:${calc.cmv<=30?'var(--green)':calc.cmv<=40?'var(--yellow)':'var(--red)'}">${f.venda>0?calc.cmv.toFixed(1)+'%':'—'}</div>
        <div style="display:flex;gap:5px;margin-top:4px">
          <span style="font-size:11px;background:rgba(34,197,94,.1);color:var(--green);border-radius:4px;padding:1px 6px">Marg. ${calc.marg.toFixed(1)}%</span>
        </div>
      </div>
      <div class="scard" style="border-color:rgba(20,184,166,.3);background:rgba(20,184,166,.04)">
        <div class="scard-label" style="color:var(--teal)">🛵 ${f.rendimento>1?'iFood / porção':'Venda iFood'}</div>
        <div class="scard-val" style="font-size:15px;color:var(--teal)">${f.vendaIfood>0?fmt(f.vendaIfood):'—'}</div>
        ${f.vendaIfood>0?`<div style="display:flex;gap:5px;margin-top:4px">
          <span style="font-size:11px;background:rgba(239,68,68,.1);color:var(--red);border-radius:4px;padding:1px 6px">CMV ${calc.cmvIfood.toFixed(1)}%</span>
          <span style="font-size:11px;background:rgba(20,184,166,.1);color:var(--teal);border-radius:4px;padding:1px 6px">Marg. ${calc.margIfood.toFixed(1)}%</span>
        </div>`:''}
      </div>
    </div>
    ${(f.fotos&&f.fotos.length)?`
    <div style="margin-bottom:14px">
      <div style="font-size:11px;color:var(--text3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;padding-bottom:5px;border-bottom:1px solid var(--border)">
        <i class="ti ti-camera" style="color:var(--accent)"></i> Fotos do prato
      </div>
      <div class="foto-grid-detail">
        ${f.fotos.map(foto=>`
          <div class="foto-detail" onclick="openLightbox('${foto.data}')">
            <img src="${foto.data}" alt="${foto.name}">
          </div>`).join('')}
      </div>
    </div>`:''}
    ${f.preparo?`
    <div style="margin-bottom:14px">
      <div style="font-size:11px;color:var(--text3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px;padding-bottom:5px;border-bottom:1px solid var(--border)">
        <i class="ti ti-notes" style="color:var(--accent)"></i> Modo de preparo
      </div>
      <div style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:14px 16px;font-size:13px;line-height:1.8;color:var(--text2);white-space:pre-wrap">${f.preparo}</div>
    </div>`:''}
    <div style="overflow-x:auto">
    <table style="width:100%;border-collapse:collapse">
      <thead><tr>
        <th style="font-size:10px;color:var(--text3);text-transform:uppercase;padding:6px 8px;text-align:left;border-bottom:1px solid var(--border)">Ingrediente</th>
        <th style="font-size:10px;color:var(--text3);text-transform:uppercase;padding:6px 8px;text-align:left;border-bottom:1px solid var(--border)">Cat.</th>
        <th style="font-size:10px;color:var(--text3);text-transform:uppercase;padding:6px 8px;text-align:right;border-bottom:1px solid var(--border)">Qtd. líquida</th>
        <th style="font-size:10px;color:var(--text3);text-transform:uppercase;padding:6px 8px;text-align:right;border-bottom:1px solid var(--border)">FC</th>
        <th style="font-size:10px;color:var(--text3);text-transform:uppercase;padding:6px 8px;text-align:right;border-bottom:1px solid var(--border)">Qtd. bruta</th>
        <th style="font-size:10px;color:var(--text3);text-transform:uppercase;padding:6px 8px;text-align:right;border-bottom:1px solid var(--border)">Perda</th>
        <th style="font-size:10px;color:var(--text3);text-transform:uppercase;padding:6px 8px;text-align:right;border-bottom:1px solid var(--border)">Custo s/ FC</th>
        <th style="font-size:10px;color:var(--text3);text-transform:uppercase;padding:6px 8px;text-align:right;border-bottom:1px solid var(--border)">Custo c/ FC</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table></div>`;
  document.getElementById('detail-overlay').style.display='flex';
}

// ═══════════════════════════════════════════════
//  ESTOQUE — helpers
// ═══════════════════════════════════════════════
function estStatus(e){
  const pct=e.qtd/e.min;
  if(pct<1) return {cls:'badge-danger',label:'Crítico',color:'var(--red)'};
  if(pct<1.5) return {cls:'badge-warn',label:'Baixo',color:'var(--yellow)'};
  return {cls:'badge-ok',label:'OK',color:'var(--green)'};
}
function nivelBar(e){
  const pct=Math.min(e.qtd/e.max*100,100);
  const col=e.qtd<e.min?'var(--red)':e.qtd<e.min*1.5?'var(--yellow)':'var(--green)';
  return`<div style="height:6px;border-radius:3px;background:var(--bg4);overflow:hidden;width:80px">
    <div style="height:100%;border-radius:3px;background:${col};width:${pct}%"></div>
  </div><div style="font-size:10px;color:var(--text3);margin-top:2px">${e.qtd} / ${e.max}</div>`;
}

function setEstFilter(f){
  estFilter=f;
  ['todos','critico','baixo','ok'].forEach(x=>{
    const el=document.getElementById('est-filter-'+x);
    if(el) el.className='ftab'+(x===f?' active':'');
  });
  renderEstoque();
}

function renderEstoqueStats(){
  const critico=DB.filter(e=>(e.qtd||0)<(e.min||0)&&e.min>0).length;
  const baixo=DB.filter(e=>{const q=e.qtd||0,m=e.min||0;return m>0&&q>=m&&q<m*1.5;}).length;
  const valor=DB.reduce((s,e)=>s+(e.qtd||0)*(e.custoMedio||0),0);
  document.getElementById('est-total').textContent=DB.length;
  document.getElementById('est-critico').textContent=critico;
  document.getElementById('est-baixo').textContent=baixo;
  document.getElementById('est-valor').textContent=fmt(valor);
  const banner=document.getElementById('est-alert-banner');
  if(critico>0){
    banner.style.display='flex';
    document.getElementById('est-alert-text').innerHTML=`<strong>${critico} item${critico>1?'s':''}</strong> abaixo do estoque mínimo. Regularize comprando os itens críticos.`;
  } else { banner.style.display='none'; }
  // atualiza badge nav
  const nb=document.getElementById('nav-badge-estoque');
  if(nb) nb.textContent=critico>0?critico:'';
}

function updateMinMax(id,campo,val){
  const idx=DB.findIndex(d=>d.id===id);
  if(idx>=0) DB[idx][campo]=parseFloat(val)||0;
  saveAllDebounced();
  renderEstoqueStats(); // atualiza contadores de crítico/baixo
}

let estSortCol='nome', estSortAsc=true;
function sortEstoque(col){
  if(estSortCol===col) estSortAsc=!estSortAsc;
  else{estSortCol=col;estSortAsc=true;}
  renderEstoque();
}

function renderEstoque(){
  const q=(document.getElementById('est-q').value||'').toLowerCase();
  let list=DB.filter(e=>{
    const mq=!q||e.nome.toLowerCase().includes(q)||e.categoria.toLowerCase().includes(q);
    const pct=(e.min||0)>0?(e.qtd||0)/(e.min||1):2; // se min=0, não é crítico
    if(estFilter==='critico'&&pct>=1) return false;
    if(estFilter==='baixo'&&(pct<1||pct>=1.5)) return false;
    if(estFilter==='ok'&&pct<1.5) return false;
    return mq;
  });
  // Ordenação
  list.sort((a,b)=>{
    const ia=a; // DB unificado — a já é o ingrediente
    const ib=b;
    let va,vb;
    if(estSortCol==='nome'){va=ia.nome||'';vb=ib.nome||'';}
    else if(estSortCol==='categoria'){va=ia.categoria||'';vb=ib.categoria||'';}
    else if(estSortCol==='qtd'){va=a.qtd;vb=b.qtd;}
    else if(estSortCol==='valor'){va=a.qtd*(a.custoMedio||0);vb=b.qtd*(b.custoMedio||0);}
    else if(estSortCol==='status'){
      const order={Crítico:0,Baixo:1,OK:2};
      va=order[estStatus(a).label]??3;vb=order[estStatus(b).label]??3;
    }
    if(typeof va==='string') return estSortAsc?va.localeCompare(vb):vb.localeCompare(va);
    return estSortAsc?va-vb:vb-va;
  });
  const tbody=document.getElementById('estoque-tbody');
  if(!list.length){tbody.innerHTML=`<tr><td colspan="10" style="text-align:center;padding:30px;color:var(--text3)">Nenhum item encontrado</td></tr>`;return;}
  tbody.innerHTML=list.map(e=>{
    const st=estStatus(e);
    const valorItem=e.qtd*(e.custoMedio||0);
    return`<tr>
      <td style="font-weight:500">${e.nome}</td>
      <td><span class="badge cat-${e.categoria}">${e.categoria}</span></td>
      <td style="text-align:right;font-weight:700;color:${st.color}">${e.qtd}</td>
      <td style="color:var(--text3)">${e.un}</td>
      <td style="text-align:right"><input type="number" min="0" step="0.1" value="${e.min||0}"
        style="width:55px;background:var(--bg4);border:1px solid var(--border);border-radius:5px;color:var(--text);padding:3px 5px;font-size:12px;text-align:right;font-family:var(--font)"
        onchange="updateMinMax(${e.id},'min',this.value)" title="Estoque mínimo"></td>
      <td style="text-align:right"><input type="number" min="0" step="0.1" value="${e.max||0}"
        style="width:55px;background:var(--bg4);border:1px solid var(--border);border-radius:5px;color:var(--text);padding:3px 5px;font-size:12px;text-align:right;font-family:var(--font)"
        onchange="updateMinMax(${e.id},'max',this.value)" title="Estoque máximo"></td>
      <td>${nivelBar(e)}</td>
      <td style="text-align:right;color:var(--text2)">${fmt(valorItem)}</td>
      <td><span class="badge ${st.cls}">${st.label}</span></td>
      <td style="text-align:center">
        <div style="display:flex;gap:5px;justify-content:center;flex-wrap:nowrap">
          <button style="background:rgba(34,197,94,.1);border:1px solid rgba(34,197,94,.25);color:var(--green);border-radius:7px;padding:5px 9px;cursor:pointer;font-size:12px;font-family:var(--font);display:flex;align-items:center;gap:4px;white-space:nowrap" onclick="openEntrada(${e.id})" title="Registrar entrada">
            <i class="ti ti-arrow-bar-to-down"></i> Entrada
          </button>
          <button style="background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.25);color:var(--red);border-radius:7px;padding:5px 9px;cursor:pointer;font-size:12px;font-family:var(--font);display:flex;align-items:center;gap:4px;white-space:nowrap" onclick="openSaida(${e.id})" title="Registrar saída">
            <i class="ti ti-arrow-bar-up"></i> Saída
          </button>
        </div>
      </td>
    </tr>`;
  }).join('');
  renderHistorico();
  renderEstoqueStats();
}

function renderHistorico(){
  const list=[...historicoData].sort((a,b)=>b.id-a.id);
  document.getElementById('hist-count').textContent=`${list.length} movimentações`;
  document.getElementById('hist-tbody').innerHTML=list.map(h=>{
    const ing=DB.find(d=>d.id===h.ingId);if(!ing)return'';
    const isEntrada=h.tipo==='entrada';
    const dataFmt=h.data?new Date(h.data+'T12:00:00').toLocaleDateString('pt-BR'):'—';
    return`<tr>
      <td style="color:var(--text3);font-size:12px">${dataFmt}</td>
      <td style="font-weight:500">${ing.nome}</td>
      <td><span class="badge ${isEntrada?'badge-ok':'badge-danger'}" style="display:inline-flex;align-items:center;gap:4px">
        <i class="ti ti-${isEntrada?'arrow-down':'arrow-up'}" style="font-size:11px"></i>
        ${isEntrada?'Entrada':'Saída'}
      </span></td>
      <td style="text-align:right;font-weight:600;color:${isEntrada?'var(--green)':'var(--red)'}">
        ${isEntrada?'+':'−'}${h.qtd} ${ing.un}
      </td>
      <td style="color:var(--text3)">${ing.un}</td>
      <td style="text-align:right;color:var(--text2)">${fmt(h.custoUnit)}</td>
      <td style="text-align:right;font-weight:600;color:${isEntrada?'var(--accent)':'var(--text2)'}">
        ${fmt(h.total)}
      </td>
      <td style="color:var(--text3);font-size:12px">${h.forn?`<i class='ti ti-truck' style='font-size:11px'></i> ${h.forn}`:''} ${h.obs?`<span style='color:var(--text3)'>${h.obs}</span>`:''}</td>
    </tr>`;
  }).join('');
}

// ── Modal de entrada ──
function openEntrada(ingId){
  entradaIngId=ingId;
  const ing=DB.find(d=>d.id===ingId);
  document.getElementById('entrada-ing-nome').textContent=ing.nome;
  document.getElementById('entrada-ing-info').textContent=`${ing.categoria} · ${ing.un} · Preço atual na base: ${fmt(ing.preco)}`;
  document.getElementById('entrada-qtd-atual').textContent=(ing.qtd||0)+' '+ing.un;
  document.getElementById('ent-qtd').value='';
  document.getElementById('ent-custo').value=ing.preco.toFixed(2);
  document.getElementById('ent-data').value=new Date().toISOString().split('T')[0];
  document.getElementById('ent-forn').value='';
  document.getElementById('ent-obs').value='';
  document.getElementById('entrada-preview').style.display='none';
  document.getElementById('entrada-overlay').style.display='flex';
  updateEntradaPreview();
}

function updateEntradaPreview(){
  const ingId=entradaIngId;if(!ingId)return;
  const ing=DB.find(d=>d.id===ingId);
  const qtd=parseFloat(document.getElementById('ent-qtd').value)||0;
  const custo=parseFloat(document.getElementById('ent-custo').value)||0;
  if(!qtd||!custo){document.getElementById('entrada-preview').style.display='none';return;}
  const saldoAtual=ing.qtd||0;
  const novoSaldo=saldoAtual+qtd;
  const total=qtd*custo;
  const custoAtual=ing.custoMedio||0;
  const novoMedio=saldoAtual>0?((saldoAtual*custoAtual)+(qtd*custo))/(saldoAtual+qtd):custo;
  document.getElementById('prev-saldo').textContent=novoSaldo.toFixed(2)+' '+ing.un;
  document.getElementById('prev-total').textContent=fmt(total);
  document.getElementById('prev-medio').textContent=fmt(novoMedio)+'/'+ing.un;
  document.getElementById('entrada-preview').style.display='block';
}

function confirmarEntrada(){
  const ing=DB.find(d=>d.id===entradaIngId);if(!ing)return;
  const qtd=parseFloat(document.getElementById('ent-qtd').value);
  const custo=parseFloat(document.getElementById('ent-custo').value);
  if(!qtd||qtd<=0){alert('Informe a quantidade recebida');return;}
  if(!custo||custo<=0){alert('Informe o custo unitário');return;}
  const data=document.getElementById('ent-data').value;
  const forn=document.getElementById('ent-forn').value.trim();
  const obs=document.getElementById('ent-obs').value.trim();

  // Atualiza DB (estoque + preço) — tudo no mesmo objeto
  const idx=DB.findIndex(d=>d.id===entradaIngId);
  if(idx>=0){
    const ing2=DB[idx];
    const saldoAnt=ing2.qtd||0;
    const medioAnt=ing2.custoMedio||0;
    const novoMedio=saldoAnt>0?((saldoAnt*medioAnt)+(qtd*custo))/(saldoAnt+qtd):custo;
    ing2.qtd=parseFloat((saldoAnt+qtd).toFixed(3));
    ing2.custoMedio=parseFloat(novoMedio.toFixed(4));
    ing2.preco=parseFloat(custo.toFixed(2)); // atualiza preço → propaga para fichas
  }

  // 3. Registra no histórico
  historicoData.push({
    id:nextHistId++,ingId:entradaIngId,tipo:'entrada',
    qtd,custoUnit:custo,total:parseFloat((qtd*custo).toFixed(2)),
    data,forn,obs
  });

  saveAll();
  closeModal('entrada-overlay');
  renderEstoque();
  // Re-renderiza fichas se estiver na tela de fichas
  if(document.getElementById('screen-fichas').classList.contains('active')) renderFichas();
  // Feedback visual
  showToast(`✅ Entrada de ${qtd} ${ing.un} de ${ing.nome} registrada. Preço atualizado para ${fmt(custo)}.`,'ok');
}

// ═══════════════════════════════════════════════
//  COMPRAS — gerada automaticamente pelo estoque crítico
// ═══════════════════════════════════════════════
let comprasData=[
  {ingId:33,fornecedor:'Frios do Sul',   qtd:20, preco:16.20,done:false},
  {ingId:77,fornecedor:'Laticínios Verde',qtd:10, preco:54.00,done:false},
  {ingId:6, fornecedor:'Hortifrutti RJ', qtd:25, preco:3.99, done:false},
  {ingId:62,fornecedor:'EmbaPack',       qtd:300,preco:0.77, done:false},
  {ingId:36,fornecedor:'Peixaria Mar',   qtd:8,  preco:70.00,done:false},
];

function gerarListaCompras(){
  // Adiciona itens críticos que ainda não estão na lista
  const criticos=DB.filter(e=>e.qtd<e.min&&e.min>0);
  let adicionados=0;
  criticos.forEach(e=>{
    const jaExiste=comprasData.find(c=>c.ingId===e.id&&!c.done);
    if(!jaExiste){
      comprasData.push({ingId:e.id,fornecedor:'',qtd:e.max-e.qtd,preco:e.preco||0,done:false});
      adicionados++;
    }
  });
  if(adicionados>0){ saveAll(); showToast(`${adicionados} item${adicionados>1?'s':''} crítico${adicionados>1?'s':''} adicionado${adicionados>1?'s':''} à lista de compras.`,'ok'); }
  renderCompras();
}

function renderCompras(){
  let total=0,pend=0,done=0,gasto=0;
  const rows=comprasData.map((c,idx)=>{
    const ing=DB.find(d=>d.id===c.ingId);if(!ing)return'';
    const subtotal=c.qtd*c.preco;total+=subtotal;
    if(c.done){done++;gasto+=subtotal;}else pend++;
    const est=DB.find(d=>d.id===c.ingId);
    const faltam=est?(Math.max(0,(est.min||0)-(est.qtd||0))).toFixed(1):'-';
    return`<tr style="${c.done?'opacity:.45':''}">
      <td style="text-align:center">
        <input type="checkbox" ${c.done?'checked':''} onchange="toggleCompra(${idx},this.checked)"
          style="accent-color:var(--accent);width:15px;height:15px;cursor:pointer">
      </td>
      <td style="font-weight:${c.done?'400':'500'};text-decoration:${c.done?'line-through':''}">${ing.nome}
        ${est&&est.qtd<est.min?`<span class="badge badge-danger" style="margin-left:4px;font-size:10px">faltam ${faltam} ${ing.un}</span>`:''}
      </td>
      <td style="color:var(--text3)">${c.fornecedor||'—'}</td>
      <td style="text-align:right">${c.qtd} ${ing.un}</td>
      <td style="text-align:right;color:var(--text2)">${fmt(c.preco)}/${ing.un}</td>
      <td style="text-align:right;color:var(--accent);font-weight:600">${fmt(subtotal)}</td>
      <td><span class="badge ${c.done?'badge-ok':'badge-warn'}">${c.done?'Comprado':'Pendente'}</span></td>
      <td style="text-align:center">
        ${!c.done?`<button class="btn btn-ghost btn-sm" onclick="entradaPorCompra(${idx})" title="Dar entrada no estoque">
          <i class="ti ti-package-import"></i> Entrada
        </button>`:`<span style="color:var(--green);font-size:12px"><i class="ti ti-check"></i> Recebido</span>`}
      </td>
    </tr>`;
  }).join('');
  document.getElementById('compras-tbody').innerHTML=rows;
  document.getElementById('compra-total').textContent=fmt(total);
  document.getElementById('compra-pend').textContent=pend;
  document.getElementById('compra-done').textContent=done;
  document.getElementById('compra-gasto').textContent=fmt(gasto);
}

function toggleCompra(idx,val){comprasData[idx].done=val;saveAll();renderCompras();}

function entradaPorCompra(idx){
  // Abre modal de entrada já preenchido com os dados da compra
  const c=comprasData[idx];
  openEntrada(c.ingId);
  setTimeout(()=>{
    document.getElementById('ent-qtd').value=c.qtd;
    document.getElementById('ent-custo').value=c.preco.toFixed(2);
    document.getElementById('ent-forn').value=c.fornecedor;
    updateEntradaPreview();
  },50);
}


// ── Modal de saída manual ──
let saidaIngId=null;
function openSaida(ingId){
  saidaIngId=ingId;
  const ing=DB.find(d=>d.id===ingId);
  document.getElementById('saida-ing-nome').textContent=ing.nome;
  document.getElementById('saida-ing-info').textContent=`${ing.categoria} · ${ing.un} · Custo médio: ${fmt(ing.custoMedio||0)}/${ing.un}`;
  const saldoAtual=ing.qtd||0;
  document.getElementById('saida-qtd-atual').textContent=saldoAtual+' '+ing.un;
  document.getElementById('saida-qtd-atual').style.color=saldoAtual<(ing.min||0)?'var(--red)':'var(--green)';
  document.getElementById('sai-qtd').value='';
  document.getElementById('sai-motivo').value='Uso cozinha';
  document.getElementById('sai-data').value=new Date().toISOString().split('T')[0];
  document.getElementById('sai-obs').value='';
  document.getElementById('saida-preview').style.display='none';
  document.getElementById('saida-overlay').style.display='flex';
}

function updateSaidaPreview(){
  const ingId=saidaIngId;if(!ingId)return;
  const ing=DB.find(d=>d.id===ingId);
  const qtd=parseFloat(document.getElementById('sai-qtd').value)||0;
  if(!qtd){document.getElementById('saida-preview').style.display='none';return;}
  const saldoAtual=ing.qtd||0;
  const novoSaldo=Math.max(0,saldoAtual-qtd);
  const valor=qtd*(ing.custoMedio||0);
  const min=ing.min||0;
  const statusLabel=novoSaldo<min?'⚠️ Crítico':novoSaldo<min*1.5?'⚡ Baixo':'✅ OK';
  const statusColor=novoSaldo<min?'var(--red)':novoSaldo<min*1.5?'var(--yellow)':'var(--green)';
  document.getElementById('prev-saida-saldo').textContent=novoSaldo.toFixed(2)+' '+ing.un;
  document.getElementById('prev-saida-saldo').style.color=statusColor;
  document.getElementById('prev-saida-valor').textContent=fmt(valor);
  document.getElementById('prev-saida-status').textContent=statusLabel;
  document.getElementById('prev-saida-status').style.color=statusColor;
  document.getElementById('saida-preview').style.display='block';
}

function confirmarSaida(){
  const ing=DB.find(d=>d.id===saidaIngId);if(!ing)return;
  const qtd=parseFloat(document.getElementById('sai-qtd').value);
  if(!qtd||qtd<=0){alert('Informe a quantidade retirada');return;}
  const ingS=DB.find(d=>d.id===saidaIngId);
  if(ingS&&qtd>(ingS.qtd||0)){
    if(!confirm(`Quantidade (${qtd}) maior que o estoque atual (${ingS.qtd||0}). Continuar?`))return;
  }
  const data=document.getElementById('sai-data').value;
  const motivo=document.getElementById('sai-motivo').value;
  const obs=document.getElementById('sai-obs').value.trim();
  // Atualiza saldo no DB
  const idxS=DB.findIndex(d=>d.id===saidaIngId);
  if(idxS>=0) DB[idxS].qtd=parseFloat(Math.max(0,(DB[idxS].qtd||0)-qtd).toFixed(3));
  const custoUnit=ingS?ingS.custoMedio:0;
  historicoData.push({
    id:nextHistId++,ingId:saidaIngId,tipo:'saida',
    qtd,custoUnit,total:parseFloat((qtd*custoUnit).toFixed(2)),
    data,forn:'',obs:motivo+(obs?' — '+obs:'')
  });
  saveAll();
  closeModal('saida-overlay');
  renderEstoque();
  showToast(`📤 Saída de ${qtd} ${ing.un} de ${ing.nome} registrada (${motivo}).`,'ok');
}

// Abre modal de entrada com seletor de ingrediente (botão do topbar)
function openEntradaGeneral(){
  // Usa o primeiro item crítico se houver, senão o primeiro do estoque
  const critico=DB.find(e=>(e.qtd||0)<(e.min||0)&&e.min>0);
  const alvo=critico||DB[0];
  if(alvo) openEntrada(alvo.id);
}

// ── Toast de feedback ──
function showToast(msg,type='ok'){
  const t=document.createElement('div');
  const col=type==='ok'?'var(--green)':type==='warn'?'var(--yellow)':'var(--red)';
  t.style.cssText=`position:fixed;bottom:24px;right:24px;background:var(--bg2);border:1px solid ${col};
    border-radius:10px;padding:12px 16px;font-size:13px;color:var(--text);z-index:9999;
    box-shadow:0 4px 20px rgba(0,0,0,.5);max-width:400px;line-height:1.5;
    animation:slideIn .2s ease`;
  t.textContent=msg;
  if(!document.getElementById('toast-style')){
    const s=document.createElement('style');
    s.id='toast-style';
    s.textContent='@keyframes slideIn{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}';
    document.head.appendChild(s);
  }
  document.body.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';t.style.transition='opacity .3s';setTimeout(()=>t.remove(),300)},3500);
}

// ═══════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════
document.addEventListener('click',e=>{
  if(!e.target.closest('.ing-dd-wrap')) document.getElementById('ff-ing-dd').style.display='none';
});

// Carrega dados persistidos e inicia o sistema
(function init(){
  const hadData = loadAll();
  // ING_CATS precisa incluir categorias personalizadas já salvas
  DB.forEach(d=>{ if(d.categoria && !ING_CATS.includes(d.categoria)) ING_CATS.push(d.categoria); });
  showScreen('dashboard');
  if(hadData){
    showToast('✅ Dados carregados — ' + DB.length + ' ingredientes, ' + fichas.length + ' fichas','ok');
  }
})();
