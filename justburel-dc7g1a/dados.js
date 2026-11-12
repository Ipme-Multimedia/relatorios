window.PAINEL = {
  cliente: "Just Burel",
  logo: "img/logo-cliente.png",
  gestor: { nome: "Hugo dos Santos", tel: "913 954 729", email: "hugo.santos@iniciativapme.pt" },
  // a Just Burel não recebe pedidos pelo site e os anúncios são acompanhados à parte
  separadores: ["resumo", "objetivos", "redes"],
  graficoTitulo: "Visitas ao perfil no Instagram, mês a mês (meta: 400)",
  // outubro é o mês zero; novembro e dezembro são os meses do novo acompanhamento
  serie: [["2026-10","out"],["2026-11","nov"],["2026-12","dez"]],
  meses: [
    {
      id: "2026-10",
      nome: "Outubro 2026",
      anterior: "agosto e setembro",
      nota: "Ponto de partida do novo acompanhamento",
      atualizado: "12/11/2026",
      grafico: 221,

      resumo: {
        destaque: { k: "Cliques no site pelo Instagram", n: "28", t: "mais 27% do que em setembro (22)",
          sub: "Outubro foi o primeiro mês sem anúncios desde julho. O Instagram chegou sobretudo a quem já segue a Just Burel, mas mais pessoas seguiram para o site e a conta ganhou 30 seguidores." },
        cartoes: [
          { k: "Pessoas que nos viram", n: "1 416", t: "contas diferentes no Instagram, nos últimos 28 dias", v: null },
          { k: "Interações", n: "382", t: "gostos, comentários, partilhas e guardados no Instagram", v: null },
          { k: "Novos seguidores", n: "+30", t: "no Instagram, que tem agora 3 640", v: "= estável" },
          { k: "Visitas ao perfil", n: "221", t: "no Instagram, com a meta de 400 por mês", v: null }
        ],
        proximoTitulo: "Em novembro vamos",
        proximo: [
          "Publicar 4 reels com a loja e as pessoas, para chegar a quem ainda não segue a Just Burel",
          "Contar a história de cada peça, com um convite claro em cada publicação, em português e inglês",
          "Preparar o Natal com o conteúdo da recolha de 12/11: presentes, envios para a Europa e a família por trás da marca"
        ]
      },

      publicacoes: [
        { img: "img/post-1.jpg", formato: "Fotografia", titulo: "Sapatilhas em burel", url: "https://www.instagram.com/p/De9LczTCK6I/",
          texto: "489 pessoas e 33 interações, o dobro da média do mês. Uma peça concreta e reconhecível chega a mais gente." },
        { img: "img/post-2.jpg", formato: "Fotografia", titulo: "Chapéu em burel", url: "https://www.instagram.com/p/De1WM2RlaTm/",
          texto: "194 pessoas e 30 interações: 15% de quem viu reagiu, a melhor taxa do mês." },
        { img: "img/post-3.jpg", formato: "Fotografia · Facebook", rede: "Facebook", titulo: "O charme dos tons naturais", url: "https://www.facebook.com/113748150746838/posts/1395627762558864",
          texto: "652 visualizações e 438 pessoas no Facebook, a publicação mais vista da página." }
      ],

      objetivos: [
        { nome: "Visitas ao perfil", indicador: "no Instagram, por mês", partida: 221, atual: 221, meta: 400 },
        { nome: "Interações", indicador: "gostos, comentários, partilhas e guardados por mês", partida: 382, atual: 382, meta: 600 },
        { nome: "Seguidores no Instagram", indicador: "total no fim de dezembro", partida: 3625, atual: 3640, meta: 3750 },
        { nome: "Reels", indicador: "vídeos publicados por mês", partida: 0, atual: 0, meta: 4 }
      ],
      objetivosNota: "Metas combinadas para novembro e dezembro. Outubro é o ponto de partida, por isso as barras começam a encher a partir de novembro. Os seguidores contam desde 16/10 (3 625): para chegar aos 3 750, a conta precisa de cerca de 55 seguidores por mês. Novembro tem os 4 reels agendados.",

      redes: [
        { rede: "Instagram", conta: "@justburel", linhas: [
          ["Visualizações", "8 736", null, null, "set.*: 32 894 · ago.*: 49 905"],
          ["Pessoas alcançadas", "1 416", null, "contas diferentes nos últimos 28 dias", "set.*: 14 147 · ago.*: 28 127"],
          ["Pessoas que ainda não nos seguem", "832", null, "alcance fora dos seguidores", "set.*: 21 949 · ago.*: 34 353"],
          ["Interações", "382", null, "gostos, comentários, partilhas e guardados", "set.*: 519 · ago.*: 911"],
          ["Seguidores", "3 640", "= estável", "ganhos no mês", "+30 (set.*: +31)"],
          ["Visitas ao perfil", "221", null, null, "set.*: 288 · ago.*: 990"],
          ["Cliques no site", "28", "▲ 27%", null, "set.*: 22 · ago.*: 88"]
        ], nota: "Sem anúncios, o Instagram chega sobretudo a quem já segue. Os reels de novembro são a forma de chegar a pessoas novas." },
        { rede: "Facebook", conta: "Just Burel", linhas: [
          ["Visualizações", "5 372", null, "orgânicas", "set.*: 10 318 · ago.*: 15 133"],
          ["Interações", "282", null, null, "set.*: 2 922 · ago.*: 2 107"],
          ["Seguidores", "4 427", "= estável", "ganhos no mês", "0 (set.*: +23)"],
          ["Visitas à página", "243", null, null, "set.*: 504 · ago.*: 896"]
        ], nota: "* Agosto e setembro tiveram anúncios ativos e servem apenas de referência. Em outubro, cada publicação no Facebook teve em média 499 visualizações, mais do que no Instagram." }
      ]
    }
  ]
};
