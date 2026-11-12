/* Painel mensal Ipme Multimédia. Os dados de cada cliente estão em dados.js (window.PAINEL). */
(function(){
  var P=window.PAINEL, app=document.getElementById('app');
  var TABS=[['resumo','Resumo'],['reservas','Reservas'],['objetivos','Objetivos'],['redes','Redes'],['anuncios','Anúncios']];
  if(P.separadores)TABS=TABS.filter(function(t){return P.separadores.indexOf(t[0])>-1});
  var fmt=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ')};
  var vtag=function(v){if(!v)return'';var c=v.charAt(0)==='▲'?'up':(v.charAt(0)==='▼'?'dn':'eq');return '<span class="v '+c+'">'+v+'</span>'};
  var meses=P.meses.slice().sort(function(a,b){return a.id<b.id?1:-1});
  var estado={mes:meses[0].id,tab:'resumo',todos:false};
  try{var h=location.hash.replace('#','').split('/');if(h[0]&&TABS.some(function(t){return t[0]===h[0]}))estado.tab=h[0];if(h[1]&&meses.some(function(m){return m.id===h[1]}))estado.mes=h[1];}catch(e){}

  function resumo(M){
    var r=M.resumo, s='<div class="hero"><div class="k">'+r.destaque.k+'</div><div class="n">'+r.destaque.n+'</div><div class="t">'+r.destaque.t+'</div><div class="sub">'+r.destaque.sub+'</div></div><div class="g2">';
    r.cartoes.forEach(function(c){s+='<div class="c"><div class="k">'+c.k+'</div><div class="n">'+c.n+'</div><div class="t">'+c.t+'</div>'+vtag(c.v)+'</div>'});
    s+='</div><div class="dk"><div class="k">'+r.proximoTitulo+'</div><ul class="l">'+r.proximo.map(function(x){return'<li>'+x+'</li>'}).join('')+'</ul></div>';
    if(M.publicacoes&&M.publicacoes.length){s+='<h2 class="sec">As publicações do mês</h2>'+posts(M.publicacoes)}
    return s;
  }
  function posts(L){return L.map(function(p,i){return '<a class="post" href="'+p.url+'" target="_blank" rel="noopener"><img src="'+p.img+'" alt="" loading="lazy"><div><span class="pos">'+(i+1)+'.º · '+p.formato+'</span><div class="t">'+p.titulo+'</div><div class="s">'+p.texto+'</div><div class="ver">Ver no Instagram</div></div></a>'}).join('')}
  function reservas(M){
    var R=M.reservas; if(!R)return '<div class="ins">Sem dados de reservas neste mês.</div>';
    var mx=Math.max.apply(null,R.porDia.map(function(d){return d[1]}))||1;
    var s='<div class="g2" style="margin-top:0"><div class="c"><div class="k">Pedidos</div><div class="n">'+R.pedidos.length+'</div><div class="t">pelo formulário do site</div></div><div class="c"><div class="k">Pessoas</div><div class="n">'+fmt(R.pedidos.reduce(function(a,p){return a+p.pessoas},0))+'</div><div class="t">'+R.resumoPessoas+'</div></div></div>';
    s+='<h2 class="sec">Para que dia pedem mesa</h2><div class="box bars">'+R.porDia.map(function(d){return'<div class="br"><span class="lb">'+d[0]+'</span><span class="bg"><i class="'+(d[1]?'':'z')+'" style="width:'+Math.round(d[1]/mx*100)+'%"></i></span><span class="vv">'+d[1]+'</span></div>'}).join('')+'</div>';
    R.notas.forEach(function(n){s+='<div class="ins">'+n+'</div>'});
    var L=R.pedidos.slice().sort(function(a,b){return a.feitoISO<b.feitoISO?1:-1}), ver=estado.todos?L:L.slice(0,5);
    s+='<h2 class="sec">Pedidos do mês</h2><div class="list">'+ver.map(function(p){return'<div class="it"><span>'+p.dia+', '+p.data+' · '+p.hora+(p.pessoas>=10?'<span class="gr">GRUPO</span>':'')+'<span class="sm">pedido a '+p.feito+'</span></span><b>'+p.pessoas+' pessoas</b></div>'}).join('')+'</div>';
    if(L.length>5)s+='<div class="more"><button data-act="todos">'+(estado.todos?'Ver menos':'Ver os '+L.length+' pedidos')+'</button></div>';
    if(R.fonte)s+='<p class="nota">'+R.fonte+'</p>';
    return s;
  }
  function objetivos(M){
    var s='';
    (M.objetivos||[]).forEach(function(o){
      var p=o.meta===o.partida?0:Math.round((o.atual-o.partida)/(o.meta-o.partida)*100); p=Math.max(0,Math.min(100,p));
      var txt=o.atual<o.partida?'abaixo do ponto de partida ('+fmt(o.partida)+')':p+'% do caminho desde '+fmt(o.partida);
      s+='<div class="goal"><div class="h">'+o.nome+' <span>'+fmt(o.atual)+' de '+fmt(o.meta)+'</span></div><div class="d">'+o.indicador+'</div><div class="track"><i class="'+(p?'':'z')+'" style="width:'+p+'%"></i></div><div class="f">'+txt+'</div></div>';
    });
    var serie=P.serie, vals=serie.map(function(m){var x=P.meses.filter(function(y){return y.id===m[0]})[0];if(P.graficoTitulo)return x&&x.grafico!=null?x.grafico:null;return x&&x.reservas?x.reservas.pedidos.length:null});
    var mx=Math.max.apply(null,vals.filter(function(v){return v!==null}).concat([1]));
    s+='<div class="box"><div class="k">'+(P.graficoTitulo||'Pedidos de mesa pelo site, mês a mês')+'</div><div class="cols">'+vals.map(function(v){return v===null?'<div><i class="e"></i></div>':'<div><b>'+(P.graficoFmt?P.graficoFmt(v):v)+'</b><i class="y" style="height:'+Math.max(6,Math.round(v/mx*80))+'%"></i></div>'}).join('')+'</div><div class="lbs">'+serie.map(function(m){return'<span>'+m[1]+'</span>'}).join('')+'</div></div>';
    if(M.objetivosNota)s+='<p class="nota">'+M.objetivosNota+'</p>';
    return s;
  }
  function tabela(L){return '<div class="tb">'+L.map(function(r){return'<div class="tr"><span class="mn">'+r[0]+(r[3]?'<small>'+r[3]+'</small>':'')+'</span><span class="val">'+r[1]+(r[4]?'<small>'+r[4]+'</small>':'')+'</span>'+(r[2]?vtag(r[2]):'<span class="v eq" style="visibility:hidden">·</span>')+'</div>'}).join('')+'</div>'}
  function redes(M){
    var s='';(M.redes||[]).forEach(function(r,i){s+='<div class="rede"'+(i?'':' style="margin-top:4px"')+'><span>'+r.rede+'</span><h3>'+r.conta+'</h3></div>'+tabela(r.linhas)+(r.nota?'<p class="nota">'+r.nota+'</p>':'')});
    return s+'<p class="nota">Valores comparados com '+M.anterior+'.</p>';
  }
  function anuncios(M){
    var A=M.anuncios; if(!A)return '<div class="ins">Sem anúncios neste mês.</div>';
    var s='<div class="g2" style="margin-top:0">'+A.cartoes.map(function(c){return'<div class="c"><div class="k">'+c.k+'</div><div class="n">'+c.n+'</div><div class="t">'+c.t+'</div>'+vtag(c.v)+'</div>'}).join('')+'</div>';
    s+='<h2 class="sec">Campanhas</h2>'+tabela(A.campanhas);
    s+='<div class="box" style="margin-top:10px"><div class="k">O que nos dizem</div><ul class="l">'+A.aprendemos.map(function(x){return'<li>'+x+'</li>'}).join('')+'</ul></div>';
    s+='<div class="dk"><div class="k">O que fazemos com isto</div><ul class="l">'+A.vamos.map(function(x){return'<li>'+x+'</li>'}).join('')+'</ul></div>';
    if(A.nota)s+='<p class="nota">'+A.nota+'</p>';
    return s;
  }
  var R={resumo:resumo,reservas:reservas,objetivos:objetivos,redes:redes,anuncios:anuncios};
  var TIT={resumo:null,reservas:'Reservas',objetivos:'Objetivos',redes:'Redes sociais e Google',anuncios:'Anúncios'};
  function render(){
    var M=meses.filter(function(m){return m.id===estado.mes})[0];
    var titulo=TIT[estado.tab]?TIT[estado.tab]:M.nome, sub=TIT[estado.tab]?M.nome+' · comparado com '+M.anterior:M.nota;
    var sel=meses.length>1?'<label class="sel"><select aria-label="Mudar mês">'+meses.map(function(m){return'<option value="'+m.id+'"'+(m.id===estado.mes?' selected':'')+'>'+m.nome+'</option>'}).join('')+'</select></label>':'';
    app.innerHTML='<header class="hd"><div class="l"><div class="lg"><img src="'+P.logo+'" alt="'+P.cliente+'"></div><img class="im" src="../assets/im.png" alt="Ipme Multimédia"></div><div class="mes"><div><h1 class="m">'+titulo+'</h1><div class="s">'+sub+'</div></div>'+sel+'</div></header>'
      +'<nav class="tabs">'+TABS.map(function(t){return'<button class="tab'+(t[0]===estado.tab?' on':'')+'" data-tab="'+t[0]+'">'+t[1]+'</button>'}).join('')+'</nav>'
      +'<main class="bd">'+R[estado.tab](M)+'</main>'
      +'<footer class="foot"><img src="../assets/im.png" alt="">Preparado pela Ipme Multimédia · atualizado a '+M.atualizado+'<br>Dúvidas ou sugestões: '+P.gestor.nome+' · <a href="tel:'+P.gestor.tel.replace(/\s/g,'')+'">'+P.gestor.tel+'</a> · <a href="mailto:'+P.gestor.email+'">'+P.gestor.email+'</a></footer>';
    try{history.replaceState(null,'','#'+estado.tab+'/'+estado.mes)}catch(e){}
  }
  app.addEventListener('click',function(e){
    var t=e.target.closest('[data-tab]');if(t){estado.tab=t.getAttribute('data-tab');estado.todos=false;render();window.scrollTo(0,0);return}
    var a=e.target.closest('[data-act="todos"]');if(a){estado.todos=!estado.todos;render()}
  });
  app.addEventListener('change',function(e){if(e.target.tagName==='SELECT'){estado.mes=e.target.value;estado.todos=false;render()}});
  document.title=P.cliente+' · Resultados · Ipme Multimédia';
  render();
})();
