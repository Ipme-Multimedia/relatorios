window.PAINEL = {
  cliente: "Badio Porto",
  logo: "img/logo-cliente.png",
  gestor: { nome: "Hugo dos Santos", tel: "913 954 729", email: "hugo.santos@iniciativapme.pt" },
  // o Badio Porto reserva pelo sistema de reservas, por isso não há separador de pedidos do site
  separadores: ["resumo", "objetivos", "redes", "anuncios"],
  graficoTitulo: "Visualizações no Instagram, mês a mês",
  graficoFmt: function (v) { return Math.round(v / 1000) + " mil"; },
  // meses da estratégia, para o gráfico de evolução
  serie: [["2026-10","out"],["2026-11","nov"],["2026-12","dez"],["2027-01","jan"],["2027-02","fev"],["2027-03","mar"],["2027-04","abr"]],
  meses: [
    {
      id: "2026-10",
      nome: "Outubro 2026",
      anterior: "setembro",
      nota: "Mês 0 da estratégia · comparado com setembro",
      atualizado: "12/11/2026",
      grafico: 185179,

      resumo: {
        destaque: { k: "Visualizações no Instagram e no Facebook", n: "382 592", t: "mais do triplo de setembro",
          sub: "O mês com mais visibilidade desde a abertura da casa nova. As noites de sexta com DJ foram o conteúdo que mais resultou." },
        cartoes: [
          { k: "Pessoas que nos viram", n: "43 930", t: "no Instagram, nos últimos 28 dias", v: "▲ 941%" },
          { k: "Contactos", n: "1 391", t: "direções, cliques no site e chamadas no Google e no Instagram", v: "= estável" },
          { k: "Novos seguidores", n: "+300", t: "Instagram (+222) e Facebook (+78)", v: "▲ 92%" },
          { k: "Avaliações novas no Google", n: "+40", t: "média de 4,6 em 1 038 opiniões", v: null }
        ],
        proximoTitulo: "Em novembro vamos",
        proximo: [
          "Simplificar o caminho para a reserva, com o link do Instagram direto para a reserva online",
          "Anunciar o almoço e os jantares de Natal só no Instagram e no Facebook",
          "Rever o Perfil do Google e começar a medir as reservas por hora"
        ]
      },

      publicacoes: [
        { img: "img/post-1.jpg", formato: "Reel", titulo: "Sexta à noite com DJ", url: "https://www.instagram.com/reel/DehdmYtFK3o/",
          texto: "1 661 pessoas e 68 interações. Partilhado 17 vezes, com quem queriam trazer." },
        { img: "img/post-2.jpg", formato: "Carrossel", titulo: "Sextas com música", url: "https://www.instagram.com/p/DeOqx9wCJa5/",
          texto: "1 164 pessoas e 39 interações. A novidade com data e hora claras." },
        { img: "img/post-3.jpg", formato: "Reel", titulo: "A noite não tem hora para acabar", url: "https://www.instagram.com/reel/Dey2F-eDYn6/",
          texto: "1 078 pessoas e 59 interações. O mesmo tema na semana seguinte manteve o interesse." }
      ],

      objetivos: [
        { nome: "Visualizações no Instagram", indicador: "por mês", partida: 88000, atual: 185179, meta: 130000 },
        { nome: "Cliques no link do Instagram", indicador: "caminho para a reserva online", partida: 155, atual: 149, meta: 220 },
        { nome: "Seguidores no Instagram", indicador: "total de seguidores", partida: 6780, atual: 6884, meta: 7500 },
        { nome: "Avaliações novas no Google", indicador: "por mês, mantendo a média de 4,6", partida: 0, atual: 40, meta: 10 }
      ],
      objetivosNota: "Objetivos a 6 meses da estratégia de comunicação, que arranca em novembro. As visualizações já passaram a meta, com apoio dos anúncios. Para medir as reservas depois das 21h e ao almoço precisamos do resumo mensal do sistema de reservas.",

      redes: [
        { rede: "Instagram", conta: "@badioporto", linhas: [
          ["Visualizações", "185 179", "▲ 382%", null, "setembro: 38 395"],
          ["Pessoas alcançadas", "43 930", "▲ 941%", "contas diferentes nos últimos 28 dias", "setembro: 4 219"],
          ["Alcance sem anúncios", "6 914", "= estável", "soma diária", "setembro: 6 837"],
          ["Interações", "1 392", "▲ 77%", "gostos, comentários, partilhas e guardados", "setembro: 788"],
          ["Seguidores", "6 884", "▲ 181%", "ganhos no mês", "+222 (set: +79)"],
          ["Visitas ao perfil", "4 209", "▲ 207%", null, "setembro: 1 372"],
          ["Toques em contactos", "197", "▲ 129%", "site, chamar e direções", "setembro: 86"]
        ], nota: "A maior parte do crescimento veio dos anúncios. O alcance sem anúncios manteve-se, e é o que queremos fazer crescer com mais vídeo." },
        { rede: "Facebook", conta: "Badio Porto", linhas: [
          ["Visualizações", "197 413", "▲ 176%", null, "setembro: 71 422"],
          ["Interações", "8 570", "▲ 299%", null, "setembro: 2 147"],
          ["Seguidores", "5 859", "= estável", "ganhos no mês", "+78 (set: +77)"],
          ["Visitas à página", "2 050", "▼ 47%", null, "setembro: 3 894"]
        ] },
        { rede: "Google", conta: "Perfil de Empresa", linhas: [
          ["Visualizações do perfil", "53 871", "▼ 24%", "pesquisa e mapas", "setembro: 71 300"],
          ["Pedidos de direções", "684", "▲ 4%", null, "setembro: 659"],
          ["Chamadas", "94", "▲ 27%", null, "setembro: 74"],
          ["Cliques no site", "416", "▼ 23%", null, "setembro: 542"],
          ["Novas avaliações", "+40", null, "média de 4,6 em 1 038", null]
        ], nota: "Em setembro, a abertura da casa nova trouxe um pico de procura no Google. Mesmo com menos visualizações, as direções e as chamadas subiram." }
      ],

      anuncios: {
        cartoes: [
          { k: "Investimento", n: "91€", t: "pago diretamente à Meta", v: "▲ 53%" },
          { k: "Pessoas alcançadas", n: "47 858", t: "soma das 4 campanhas", v: "▲ 54%" },
          { k: "Cliques", n: "1 268", t: "no Instagram e no Facebook", v: "= estável" },
          { k: "Custo por clique", n: "0,07€", t: "setembro: 0,05€", v: null }
        ],
        campanhas: [
          ["Noites de sexta com DJ · 16/10", "381 cliques", null, "29,93€ · 14 834 pessoas", "0,08€ cada"],
          ["Noites de sexta com DJ · 23/10", "174 cliques", null, "14,98€ · 5 417 pessoas", "0,09€ cada"],
          ["Jantares de Natal · desde 26/10", "398 cliques", null, "16,17€ · 17 497 pessoas", "0,04€ cada"],
          ["DJ à sexta e ao sábado · 30 e 31/10", "315 cliques", null, "29,98€ · 10 110 pessoas", "0,10€ cada"]
        ],
        aprendemos: [
          "Os anúncios das noites com DJ e dos jantares de Natal levaram a casa a muita gente nova, a baixo custo.",
          "Os jantares de Natal tiveram o clique mais barato do mês (0,04€).",
          "Em setembro as campanhas falavam com quem visita a cidade; em outubro passaram a falar com quem vive no Porto."
        ],
        vamos: [
          "Mostrar os anúncios só no Instagram e no Facebook, onde estão os cliques de melhor qualidade",
          "Lançar uma campanha dedicada ao almoço e continuar os jantares de Natal",
          "Levar todos os anúncios diretamente para a reserva"
        ],
        nota: "Valores da conta de anúncios da Meta, só das campanhas do Badio Porto. Os cliques de sites e aplicações parceiros da Meta ficam fora destes números."
      }
    }
  ]
};
