window.PAINEL = {
  cliente: "O Veraz",
  logo: "img/logo-cliente.png",
  gestor: { nome: "Hugo dos Santos", tel: "913 954 729", email: "hugo.santos@iniciativapme.pt" },
  // a partir de quantas pessoas um pedido conta como grupo (a sala privada tem 12 lugares)
  grupo: 8,
  // meses da estratégia, para o gráfico de evolução (outubro é o mês zero)
  serie: [["2026-10","out"],["2026-11","nov"],["2026-12","dez"],["2027-01","jan"],["2027-02","fev"],["2027-03","mar"],["2027-04","abr"]],
  meses: [
    {
      id: "2026-10",
      nome: "Outubro 2026",
      anterior: "setembro",
      nota: "Mês zero da estratégia · comparado com setembro",
      atualizado: "12/11/2026",

      resumo: {
        destaque: { k: "Contactos pelo Instagram", n: "9", t: "mais do dobro de setembro (4)",
          sub: "6 cliques no site, 2 chamadas e 1 pedido de direções. Os cliques no site começaram a 24/10, quando o link de reservas entrou na bio." },
        cartoes: [
          { k: "Pedidos de mesa pelo site", n: "8", t: "para 41 pessoas", v: "▼ 11%" },
          { k: "Pessoas que nos viram", n: "1 175", t: "no Instagram, nos últimos 28 dias", v: "= estável" },
          { k: "Interações", n: "168", t: "gostos, comentários, partilhas e guardados no Instagram", v: "▲ 42%" },
          { k: "Novos seguidores", n: "+16", t: "Instagram e Facebook", v: "▼ 16%" }
        ],
        proximoTitulo: "Em novembro vamos",
        proximo: [
          "Publicar 4 vídeos com o Nelinho e a Joana, para chegar a mais pessoas da região",
          "Sugerir os jantares durante a semana em algumas publicações, com reserva pelo site e por WhatsApp",
          "Viver o São Martinho com a casa e começar a divulgar os jantares de Natal na sala privada"
        ]
      },

      publicacoes: [
        { img: "img/post-1.jpg", formato: "Fotografia", titulo: "O Veraz também se faz deste lado da mesa", url: "https://www.instagram.com/p/DeKbCPrAGuy/",
          texto: "251 pessoas e 25 interações no Instagram, 1 534 visualizações no Facebook. Mostrar quem recebe e serve cria ligação." },
        { img: "img/post-2.jpg", formato: "Fotografia", titulo: "A garrafeira e o vinho certo", url: "https://www.instagram.com/p/Deezxq5CCVh/",
          texto: "281 pessoas e 17 interações. O vinho do Nelinho continua a puxar pela conversa." },
        { img: "img/post-3.jpg", formato: "Fotografia", titulo: "Bacalhau com crosta dourada", url: "https://www.instagram.com/p/DetndnKFb8X/",
          texto: "330 pessoas e 14 interações. O prato visto de perto abre o apetite." }
      ],

      reservas: {
        resumoPessoas: "25 num jantar de grupo e 16 em mesas de 2 e 3",
        porDia: [["Segunda",2],["Terça",0],["Quarta",1],["Quinta",1],["Sexta",0],["Sábado",3],["Domingo",1]],
        notas: [
          "<b>5 em cada 8</b> pediram mesa para o próprio dia. A decisão é tomada em cima da hora, por isso as publicações do jantar saem ao fim da tarde.",
          "Houve 3 pedidos para jantar durante a semana (segunda e quarta), contra 6 em setembro. É o momento que vamos sugerir em algumas publicações a partir de novembro.",
          "O jantar de grupo para 25 pessoas foi pedido com 20 dias de antecedência. Os grupos de fim de ano planeiam cedo, e a sala privada entra na comunicação de novembro e dezembro.",
          "Chegou 1 pedido para quinta-feira, dia de folga. A quinta-feira vai ficar bloqueada no formulário do site."
        ],
        pedidos: [
          { feitoISO: "2026-10-01", feito: "01/10", data: "21/10", dia: "qua", hora: "20h00", pessoas: 25 },
          { feitoISO: "2026-10-10", feito: "10/10", data: "10/10", dia: "sáb", hora: "20h30", pessoas: 2 },
          { feitoISO: "2026-10-12a", feito: "12/10", data: "12/10", dia: "seg", hora: "19h30", pessoas: 2 },
          { feitoISO: "2026-10-12b", feito: "12/10", data: "12/10", dia: "seg", hora: "21h00", pessoas: 3 },
          { feitoISO: "2026-10-14", feito: "14/10", data: "15/10", dia: "qui", hora: "12h30", pessoas: 2 },
          { feitoISO: "2026-10-22", feito: "22/10", data: "25/10", dia: "dom", hora: "13h00", pessoas: 3 },
          { feitoISO: "2026-10-24a", feito: "24/10", data: "24/10", dia: "sáb", hora: "13h45", pessoas: 2 },
          { feitoISO: "2026-10-24b", feito: "24/10", data: "24/10", dia: "sáb", hora: "20h30", pessoas: 2 }
        ],
        fonte: "Pedidos feitos pelo formulário do site overaz.pt, com os pedidos repetidos contados uma vez. As reservas por telefone e WhatsApp ficam fora destes números. Em setembro houve 9 pedidos para 35 pessoas."
      },

      objetivos: [
        { nome: "Pessoas que nos veem no Instagram", indicador: "contas diferentes alcançadas por mês", partida: 1300, atual: 1175, meta: 2500 },
        { nome: "Contactos pelo Instagram", indicador: "cliques no site, chamadas, direções e mensagens", partida: 4, atual: 9, meta: 30 },
        { nome: "Seguidores no Instagram", indicador: "total de seguidores", partida: 2582, atual: 2595, meta: 2800 },
        { nome: "Interações no Instagram", indicador: "gostos, comentários, partilhas e guardados por mês", partida: 118, atual: 168, meta: 250 }
      ],
      objetivosNota: "Objetivos a 6 meses da estratégia de comunicação, que arranca em novembro. Outubro é o mês zero e serve de referência. Os jantares durante a semana passam a ser acompanhados pelos pedidos do site (3 em outubro, 6 em setembro), com a meta a definir em conjunto.",

      redes: [
        { rede: "Instagram", conta: "@o_veraz", linhas: [
          ["Visualizações", "10 246", "▲ 4%", null, "setembro: 9 824"],
          ["Pessoas alcançadas", "1 175", "= estável", "contas diferentes nos últimos 28 dias", "setembro: 1 187"],
          ["Pessoas que ainda não nos seguem", "396", "▲ 24%", "alcance fora dos seguidores", "setembro: 319"],
          ["Interações", "168", "▲ 42%", "gostos, comentários, partilhas e guardados", "setembro: 118"],
          ["Seguidores", "2 595", "= estável", "ganhos no mês", "+13 (set: +13)"],
          ["Visitas ao perfil", "257", "▼ 20%", null, "setembro: 322"],
          ["Cliques no site, chamadas e direções", "9", "▲ 125%", null, "setembro: 4"]
        ], nota: "As visitas ao perfil desceram. Em novembro, cada publicação passa a ter um convite diferente (reservar pelo link, enviar mensagem, guardar, partilhar)." },
        { rede: "Facebook", conta: "O Veraz Restaurante em Penafiel", linhas: [
          ["Visualizações", "10 242", "▼ 7%", "sem anúncios", "setembro: 11 011"],
          ["Interações", "243", "▲ 8%", null, "setembro: 225"],
          ["Seguidores", "6 649", "= estável", "ganhos no mês", "+3 (set: +6)"],
          ["Visitas à página", "884", "▼ 19%", null, "setembro: 1 085"]
        ] }
      ]
    }
  ]
};
