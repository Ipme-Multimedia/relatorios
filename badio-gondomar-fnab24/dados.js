window.PAINEL = {
  cliente: "Badio Gold Gondomar",
  logo: "img/logo-cliente.png",
  gestor: { nome: "Hugo dos Santos", tel: "913 954 729", email: "hugo.santos@iniciativapme.pt" },
  // meses da estratégia, para o gráfico de evolução
  serie: [["2026-10","out"],["2026-11","nov"],["2026-12","dez"],["2027-01","jan"],["2027-02","fev"],["2027-03","mar"],["2027-04","abr"]],
  meses: [
    {
      id: "2026-10",
      nome: "Outubro 2026",
      anterior: "setembro",
      nota: "Mês 0 da estratégia · comparado com setembro",
      atualizado: "12/11/2026",

      resumo: {
        destaque: { k: "Pedidos de mesa pelo site", n: "11", t: "63 pessoas, todas ao jantar",
          sub: "Todos para sexta, sábado ou domingo. Inclui 2 grupos, de 17 e de 20 pessoas." },
        cartoes: [
          { k: "Pessoas que nos viram", n: "11 933", t: "no Instagram", v: "▲ 21%" },
          { k: "Contactos", n: "417", t: "cliques, chamadas e direções no Instagram e no Google", v: "▲ 3%" },
          { k: "Novos seguidores", n: "+476", t: "Instagram e Facebook", v: "▲ 15%" },
          { k: "Investimento", n: "187€", t: "em anúncios", v: "= estável" }
        ],
        proximoTitulo: "Em novembro vamos",
        proximo: [
          "Lançar os menus de grupo e de Natal, nas publicações, nos anúncios e no site",
          "Voltar aos 3 vídeos por mês, com humor e movimento",
          "Dar razões concretas para jantar durante a semana"
        ]
      },

      publicacoes: [
        { img: "img/post-1.jpg", formato: "Reel", titulo: "Rodízio de Tapas, às quartas", url: "https://www.instagram.com/reel/DeHoVavDWvN/",
          texto: "748 pessoas no Instagram e 1 171 no Facebook. Um dia certo e um motivo para vir." },
        { img: "img/post-2.jpg", formato: "Reel", titulo: "Os camarões", url: "https://www.instagram.com/reel/Derk1xyDXEd/",
          texto: "362 pessoas no Instagram e 709 no Facebook. O prato com mais partilhas do mês." },
        { img: "img/post-3.jpg", formato: "Fotografia", titulo: "Quarta de Tapas", url: "https://www.instagram.com/p/DeeNjTplSuJ/",
          texto: "489 pessoas no Instagram e 504 no Facebook. Preço claro e dia certo." }
      ],

      reservas: {
        resumoPessoas: "37 em 2 grupos e 26 em mesas de 2 a 4",
        porDia: [["Seg a qui",0],["Sexta",5],["Sábado",5],["Domingo",1]],
        notas: [
          "<b>8 em cada 11</b> pediram mesa para o próprio dia ou para o dia seguinte. Por isso vamos publicar o jantar à sexta e ao sábado à tarde, quando a decisão é tomada.",
          "Não houve pedidos para jantares de segunda a quinta. São os dias que a estratégia quer reforçar.",
          "O grupo de 17 pessoas pediu mesa a 22/10 para 27/11, mais de um mês antes. Os grupos de fim de ano já estão a procurar."
        ],
        pedidos: [
          { feitoISO: "2026-10-01", feito: "01/10", data: "02/10", dia: "sex", hora: "20h30", pessoas: 3 },
          { feitoISO: "2026-10-03", feito: "03/10", data: "04/10", dia: "dom", hora: "20h00", pessoas: 3 },
          { feitoISO: "2026-10-09", feito: "09/10", data: "09/10", dia: "sex", hora: "21h00", pessoas: 4 },
          { feitoISO: "2026-10-17a", feito: "17/10", data: "17/10", dia: "sáb", hora: "20h00", pessoas: 2 },
          { feitoISO: "2026-10-17b", feito: "17/10", data: "17/10", dia: "sáb", hora: "20h00", pessoas: 2 },
          { feitoISO: "2026-10-20", feito: "20/10", data: "23/10", dia: "sex", hora: "19h30", pessoas: 4 },
          { feitoISO: "2026-10-22", feito: "22/10", data: "27/11", dia: "sex", hora: "20h00", pessoas: 17 },
          { feitoISO: "2026-10-24", feito: "24/10", data: "24/10", dia: "sáb", hora: "jantar", pessoas: 20 },
          { feitoISO: "2026-10-30a", feito: "30/10", data: "30/10", dia: "sex", hora: "20h30", pessoas: 3 },
          { feitoISO: "2026-10-30b", feito: "30/10", data: "31/10", dia: "sáb", hora: "20h30", pessoas: 2 },
          { feitoISO: "2026-10-31", feito: "31/10", data: "31/10", dia: "sáb", hora: "19h30", pessoas: 3 }
        ],
        fonte: "Pedidos feitos pelo formulário do site, com os pedidos repetidos contados uma vez. As reservas por telefone ficam fora destes números."
      },

      objetivos: [
        { nome: "Contactos pelo Instagram", indicador: "cliques no site e chamadas", partida: 91, atual: 143, meta: 150 },
        { nome: "Seguidores no Instagram", indicador: "total de seguidores", partida: 4181, atual: 4414, meta: 4700 },
        { nome: "Interações no Instagram", indicador: "gostos, comentários, partilhas e guardados por mês", partida: 556, atual: 380, meta: 900 },
        { nome: "Visualizações no Instagram", indicador: "por mês", partida: 41000, atual: 38537, meta: 60000 }
      ],
      objetivosNota: "Objetivos a 6 meses da estratégia de comunicação, que arranca em novembro. A visibilidade e as interações dependem sobretudo de vídeo, e são os indicadores que esperamos ver subir primeiro.",

      redes: [
        { rede: "Instagram", conta: "@badiogoldgondomar", linhas: [
          ["Visualizações", "38 537", "▼ 6%", null, "setembro: 41 165"],
          ["Pessoas alcançadas", "11 933", "▲ 21%", "contas diferentes nos últimos 28 dias", "setembro: 9 832"],
          ["Interações", "380", "▼ 32%", "gostos, comentários, partilhas e guardados", "setembro: 556"],
          ["Seguidores", "4 414", "▲ 22%", "ganhos no mês", "+233 (set: +191)"],
          ["Visitas ao perfil", "2 244", "▼ 19%", null, "setembro: 2 767"],
          ["Cliques no site e chamadas", "143", "▲ 57%", null, "setembro: 91"]
        ], nota: "A descida das interações acompanha o menor número de vídeos em outubro (2), o formato com mais interação." },
        { rede: "Facebook", conta: "Badio Gold Gondomar", linhas: [
          ["Visualizações", "155 034", "= estável", "91% vindas dos anúncios", "setembro: 158 765"],
          ["Visualizações sem anúncios", "14 629", "▲ 5%", null, "setembro: 13 972"],
          ["Interações", "3 949", "▼ 18%", null, "setembro: 4 819"],
          ["Seguidores", "3 111", "▲ 9%", "ganhos no mês", "+243 (set: +222)"],
          ["Visitas à página", "4 082", "▲ 8%", null, "setembro: 3 765"]
        ] },
        { rede: "Google", conta: "Perfil de Empresa", linhas: [
          ["Visualizações do perfil", "2 160", "▼ 5%", "pesquisa e mapas", "setembro: 2 279"],
          ["Chamadas", "78", "▼ 32%", null, "setembro: 115"],
          ["Pedidos de direções", "138", "= estável", null, "setembro: 138"],
          ["Cliques no site", "58", "= estável", null, "setembro: 59"],
          ["Novas avaliações", "3", null, null, null]
        ] }
      ],

      anuncios: {
        cartoes: [
          { k: "Investimento", n: "187€", t: "pago diretamente à Meta", v: "= estável" },
          { k: "Pessoas alcançadas", n: "23 517", t: "pela campanha de notoriedade", v: "▲ 6%" },
          { k: "Visitas ao perfil", n: "2 539", t: "vindas dos anúncios, a 0,02€ cada", v: "▲ 17%" },
          { k: "Cliques no menu", n: "1 739", t: "no menu executivo semanal", v: "▼ 28%" }
        ],
        campanhas: [
          ["Notoriedade", "2 539 visitas", null, "61,36€ · 23 517 pessoas", "0,02€ cada"],
          ["Menu executivo · 06 a 09/10", "694 cliques", null, "29,96€ · 17 820 pessoas", "0,04€ cada"],
          ["Menu executivo · 12 a 16/10", "695 cliques", null, "29,92€ · 19 782 pessoas", "0,04€ cada"],
          ["Menu executivo · 19 a 23/10", "69 cliques", null, "27,64€ · 4 165 pessoas", "0,40€ cada"],
          ["Menu executivo · 26 a 30/10", "245 cliques", null, "29,78€ · 8 720 pessoas", "0,12€ cada"],
          ["Menu executivo · 28/09 a 02/10", "36 cliques", null, "8,39€ nos dias de outubro", "0,23€ cada"]
        ],
        aprendemos: [
          "A campanha de notoriedade trouxe mais visitas ao perfil por menos dinheiro do que em setembro.",
          "As duas primeiras semanas do menu mantiveram o custo habitual de 0,04€ por clique.",
          "Nas semanas de 19/10 e 26/10, parte dos anúncios foi mostrada em aplicações e sites fora do Facebook e do Instagram, com cliques de pouca qualidade. Esses cliques não entram nestes números."
        ],
        vamos: [
          "Mostrar os anúncios do menu só no Facebook e no Instagram",
          "Lançar a campanha de grupos e Natal, com destino ao formulário de reservas do site",
          "Impulsionar todos os meses o vídeo com melhor resultado"
        ],
        nota: "Valores da conta de anúncios da Meta, só das campanhas do Badio Gold Gondomar."
      }
    }
  ]
};
