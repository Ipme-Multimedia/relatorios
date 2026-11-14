window.PAINEL = {
  cliente: "Quinta da Bandeirinha",
  logo: "img/logo-cliente.png",
  gestor: { nome: "Hugo dos Santos", tel: "913 954 729", email: "hugo.santos@iniciativapme.pt" },
  // a partir de quantas pessoas um pedido conta como grupo
  grupo: 10,
  graficoTitulo: "Contactos pelo digital, mês a mês (meta: 240)",
  // meses da estratégia, para o gráfico de evolução (outubro é o mês zero)
  serie: [["2026-10","out"],["2026-11","nov"],["2026-12","dez"],["2027-01","jan"],["2027-02","fev"],["2027-03","mar"],["2027-04","abr"]],
  meses: [
    {
      id: "2026-10",
      nome: "Outubro 2026",
      anterior: "setembro",
      nota: "Mês zero da estratégia · comparado com setembro",
      atualizado: "14/11/2026",
      grafico: 189,

      resumo: {
        destaque: { k: "Passagem de ano", n: "Esgotada", t: "32 pedidos de reserva pelo site, para 151 pessoas",
          sub: "6 pedidos foram de grupos de 10 ou mais pessoas. A campanha da passagem de ano trouxe 22 destes pedidos, a 3,28€ cada." },
        cartoes: [
          { k: "Contactos pelo digital", n: "189", t: "cliques no site, chamadas e toques em contactos, no Instagram e no Google", v: "▲ 38%" },
          { k: "Pessoas que nos viram", n: "5 619", t: "no Instagram, nos últimos 28 dias", v: "▲ 78%" },
          { k: "Interações", n: "482", t: "gostos, comentários, partilhas e guardados no Instagram", v: "▼ 14%" },
          { k: "Novos seguidores", n: "+201", t: "83 no Instagram e 118 no Facebook", v: "▲ 70%" }
        ],
        proximoTitulo: "Em novembro vamos",
        proximo: [
          "Publicar 3 reels: os 40 anos da quinta (7/11), as decorações (14/11) e a festa num casamento real (24/11)",
          "Mostrar as pessoas da quinta, a começar pela equipa que recebe os noivos (21/11)",
          "Medir convosco os casamentos marcados para 2027 e quantos pedidos da campanha deram visita"
        ]
      },

      publicacoes: [
        { img: "img/post-1.jpg", formato: "Fotografia", titulo: "O acompanhamento aos noivos", url: "https://www.instagram.com/p/DecHbsyFVmN/",
          texto: "12 017 visualizações no Facebook e 34 interações no Instagram, as mais do mês. Responde ao que os noivos mais receiam: ter de tratar de tudo sozinhos." },
        { img: "img/post-2.jpg", formato: "Fotografia", titulo: "Jantares de Natal para equipas", url: "https://www.instagram.com/p/DeubMiRiNGs/",
          texto: "804 pessoas no Instagram, o maior alcance do mês, e 2 176 visualizações no Facebook, na altura em que as empresas marcam o jantar." },
        { img: "img/post-3.jpg", formato: "Fotografia", titulo: "Os jardins e o convite para a visita", url: "https://www.instagram.com/p/DehX4xUCmsa/",
          texto: "6 214 visualizações no Facebook e 464 pessoas no Instagram. A paisagem com um convite direto para conhecer a quinta." }
      ],

      reservas: {
        resumoPessoas: "média de 4,7 por pedido · 6 grupos de 10 ou mais",
        porDia: [["Passagem de ano", 32]],
        notas: [
          "<b>2 em cada 3 pedidos</b> chegaram nas duas primeiras semanas de outubro, logo a seguir ao arranque da campanha. O réveillon esgotou.",
          "Um terço dos pedidos foi feito depois das 20h, e a quinta-feira foi o dia com mais pedidos (10).",
          "Muitos pedidos perguntam o preço por pessoa. No próximo formulário vale a pena indicar logo o valor e o que inclui, para poupar tempo nas respostas."
        ],
        pedidos: [
          {feitoISO: "2026-10-01a", feito: "01/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 5},
          {feitoISO: "2026-10-01b", feito: "01/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 5},
          {feitoISO: "2026-10-02a", feito: "02/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 10},
          {feitoISO: "2026-10-03a", feito: "03/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 6},
          {feitoISO: "2026-10-04a", feito: "04/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 10},
          {feitoISO: "2026-10-06a", feito: "06/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 4},
          {feitoISO: "2026-10-06b", feito: "06/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 2},
          {feitoISO: "2026-10-06c", feito: "06/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 2},
          {feitoISO: "2026-10-07a", feito: "07/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 4},
          {feitoISO: "2026-10-07b", feito: "07/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 3},
          {feitoISO: "2026-10-07c", feito: "07/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 10},
          {feitoISO: "2026-10-07d", feito: "07/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 2},
          {feitoISO: "2026-10-08a", feito: "08/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 6},
          {feitoISO: "2026-10-08b", feito: "08/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 6},
          {feitoISO: "2026-10-08c", feito: "08/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 2},
          {feitoISO: "2026-10-08d", feito: "08/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 8},
          {feitoISO: "2026-10-10a", feito: "10/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 10},
          {feitoISO: "2026-10-11a", feito: "11/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 10},
          {feitoISO: "2026-10-12a", feito: "12/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 1},
          {feitoISO: "2026-10-12b", feito: "12/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 2},
          {feitoISO: "2026-10-13a", feito: "13/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 3},
          {feitoISO: "2026-10-14a", feito: "14/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 4},
          {feitoISO: "2026-10-15a", feito: "15/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 2},
          {feitoISO: "2026-10-15b", feito: "15/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 5},
          {feitoISO: "2026-10-15c", feito: "15/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 5},
          {feitoISO: "2026-10-17a", feito: "17/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 2},
          {feitoISO: "2026-10-20a", feito: "20/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 1},
          {feitoISO: "2026-10-22a", feito: "22/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 5},
          {feitoISO: "2026-10-22b", feito: "22/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 2},
          {feitoISO: "2026-10-23a", feito: "23/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 2},
          {feitoISO: "2026-10-25a", feito: "25/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 10},
          {feitoISO: "2026-10-27a", feito: "27/10", data: "31/12", dia: "qui", hora: "réveillon", pessoas: 2}
        ],
        fonte: "Pedidos feitos pelo formulário da passagem de ano em quintadabandeirinha.pt, com os pedidos repetidos contados uma vez. Os pedidos por telefone, mensagem ou Facebook ficam fora destes números. O formulário abriu a 30 de setembro, com 2 pedidos nesse dia."
      },

      objetivos: [
        { nome: "Seguidores no Instagram", indicador: "total de seguidores", partida: 2113, atual: 2146, meta: 3000 },
        { nome: "Dar a conhecer a novos casais", indicador: "contas alcançadas no Instagram, em 28 dias", partida: 5600, atual: 5619, meta: 9000 },
        { nome: "Mais contactos pelo digital", indicador: "cliques no site, chamadas e toques em contactos, no Instagram e no Google, por mês", partida: 162, atual: 189, meta: 240 }
      ],
      objetivosNota: "Objetivos a 6 meses da estratégia de comunicação, que arrancou a 1 de novembro. Outubro é o mês zero e serve de referência. Os casamentos marcados para 2027 (partida: 32, meta: 44) e os casamentos com 100 ou mais convidados entram a partir de novembro, com os números da quinta.",

      redes: [
        { rede: "Instagram", conta: "@quintadabandeirinha", linhas: [
          ["Visualizações", "35 345", "▲ 13%", null, "setembro: 31 252"],
          ["Pessoas alcançadas", "5 619", "▲ 78%", "contas diferentes nos últimos 28 dias", "setembro: 3 164"],
          ["Interações", "482", "▼ 14%", "gostos, comentários, partilhas e guardados", "setembro: 560"],
          ["Seguidores", "2 146", "▲ 66%", "ganhos no mês", "+83 (set: +50)"],
          ["Visitas ao perfil", "728", "▲ 36%", null, "setembro: 537"],
          ["Cliques no site, chamadas, direções e email", "70", "▲ 119%", null, "setembro: 32"]
        ], nota: "Inclui o alcance das campanhas. Em outubro não houve reels; em setembro, os 2 reels chegaram a 638 e a 1 578 pessoas. Os reels voltam em novembro." },
        { rede: "Facebook", conta: "Quinta da Bandeirinha", linhas: [
          ["Visualizações", "53 463", "▼ 18%", "sem anúncios", "setembro: 65 175"],
          ["Interações", "8 151", "▼ 27%", null, "setembro: 11 184"],
          ["Seguidores", "7 772", "▲ 74%", "ganhos no mês", "+118 (set: +68)"],
          ["Visitas à página", "6 431", "▲ 65%", null, "setembro: 3 896"]
        ], nota: "Setembro teve a publicação do réveillon, com 18 486 visualizações sozinha." },
        { rede: "Google", conta: "Perfil de Empresa", linhas: [
          ["Chamadas", "45", "▼ 10%", null, "setembro: 50"],
          ["Pedidos de direções", "238", "= estável", null, "setembro: 234"],
          ["Cliques no site", "74", "▲ 35%", null, "setembro: 55"]
        ] }
      ],

      anuncios: {
        cartoes: [
          { k: "Investimento", n: "149,95€", t: "financiado pelo programa Coaching", v: null },
          { k: "Pedidos gerados", n: "31", t: "22 de réveillon e 9 de casamentos", v: null },
          { k: "Cliques para o site", n: "2 373", t: "nas três campanhas", v: null },
          { k: "Custo por pedido", n: "4,32€", t: "média das duas campanhas com pedidos", v: null }
        ],
        campanhas: [
          ["Passagem de ano 2026/27 · terminada", "22 pedidos", null, "72,24€ · 12 897 pessoas", "3,28€ cada"],
          ["Casamentos 2027 · nova página", "9 pedidos", null, "61,74€ · 6 666 pessoas", "6,86€ cada"],
          ["Jantares de Natal · fim de outubro", "148 cliques", null, "15,97€ · 10 450 pessoas", "sem conversas ainda"]
        ],
        aprendemos: [
          "A campanha do réveillon encheu a noite: 22 pedidos a 3,28€ cada, e a passagem de ano esgotou.",
          "A campanha de casamentos já traz pedidos pela nova página (9 em outubro).",
          "Os jantares de Natal chegaram a 10 450 pessoas, mas ainda não geraram conversas."
        ],
        vamos: [
          "Acompanhar convosco quantos pedidos de casamento deram visita",
          "Ajustar os jantares de Natal para levar as pessoas a enviar mensagem",
          "Mostrar os anúncios só no Instagram e no Facebook, onde estão os cliques de melhor qualidade"
        ],
        nota: "Valores da conta de anúncios da Meta, só das campanhas da Quinta da Bandeirinha. Até ao final de 2026, o investimento é financiado pelo programa Coaching. Em setembro foram investidos 62,68€."
      }
    }
  ]
};
