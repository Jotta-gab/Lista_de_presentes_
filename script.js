document.addEventListener('DOMContentLoaded', function () {
    const produtos = [
        { nome: 'Berloque Patinha com Zircônia', preco: 'R$79,90', imagem: 'https://images.tcdn.com.br/img/img_prod/750649/berloque_patinha_com_zirconia_prata_925_50207_1_4b592ebd23bb5ee6ae6bc4c7828e9405.jpg', link: 'https://www.danzijoias.com.br/berloques/pets/berloque-patinha-com-zirconia-prata-925' },
        { nome: 'Berloque Jesus', preco: 'R$59,90', imagem: 'https://images.tcdn.com.br/img/img_prod/750649/berloque_jesus_prata_925_51064_1_084318dc10254e9e2da1cd16c87e3800.jpg', link: 'https://www.danzijoias.com.br/berloques/berloque-jesus-prata-925' },
        { nome: 'Berloque Os Vingadores', preco: 'R$64,90', imagem: 'https://http2.mlstatic.com/D_NQ_NP_633842-MLB49648449394_042022-O.webp', link: 'https://produto.mercadolivre.com.br/MLB-2611562925-berloque-os-vingadores-marvel-prata-925-para-pulseiras-_JM?attributes=COLOR_SECONDARY_COLOR:UGVuZGVudGUgUGVkcmFzIERvIEluZmluaXRvIC0gT3MgVmluZ2Fkb3JlcyBNYXJ2ZWw=' },
        { nome: 'Jaqueta Puffer', preco: 'R$159,99', imagem: 'https://cea.vtexassets.com/arquivos/ids/58448453-1600-auto?v=638436963992530000&width=1600&height=auto&aspect=true', link: 'https://www.cea.com.br/jaqueta-puffer-com-ziper-preto-1059773-preto/p' },
        { nome: 'Colete de Tricô', preco: 'R$99,99', imagem: 'https://cea.vtexassets.com/arquivos/ids/58614673-1600-auto?v=638506211339870000&width=1600&height=auto&aspect=true', link: 'https://www.cea.com.br/colete-de-trico-trancado-cinza-escuro-off-white-1046890-off_white/p' },
        { nome: 'Floratta Red', preco: 'R$156,91', imagem: 'https://a-static.mlcdn.com.br/450x450/desodorante-colonia-o-boticario-floratta-red-75ml/vaccosmeticos/0001/51a0aa6006a8ce7a844967844f0e0e8f.jpeg', link: 'https://www.boticario.com.br/combo-floratta-red-blossom-desodorante-colonia-75ml-necessaire-vermelha/?&sku=B2023020310&utm_source=google&utm_medium=cpc&utm_campaign=G:BOTI:Smart-Shopping:Performance-Max:Presentes&gad_source=1&gclid=CjwKCAjwm_SzBhAsEiwAXE2Cv64bajC0V_jNV-MOXOUlo78ALndVs8Akm_K_vBRO6qE60G-Crl-abhoCyt4QAvD_BwE&gclsrc=aw.ds' },
        { nome: 'Fanshirt Atlético Mineiro', preco: 'R$179,90', imagem: 'https://shoppingdamassa.vtexassets.com/arquivos/ids/159509-800-auto?v=638508820975930000&width=800&height=auto&aspect=true', link: 'https://www.lojadogalo.com.br/fanshirt-feminina-atletico-mineiro/p' },
        { nome: 'Chinelo Atlético Mineiro', preco: 'R$59,90', imagem: 'https://shoppingdamassa.vtexassets.com/arquivos/ids/156943-800-auto?v=637988620555400000&width=800&height=auto&aspect=true', link: 'https://www.lojadogalo.com.br/chinelo-havaianas-cam/p' },
        { nome: 'Colar Rommanel Fio Grumet', preco: 'R$195,00', imagem: 'https://acdn.mitiendanube.com/stores/001/209/326/products/tam-50-5306955000-11-4a1cf47d31f0e77da615940627561790-1024-1024.webp', link: 'https://lrjoias.com.br/produtos/530695-cordao-rommanel-folheado-a-ouro-fio-grumet-50-cm/' },
        { nome: 'Colar Rommanel Fio Torcido', preco: 'R$180,00', imagem: 'https://acdn.mitiendanube.com/stores/001/209/326/products/tam-50-5311545000-41-f1c809f41450b21bbc15938152063217-1024-1024.webp', link: 'https://lrjoias.com.br/produtos/531154-cordao-rommanel-folheado-a-ouro-fio-torcido-50-cm/' },
        { nome: 'Gargantilha Rommanel Pingente Solitário', preco: 'R$223,00', imagem: 'https://acdn.mitiendanube.com/stores/001/209/326/products/tam-40-5320054006-11-56cb889e1e9310378415972030592875-1024-1024.webp', link: 'https://lrjoias.com.br/produtos/532005-gargantilha-rommanel-folheada-a-ouro-pingente-solitario-com-zirconia/' },
        { nome: 'Brinco Rommanel Ear Cuff', preco: 'R$171,00', imagem: 'https://acdn.mitiendanube.com/stores/001/209/326/products/tam-unico-5227310006-11-db747d45aa234dbb9816058165332050-1024-1024.webp', link: 'https://lrjoias.com.br/produtos/522731-brinco-rommanel-ear-cuff-folheado-a-ouro-com-cristais/' },
        { nome: 'Brinco Rommanel Coração Liso', preco: 'R$ 155,00', imagem: 'https://acdn.mitiendanube.com/stores/001/209/326/products/527073-11-d5919f5f2d5e31be4216761478067437-1024-1024.webp', link: 'https://lrjoias.com.br/produtos/527073-brinco-rommanel-ear-cuff-com-piercing-de-pressao-folheado-a-ouro-coracao-liso/' },
        { nome: 'Brinco Rommanel com Letra', preco: 'R$ 149,90', imagem: 'https://acdn.mitiendanube.com/stores/001/209/326/products/527032-31-9910aaef004ee3d50516680938348342-1024-1024.webp', link: 'https://lrjoias.com.br/produtos/527032-brinco-rommanel-piercing-de-pressao-com-solitario-folheado-a-ouro-letra-com-zirconias/' },
        { nome: 'Calça Black Jeans', preco: 'R$ 179,90', imagem: 'https://static.riachuelo.com.br/RCHLO/15040445005/portrait/256496c668c7a14da4058a4771826a416fd3ea5f.jpg', link: 'https://www.riachuelo.com.br/calca-black-jeans-feminina-wide-leg-bolso-cargo-pool-by-riachuelo-15040445_sku' },
        { nome: 'Pijama de Pelúcia Snoopy', preco: 'R$ 139,99', imagem: 'https://cea.vtexassets.com/arquivos/ids/58529958-1600-auto?v=638482836953570000&width=1600&height=auto&aspect=true', link: 'https://www.cea.com.br/pijama-de-pelucia-snoopy-listrado-coral-1063040-coral/p' },
        { nome: 'Funko Pop! Homem de Ferro', preco: 'R$ 61,99', imagem: 'https://down-br.img.susercontent.com/file/d1b4e15b863e2f402547c34419cc3dd1', link: 'https://shopee.com.br/Funko-Pop-Marvel-Eu-Sou-Homem-De-Ferro-580-i.550246661.21154271168?publish_id=&sp_atk=19b40107-aca1-4345-b0d1-e2fb855a0e5b&xptdk=19b40107-aca1-4345-b0d1-e2fb855a0e5b' },
        { nome: 'Luminária', preco: 'R$ 78,90', imagem: 'https://m.media-amazon.com/images/I/61Avl-nmdyL._AC_SX679_.jpg', link: 'https://www.amazon.com.br/Lumin%C3%A1ria-Cristal-Madeira-Decora%C3%A7%C3%A3o-Presente/dp/B0CL2X2KZT/ref=asc_df_B0CL2WKK5V/?tag=googleshopp06-20' },
        { nome: 'Kiboule Flutuante', preco: 'R$ 165,00', imagem: 'https://m.media-amazon.com/images/I/61JuHmePO0L._AC_SX679_.jpg', link: 'https://www.amazon.com.br/Kiboule-flutuante-levita%C3%A7%C3%A3o-magn%C3%A9tica-escrit%C3%B3rio/dp/B09TW54LRP/ref=asc_df_B09TW54LRP/?tag=googleshopp06-20' },
        { nome: 'Mala de Bordo', preco: 'R$ 237,40', imagem: 'https://lojabagaggio.vtexassets.com/arquivos/ids/2334334-800-739?v=638333296725030000&width=800&height=739&aspect=true', link: 'https://www.bagaggio.com.br/mala-de-bordo-abs-4-rodas-185--quebec--rose/p' },
        { nome: 'Moletom Hering', preco: 'R$ 144,99', imagem: 'https://static.netshoes.com.br/produtos/moletom-hering-basico-com-capuz-feminina/72/ARI-3279-072/ARI-3279-072_zoom1.jpg?ts=1625769924?ims=1088x', link: 'https://www.netshoes.com.br/p/moletom-hering-basico-com-capuz-feminina-areia-ARI-3279-072' },
        { nome: 'Blusão de Moletom', preco: 'R$ 159,99', imagem: 'https://cea.vtexassets.com/arquivos/ids/58519041-1600-auto?v=638477650273200000&width=1600&height=auto&aspect=true', link: 'https://www.cea.com.br/blusao-de-moletom-bordado-com-capuz-verde-1040219-v_milit/p' },
        { nome: 'Vestido de Algodão Canelado', preco: 'R$ 69,99', imagem: 'https://cea.vtexassets.com/arquivos/ids/57969840-1600-auto?v=638271156874630000&width=1600&height=auto&aspect=true', link: 'https://www.cea.com.br/vestido-curto-de-algodao-canelado-regata-preto-1056193-preto/p' },
        { nome: 'Kit Mini Pincéis para Maquiagem Intense', preco: 'R$ 61,50', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXNMYKCk7QXmvodMaEs2ANAHykE7rzIoR-fg&s', link: 'https://www.boticario.com.br/kit-mini-pinceis-para-maquiagem-intense-5-itens/' },
        { nome: 'Pijama Americano', preco: 'R$ 159,90', imagem: 'https://img.lojasrenner.com.br/item/914497148/small/3.jpg', link: 'https://www.lojasrenner.com.br/p/pijama-americano-em-viscose-com-estampa-floral/-/A-914497130-br.lr' },
        { nome: 'Baby Yoda', preco: '55,00', imagem: 'https://a-static.mlcdn.com.br/800x560/action-figure-figura-acao-star-wars-baby-yoda-estatua-8cm-yy/palmaltda/5e9787f6faf611edb7824201ac185049/a13335fd6e7a4ecf42772099b7b6db99.jpeg', link: 'https://www.magazineluiza.com.br/action-figure-figura-acao-star-wars-baby-yoda-estatua-8cm-yy/p/hj5fde64e4/ga/atfg/' },
        { nome: 'Papete Off White Strass', preco: '209,99', imagem: 'https://constance.vtexassets.com/arquivos/ids/2290199-1200-auto?v=638560568289170000&width=1200&height=auto&aspect=true', link: 'https://www.constance.com.br/papete-off-white-strass-solado-alto-s55554881/p' },
        { nome: 'Sandália Clog Bayaband Bege', preco: '289,90', imagem: 'https://imgcentauro-a.akamaihd.net/1366x1366/M1422901.jpg', link: 'https://www.riachuelo.com.br/sandalia-feminina-clog-bayaband-bege-crocs-15530809_sku' },
        { nome: 'Jaqueta Puffer com Capuz', preco: '159,00', imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lu9l0zq4hsb81e', link: 'https://shopee.com.br/JAQUETA-PUFER-COM-CAPUZ-FORRADA-JAQUETA-DE-INVERNO-FEMININA-CASUAL-JAQUETA-EM-PU-i.972631359.22797348577?sp_atk=c5c8e220-7dcc-4e82-aeb1-81be3656c75a&xptdk=c5c8e220-7dcc-4e82-aeb1-81be3656c75a' },
        { nome: 'Jaqueta de Couro', preco: '146,00', imagem: 'https://down-br.img.susercontent.com/file/sg-11134201-7rcc9-lrxm6bml95fla5', link: 'https://shopee.com.br/product/972631359/22797348574' },
        { nome: 'Conjunto Blusão e Calça', preco: '199,90', imagem: 'https://images-offstore.map.azionedge.net/compressed/9112a967b230390dfce12cbc9b466b4d.jpg', link: 'https://roselooks.offstore.me/p/1905009' },
        { nome: 'Fone de Ouvido Sem Fio Lenovo', preco: '84,90', imagem: 'https://m.media-amazon.com/images/I/51WMDlAU+fL._AC_SX679_.jpg', link: 'https://www.amazon.com.br/dp/B0C49WRR4H?ref=cm_sw_r_mwn_dp_PWH2Y1GDPPVC73SPREFA&ref_=cm_sw_r_mwn_dp_PWH2Y1GDPPVC73SPREFA&social_share=cm_sw_r_mwn_dp_PWH2Y1GDPPVC73SPREFA&language=en_US&skipTwisterOG=1' },
        { nome: 'Boné Galo - Rosa', preco: '134,90', imagem: 'https://shoppingdamassa.vtexassets.com/arquivos/ids/156123-1200-auto?v=637740766527800000&width=1200&height=auto&aspect=true', link: 'https://www.lojadogalo.com.br/bone-premium-galovolpi-metal-rosa/p' },
        { nome: 'Copo Térmico Hiddra Com Canudo 1,2L', preco: '109,90', imagem: 'https://http2.mlstatic.com/D_NQ_NP_976571-MLB75681078366_042024-O.webp', link: 'https://produto.mercadolivre.com.br/MLB-4280847164-copo-termico-hiddra-gigante-1200ml-12l-com-canudo-aco-inox-_JM?attributes=COLOR_SECONDARY_COLOR:UHJldG8=' }, 
        { nome: 'Garrafa Térmica Com Canudo Personalizada', preco: '71,90', imagem: 'https://http2.mlstatic.com/D_NQ_NP_741405-MLB73035165169_112023-O.webp', link: 'https://produto.mercadolivre.com.br/MLB-4229579802-garrafa-termica-grande-com-canudo-personalizada-com-nome-_JM?attributes=COLOR_SECONDARY_COLOR%3ATGFyYW5qYQ%3D%3D&quantity=1' }, 
        { nome: 'Balde De Pipoca Meu Malvado Favorito', preco: '179,90', imagem: 'https://http2.mlstatic.com/D_NQ_NP_944027-MLB77015563040_062024-O.webp', link: 'https://produto.mercadolivre.com.br/MLB-4824356400-balde-de-pipoca-meu-malvado-favorito-4-cinemark-_JM?variation=183313334959#reco_item_pos=1&reco_backend=ranker-retrieval-v2p_marketplace&reco_backend_type=low_level&reco_client=vip-v2p&reco_id=441d2718-6bc2-4b37-b477-0c68609fbfa4' }, 
        { nome: 'Pulseira Rommanel Pérolas Intercaladas', preco: '91,99', imagem: 'https://down-br.img.susercontent.com/file/5ca19d55c0df4776ee61f1e3aa47288a', link: 'https://www.mercadolivre.com.br/pulseira-rommanel-fio-cartier-perolas-intercaladas-550687-comprimento-20-cm-cor-dourado/p/MLB27946417' }, 
    ];


    function criarCards(produtos) {
        const container = document.getElementById('cardsContainer');
        container.innerHTML = '';

        produtos.forEach(produto => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';

            const card = `
                <div class="card">
                    <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${produto.nome}</h5>
                        <p class="card-text">Preço: ${produto.preco}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <a href="${produto.link}" class="btn btn-dourado" style="width: 45%;" target="_blank">Ver no site
                            
                            </a>
                            <button class="btn btn-success btn-lg" onclick="copyPixKey()"
                             style="background-color: #2B394D; border-color: #2B394D; font-size: 1rem">Copiar Chave Pix</button>
                        </div>
                    </div>
                </div>
            `;

            col.innerHTML = card;
            container.appendChild(col);
        });
    }




    function ordenarProdutos(criterio) {
        let produtosOrdenados = [...produtos];
        if (criterio === 'asc') {
            produtosOrdenados.sort((a, b) => parseFloat(a.preco.replace('R$', '').replace(',', '.')) - parseFloat(b.preco.replace('R$', '').replace(',', '.')));
        } else if (criterio === 'desc') {
            produtosOrdenados.sort((a, b) => parseFloat(b.preco.replace('R$', '').replace(',', '.')) - parseFloat(a.preco.replace('R$', '').replace(',', '.')));
        } else if (criterio === 'random') {
            produtosOrdenados = produtosOrdenados.sort(() => Math.random() - 0.5);
        }
        criarCards(produtosOrdenados);
    }


    document.getElementById('sort').addEventListener('change', function () {
        ordenarProdutos(this.value);
    });

    ordenarProdutos('random');

    const backToTopButton = document.querySelector('.btn-back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


function copyPixKey() {
    const pixKey = "d859ec5c-1275-4ba0-b738-55dab8c3c527";
    navigator.clipboard.writeText(pixKey).then(() => {
        alert('Você copiou minha chave Pix! Muito obrigado pelo presente!');
    }).catch(err => {
        console.error('Erro ao copiar chave Pix: ', err);
    });
}
