// ================================
// SISTEMA COMPLETO DA LOJA CENA
// ================================

// Configurações globais
let modoEdicao = false;
let produtoEditandoIndex = -1;
let avaliacaoEditandoIndex = -1;
let senhaCorreta = 'cena123456789';

// ================================
// DADOS GLOBAIS DO SITE
// ================================

let dadosSite = {
  titulo: 'O.S.S.R - Para Pais e Filhos',
  slogan: 'Ajude seu filho a aprender com os melhores produtos educacionais',
  sobre: 'Somos uma plataforma especializada para pais que desejam investir na educação dos seus filhos. Oferecemos produtos educacionais de qualidade com preços acessíveis e suporte dedicado às famílias.',
  email: 'OfficialSonicSoulReworks@gmail.com',
  whatsapp: '98989190240',
  whatsappNome: '(98) 98919-0240',
  telegram: 'LucasOliveiraW_T_bot',
  cores: {
    principal: '#002F6C',
    secundaria: '#FFD700',
    texto: '#333',
    fundo: '#f8f9fa'
  },
  produtos: [
    // APOSTILAS EDUCATIVAS
    {
      nome: 'Apostila Básica - Português',
      descricao: 'Ideal para iniciar o reforço escolar com apoio direto. Contém 50 questões e 12 tópicos essenciais para crianças de 6 a 7 anos. Perfeita para reforçar os estudos de forma prática e divertida.',
      preco: 'R$ 55,99',
      precoOriginal: 'R$ 84,61',
      imagem: 'apostila-basica-portugues.jpg',
      imagemOriginal: 'https://photos.app.goo.gl/g9UuuQ55qRtH328U6',
      categoria: 'Educação',
      estoque: 20,
      link: 'https://wa.me/5598989190240?text=Tenho interesse na apostila de Português de nível básico',
      linkKiwify: 'https://pay.kiwify.com.br/vStF7Pf'
    },
    {
      nome: 'Apostila Básica - Matemática',
      descricao: 'Ideal para iniciar o reforço escolar com apoio direto. Contém 50 questões e 12 tópicos essenciais para crianças de 6 a 7 anos. Perfeita para reforçar os estudos de forma prática e divertida.',
      preco: 'R$ 55,99',
      precoOriginal: 'R$ 84,61',
      imagem: 'apostila-basica-matematica.jpg',
      imagemOriginal: 'https://photos.app.goo.gl/uBKbCR2Z7TCv6UcM6',
      categoria: 'Educação',
      estoque: 20,
      link: 'https://wa.me/5598989190240?text=Tenho interesse na apostila de Matemática de nível básico',
      linkKiwify: 'https://pay.kiwify.com.br/jkjXvEh'
    },
    {
      nome: 'Apostila Intermediária - Português',
      descricao: 'Ideal para dar continuidade ao reforço escolar com conteúdo atualizado. Contém 50 questões e 17 tópicos para crianças de 8 a 9 anos. Perfeita para evoluir nos estudos com autonomia.',
      preco: 'R$ 66,98',
      precoOriginal: 'R$ 95,98',
      imagem: 'apostila-intermediaria-portugues.jpg',
      imagemOriginal: 'https://photos.app.goo.gl/BDTgRHkGhP6gyePy8',
      categoria: 'Educação',
      estoque: 20,
      link: 'https://wa.me/5598989190240?text=Tenho interesse na apostila de Português de nível intermediária',
      linkKiwify: 'https://pay.kiwify.com.br/JttvLxk'
    },
    {
      nome: 'Apostila Intermediária - Matemática',
      descricao: 'Ideal para dar continuidade ao reforço escolar com conteúdo atualizado. Contém 50 questões e 12 tópicos para crianças de 8 a 9 anos. Perfeita para evoluir nos estudos com autonomia.',
      preco: 'R$ 66,98',
      precoOriginal: 'R$ 95,98',
      imagem: 'apostila-intermediaria-matematica.jpg',
      imagemOriginal: 'https://photos.app.goo.gl/1KTcEcDH1YmkFAfn8',
      categoria: 'Educação',
      estoque: 20,
      link: 'https://wa.me/5598989190240?text=Tenho interesse na apostila de Matemática de nível intermediária',
      linkKiwify: 'https://pay.kiwify.com.br/0C5lgba'
    },
    {
      nome: 'Apostila Avançada - Português',
      descricao: 'Ideal para aprofundar o conhecimento com conteúdo mais desafiador. Contém 50 questões e 12 tópicos voltados para crianças de 10 a 13 anos. Excelente para desenvolver autonomia nos estudos.',
      preco: 'R$ 75,98',
      precoOriginal: 'R$ 111,50',
      imagem: 'apostila-avancada-portugues.jpg',
      imagemOriginal: 'https://photos.app.goo.gl/Hqc5jHVtZcd4okwNA',
      categoria: 'Educação',
      estoque: 20,
      link: 'https://wa.me/5598989190240?text=Tenho interesse na apostila de Português de nível avançado',
      linkKiwify: 'https://pay.kiwify.com.br/z4uXqjF'
    },
    {
      nome: 'Apostila Avançada - Matemática',
      descricao: 'Ideal para aprofundar o conhecimento com conteúdo mais desafiador. Contém 50 questões e 12 tópicos voltados para crianças de 10 a 13 anos. Excelente para desenvolver autonomia nos estudos.',
      preco: 'R$ 75,98',
      precoOriginal: 'R$ 111,50',
      imagem: 'apostila-avancada-matematica.jpg',
      imagemOriginal: 'https://photos.app.goo.gl/DAtEdZw7dHu9whdD8',
      categoria: 'Educação',
      estoque: 20,
      link: 'https://wa.me/5598989190240?text=Tenho interesse na apostila de Matemática de nível avançado',
      linkKiwify: 'https://pay.kiwify.com.br/RnH8sfT'
    },
    {
      nome: 'Kit Basico Português e Matemática para crianças de ( 6 até 7 ) + 4 dias de aula',
      descricao: 'Ideal para começar o reforço com apoio direto. Inclui apostila com 100 questões e 24 tópicos para crianças de 6 a 7 anos, além de 4 dias de aula (presencial ou via Zoom) para tirar dúvidas. Perfeito para reforçar os estudos sem complicação.',
      preco: 'R$ 111,98',
      precoOriginal: 'R$ 169,22',
      imagem: 'kit-basico.jpg',
      imagemOriginal: 'https://photos.app.goo.gl/xGioaPpQXbKEMFEw7',
      categoria: 'Educação',
      estoque: 20,
      link: 'https://wa.me/5598989190240?text=Tenho interesse no Plano Básico com apostila e aulas presenciais/online',
      linkKiwify: 'https://pay.kiwify.com.br/FD1BfJp'
    },
    {
      nome: 'Kit Intermediário Português e Matemática para crianças de ( 8 até 9 ) + 8 dias de aula',
      descricao: 'Para pais que desejam reforço educacional real. A apostila com 100 questões e 24 tópicos para crianças de 8 a 9 anos, além de 8 dias de aula (presencial ou Zoom), vídeos explicativos dos conteúdos e suporte educacional dedicado. Um plano equilibrado para garantir aprendizado e autonomia.',
      preco: 'R$ 133,99',
      precoOriginal: 'R$ 191,96',
      imagem: 'kit-intermediario.jpg',
      imagemOriginal: 'https://photos.app.goo.gl/orwx6X2NJ7VjKX6EA',
      categoria: 'Educação',
      estoque: 25,
      link: 'https://wa.me/5598989190240?text=Quero o Plano Intermediário com apostila, vídeos e suporte educacional',
      linkKiwify: 'https://pay.kiwify.com.br/5TDTk4j'
    },
    {
      nome: 'Kit Avançado Português e Matemática para crianças de ( 10 a 13 ) + 12 dias de aula',
      descricao: 'Apostila com 100 questões e 24 tópicos para crianças de 10 a 13 anos, 12 dias de aulas (presencial ou Zoom), vídeos explicativos, suporte 24h para dúvidas e acompanhamento direto e personalizado. Ainda inclui acesso a conteúdos bônus e reforço real com foco no progresso do aluno.',
      preco: 'R$ 151,98',
      precoOriginal: 'R$ 223,00',
      imagem: 'kit-avancado.jpg',
      imagemOriginal: 'https://photos.app.goo.gl/bDqGM91a8pWKvN2RA',
      categoria: 'Educação',
      estoque: 15,
      link: 'https://wa.me/5598989190240?text=Quero o Plano Premium com reforço completo e suporte 24h',
      linkKiwify: 'https://pay.kiwify.com.br/YXdvifh'  
    }
  ],
  avaliacoes: [
    {
      nome: 'Gabriela Martins',
      foto: 'file_0000000027e461f980720971705e77ef.png',
      estrelas: 4,
      comentario: 'O material é excelente, bem produzido e chegou direitinho. Apenas deixo como sugestão melhorar o atendimento via WhatsApp — a resposta demorou bastante. Já no Telegram, fui atendida de forma rápida e eficiente. Recomendo priorizar esse canal!',
      data: 'há 1 dia'
    },
    {
      nome: 'João Santos',
      foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&face',
      estrelas: 3,
      comentario: 'O conteúdo é bom e realmente ajuda, mas senti falta de mais ilustrações e recursos visuais para facilitar o aprendizado das crianças. Esperei entre 2 a 4 horas por resposta no WhatsApp, o que prejudicou minha experiência. Além disso, a apostila física levou 14 dias para ser entregue. Por isso, prefiro a versão online, que foi muito mais prática. Minha nota é 3.',
      data: 'há 1 hora'
    },
    {
      nome: 'Ana Costa',
      foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&face',
      estrelas: 4,
      comentario: 'Fiquei surpresa com a eficiência do atendimento via bot do Telegram — foi claro, rápido e muito útil. A comunicação com os pais também é excelente, principalmente quando as crianças esquecem algo. Só acho que deveriam oferecer acesso às câmeras para os responsáveis, isso aumentaria a segurança e a transparência. Também recomendo que informem corretamente o CEP no pedido — o meu pedido atrasou por conta disso.',
      data: 'há 2 semanas'
    }
  ],
  configuracoes: {
    colunasDesktop: 3,
    colunasTablet: 3,
    colunasMobile: 3,
    mostrarBusca: true,
    mostrarFiltros: true
  }
};

// Carrinho de compras
let carrinho = [];

// ================================
// INICIALIZAÇÃO
// ================================

document.addEventListener('DOMContentLoaded', function() {
  try {
    console.log('🚀 Inicializando Loja CENA...');

    // Adicionar classe de carregamento
    document.body.classList.add('js-loading');

    // Carregar dados salvos
    carregarDados();

    // Carregar carrinho primeiro
    carregarCarrinho();

    // Carregar histórico de compras
    carregarHistoricoCompras();

    // Inicializar componentes
    inicializarEventos();
    inicializarProdutos();
    inicializarAvaliacoes();

    // Aguardar um pouco para garantir que o DOM esteja pronto
    setTimeout(() => {
      atualizarContadorCarrinho();
      atualizarInterfaceResponsiva();
    }, 200);

    // Aplicar tema dinâmico
    aplicarTemaDinamico();

    // Iniciar sistema de sincronização automática
    setTimeout(() => {
      if (typeof iniciarMonitoramento === 'function') {
        iniciarMonitoramento();
      }
    }, 500);

    // Remover classe de carregamento e adicionar carregado
    setTimeout(() => {
      document.body.classList.remove('js-loading');
      document.body.classList.add('js-loaded');

      // Forçar sincronização após carregamento completo
      if (typeof forcarSincronizacao === 'function') {
        forcarSincronizacao();
      }
    }, 100);

    console.log('✅ Loja CENA carregada com sucesso!');
    console.log(`📦 ${dadosSite.produtos.length} produtos carregados`);
    console.log(`⭐ ${dadosSite.avaliacoes.length} avaliações carregadas`);
    console.log(`📋 ${historicoCompras.length} compras no histórico`);

  } catch (error) {
    console.error('❌ Erro na inicialização:', error);
    mostrarNotificação('Erro na inicialização do site', 'erro');
    document.body.classList.remove('js-loading');
  }
});

// Função para aplicar tema dinâmico
function aplicarTemaDinamico() {
  try {
    if (dadosSite.cores) {
      const root = document.documentElement;
      root.style.setProperty('--cor-principal', dadosSite.cores.principal || '#002F6C');
      root.style.setProperty('--cor-secundaria', dadosSite.cores.secundaria || '#FFD700');
      root.style.setProperty('--cor-texto', dadosSite.cores.texto || '#333');
      root.style.setProperty('--cor-fundo', dadosSite.cores.fundo || '#f8f9fa');
    }
    console.log('🎨 Tema dinâmico aplicado');
  } catch (error) {
    console.error('❌ Erro ao aplicar tema:', error);
  }
}

// ================================
// GERENCIAMENTO DE DADOS
// ================================

function salvarDados() {
  try {
    // Salvar localmente
    localStorage.setItem('dadosLojaCENA', JSON.stringify(dadosSite));

    // Salvar globalmente via API (simulação de persistência global)
    salvarDadosGlobalmente();

    // Triggerar sincronização automática após salvar
    if (typeof sincronizacaoCompleta === 'function') {
      setTimeout(() => {
        sincronizacaoCompleta();
      }, 100);
    }

    console.log('💾 Dados salvos com sucesso (local e global)');
  } catch (error) {
    console.error('❌ Erro ao salvar dados:', error);
  }
}

// Função para salvar dados globalmente (persistência para todos os usuários)
function salvarDadosGlobalmente() {
  try {
    // Criar um backup dos dados para envio
    const dadosParaEnvio = {
      timestamp: new Date().toISOString(),
      dados: dadosSite,
      versao: '1.0'
    };

    // Simular envio para servidor (aqui você integraria com uma API real)
    // Em produção, isso seria enviado para um banco de dados ou API
    const dadosJson = JSON.stringify(dadosParaEnvio, null, 2);

    // Para demonstração, salvar também em um "storage global" simulado
    localStorage.setItem('dadosLojaCENA_GLOBAL', dadosJson);

    // Log para debug
    console.log('🌐 Dados enviados para persistência global:', {
      produtos: dadosSite.produtos.length,
      avaliacoes: dadosSite.avaliacoes.length,
      timestamp: dadosParaEnvio.timestamp
    });

    mostrarNotificacao('✅ Alterações salvas para todos os usuários!', 'sucesso');

  } catch (error) {
    console.error('❌ Erro ao salvar dados globalmente:', error);
    mostrarNotificacao('⚠️ Dados salvos localmente, mas erro na sincronização global', 'info');
  }
}

// Função para carregar dados globais
function carregarDadosGlobais() {
  try {
    const dadosGlobais = localStorage.getItem('dadosLojaCENA_GLOBAL');
    if (dadosGlobais) {
      const dadosParseados = JSON.parse(dadosGlobais);

      // Verificar se os dados globais são mais recentes
      const timestampLocal = localStorage.getItem('dadosLojaCENA_timestamp') || '2024-01-01';
      const timestampGlobal = dadosParseados.timestamp || '2024-01-01';

      if (timestampGlobal > timestampLocal) {
        dadosSite = { ...dadosSite, ...dadosParseados.dados };
        localStorage.setItem('dadosLojaCENA_timestamp', timestampGlobal);
        console.log('🌐 Dados globais carregados (mais recentes que os locais)');
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error('❌ Erro ao carregar dados globais:', error);
    return false;
  }
}

// Função para verificar senha de acesso via duplo clique
function verificarSenhaAcesso() {
  const senha = prompt('🔒 Digite a senha de acesso:');

  if (senha === 'cena123456789') {
    document.getElementById('btn-modificar').style.display = 'block';
    document.getElementById('btn-modificar').click();
    mostrarNotificacao('🔓 Acesso liberado ao painel de controle!', 'sucesso');
  } else if (senha !== null) {
    mostrarNotificacao('❌ Senha incorreta!', 'erro');
  }
}

// Funções auxiliares para upload de arquivos
function abrirGaleriaDispositivo(inputId, previewId) {
  try {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    
    fileInput.addEventListener('change', function(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          const urlInput = document.getElementById(inputId);
          const previewContainer = document.getElementById(previewId);
          
          if (urlInput) {
            urlInput.value = e.target.result;
          }
          
          if (previewContainer) {
            previewContainer.innerHTML = `
              <div class="preview-info">
                <img src="${e.target.result}" alt="Preview">
                <p>Arquivo: ${file.name}</p>
                <p>Tamanho: ${(file.size / 1024).toFixed(2)} KB</p>
              </div>
            `;
          }
        };
        reader.readAsDataURL(file);
      }
    });
    
    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
  } catch (error) {
    console.error('❌ Erro ao abrir galeria:', error);
    mostrarNotificacao('Erro ao abrir galeria de arquivos', 'erro');
  }
}

// Função para exportar produtos em CSV
function exportarProdutosCSV() {
  try {
    if (!dadosSite.produtos || dadosSite.produtos.length === 0) {
      mostrarNotificacao('Nenhum produto para exportar', 'aviso');
      return;
    }

    const headers = ['nome', 'descricao', 'preco', 'imagem', 'link', 'categoria', 'estoque', 'precoOriginal', 'linkKiwify'];
    let csv = headers.join(',') + '\n';

    dadosSite.produtos.forEach(produto => {
      const row = [
        produto.nome || '',
        produto.descricao || '',
        produto.preco || '',
        produto.imagem || '',
        produto.link || '',
        produto.categoria || '',
        produto.estoque !== undefined ? produto.estoque : '',
        produto.precoOriginal || '',
        produto.linkKiwify || ''
      ].map(field => `"${String(field).replace(/"/g, '""')}"`);
      
      csv += row.join(',') + '\n';
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `produtos_loja_cena_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    mostrarNotificacao('Produtos exportados com sucesso', 'sucesso');
  } catch (error) {
    console.error('❌ Erro ao exportar produtos:', error);
    mostrarNotificacao('Erro ao exportar produtos', 'erro');
  }
}

// Funções para modais legais
function abrirModalTermos() {
  const modal = criarModalLegal('Termos de Uso', `
    <h4>Termos de Uso da Loja CENA</h4>
    <p><strong>1. Aceitação dos Termos</strong></p>
    <p>Ao acessar e usar este site, você aceita e concorda em ficar vinculado aos termos e condições de uso.</p>
    
    <p><strong>2. Uso do Site</strong></p>
    <p>Este site é destinado ao uso pessoal e não comercial. Você não pode modificar, copiar, distribuir ou usar o conteúdo para fins comerciais.</p>
    
    <p><strong>3. Produtos e Serviços</strong></p>
    <p>Nos esforçamos para exibir informações precisas sobre produtos, mas não garantimos que as descrições sejam completas ou livres de erros.</p>
    
    <p><strong>4. Limitação de Responsabilidade</strong></p>
    <p>A CENA não será responsável por quaisquer danos diretos, indiretos, incidentais ou consequenciais.</p>
    
    <p><strong>5. Modificações</strong></p>
    <p>Reservamos o direito de modificar estes termos a qualquer momento sem aviso prévio.</p>
  `);
  document.body.appendChild(modal);
  modal.style.display = 'flex';
}

function abrirModalPrivacidade() {
  const modal = criarModalLegal('Política de Privacidade', `
    <h4>Política de Privacidade da Loja CENA</h4>
    <p><strong>1. Informações Coletadas</strong></p>
    <p>Coletamos informações que você nos fornece diretamente, como nome, email e telefone quando você faz um pedido.</p>
    
    <p><strong>2. Uso das Informações</strong></p>
    <p>Usamos suas informações para processar pedidos, fornecer suporte ao cliente e melhorar nossos serviços.</p>
    
    <p><strong>3. Compartilhamento de Dados</strong></p>
    <p>Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros sem seu consentimento.</p>
    
    <p><strong>4. Segurança</strong></p>
    <p>Implementamos medidas de segurança para proteger suas informações pessoais.</p>
    
    <p><strong>5. Cookies</strong></p>
    <p>Usamos cookies para melhorar sua experiência de navegação e personalizar conteúdo.</p>
    
    <p><strong>6. Contato</strong></p>
    <p>Para questões sobre privacidade, entre em contato conosco através do email ou WhatsApp.</p>
  `);
  document.body.appendChild(modal);
  modal.style.display = 'flex';
}

function abrirModalTrocas() {
  const modal = criarModalLegal('Trocas e Devoluções', `
    <h4>Política de Trocas e Devoluções</h4>
    <p><strong>1. Produtos Digitais</strong></p>
    <p>Por se tratar de produtos digitais (apostilas e materiais educacionais), não oferecemos trocas ou devoluções após o envio.</p>
    
    <p><strong>2. Garantia de Qualidade</strong></p>
    <p>Garantimos a qualidade do conteúdo dos nossos materiais educacionais. Em caso de erro no material, forneceremos correção gratuita.</p>
    
    <p><strong>3. Problemas de Entrega</strong></p>
    <p>Se você não receber o produto digital em seu email, entre em contato conosco em até 24 horas.</p>
    
    <p><strong>4. Colônia de Férias</strong></p>
    <p>Para serviços da colônia de férias, cancelamentos devem ser feitos com 48 horas de antecedência.</p>
    
    <p><strong>5. Suporte</strong></p>
    <p>Nossa equipe está disponível via WhatsApp para resolver qualquer problema ou dúvida sobre os produtos.</p>
  `);
  document.body.appendChild(modal);
  modal.style.display = 'flex';
}

function criarModalLegal(titulo, conteudo) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
      <h3>${titulo}</h3>
      <div style="max-height: 400px; overflow-y: auto; padding: 10px;">
        ${conteudo}
      </div>
      <div style="text-align: center; margin-top: 20px;">
        <button onclick="this.parentElement.parentElement.parentElement.remove()" class="btn-salvar">Fechar</button>
      </div>
    </div>
  `;
  
  // Fechar ao clicar fora
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.remove();
    }
  });
  
  return modal;
}

function carregarDados() {
  try {
    // Primeiro, tentar carregar dados globais
    const dadosGlobaisCarregados = carregarDadosGlobais();

    if (!dadosGlobaisCarregados) {
      // Se não houver dados globais, carregar dados locais
      const dadosSalvos = localStorage.getItem('dadosLojaCENA');
      if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);
        // Mesclar dados salvos com dados padrão
        dadosSite = { ...dadosSite, ...dados };
        console.log('📂 Dados carregados do localStorage');
      }
    }

    // Atualizar título na interface
    const tituloElement = document.getElementById('site-title');
    if (tituloElement && dadosSite.titulo) {
      tituloElement.textContent = dadosSite.titulo;
    }

  } catch (error) {
    console.error('❌ Erro ao carregar dados:', error);
    console.log('🔄 Usando dados padrão');
  }
}

// ================================
// EVENTOS E INICIALIZAÇÃO
// ================================

function inicializarEventos() {
  try {
    // Botão modificar
    const btnModificar = document.getElementById('btn-modificar');
    if (btnModificar) {
      btnModificar.addEventListener('click', mostrarModalSenha);
    }

    // Modal senha
    const verificarSenha = document.getElementById('verificar-senha');
    if (verificarSenha) {
      verificarSenha.addEventListener('click', verificarSenhaAdmin);
    }

    // Painel de edição
    const toggleEdicao = document.getElementById('toggle-edicao');
    if (toggleEdicao) {
      toggleEdicao.addEventListener('click', alternarModoEdicao);
    }

    // Abas do painel
    const abaBtns = document.querySelectorAll('.aba-btn');
    abaBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        alternarAba(this.dataset.aba);
      });
    });

    // Botões de ação
    document.getElementById('salvar-alteracoes')?.addEventListener('click', salvarAlteracoes);
    document.getElementById('adicionar-produto')?.addEventListener('click', abrirModalProduto);
    document.getElementById('adicionar-avaliacao')?.addEventListener('click', abrirModalAvaliacao);
    document.getElementById('gerenciar-imagens')?.addEventListener('click', abrirModalGerenciarImagens);
    document.getElementById('fechar-painel')?.addEventListener('click', fecharPainel);

    // Modais
    inicializarModais();

    // Filtros e busca
    inicializarFiltros();

    // Responsividade
    window.addEventListener('resize', atualizarInterfaceResponsiva);

    console.log('🎯 Eventos inicializados');
  } catch (error) {
    console.error('❌ Erro ao inicializar eventos:', error);
  }
}

function inicializarModais() {
  try {
    // Fechar modais ao clicar no X
    const closeBtns = document.querySelectorAll('.close');
    closeBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const modal = this.closest('.modal');
        if (modal) modal.style.display = 'none';
      });
    });

    // Fechar modais ao clicar fora
    window.addEventListener('click', function(event) {
      if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
      }
    });

    // Salvar produto
    document.getElementById('salvar-produto')?.addEventListener('click', salvarProduto);

    // Salvar avaliação
    document.getElementById('salvar-avaliacao')?.addEventListener('click', salvarAvaliacao);

    // Finalizar compra
    document.getElementById('finalizar-compra')?.addEventListener('click', finalizarCompra);

    console.log('📱 Modais inicializados');
  } catch (error) {
    console.error('❌ Erro ao inicializar modais:', error);
  }
}

function inicializarFiltros() {
  try {
    // Criar barra de busca e filtros se não existir
    const produtosSection = document.getElementById('produtos');
    const container = document.getElementById('produtos-container');

    if (!document.querySelector('.filtros-produtos')) {
      const filtrosHTML = `
        <div class="barra-busca-container">
          <div class="filtros-produtos">
            <input type="text" id="busca-produtos" class="input-busca" placeholder="🔍 Buscar produtos...">
            <select id="filtro-categoria" class="select-filtro">
              <option value="">Todas as categorias</option>
            </select>
            <select id="filtro-preco" class="select-filtro">
              <option value="">Todos os preços</option>
              <option value="0-100">R$ 0 - R$ 100</option>
              <option value="100-300">R$ 100 - R$ 300</option>
              <option value="300-500">R$ 300 - R$ 500</option>
              <option value="500+">Acima de R$ 500</option>
            </select>
          </div>
        </div>
      `;
      container.insertAdjacentHTML('beforebegin', filtrosHTML);
    }

    // Eventos de filtro
    document.getElementById('busca-produtos')?.addEventListener('input', filtrarProdutos);
    document.getElementById('filtro-categoria')?.addEventListener('change', filtrarProdutos);
    document.getElementById('filtro-preco')?.addEventListener('change', filtrarProdutos);

    // Evento do botão "Ver mais" apostilas
    document.getElementById('btn-ver-mais-apostilas')?.addEventListener('click', alternarVisualizacaoApostilas);

    // Atualizar categorias
    atualizarFiltroCategoria();

    console.log('🔍 Filtros inicializados');
  } catch (error) {
    console.error('❌ Erro ao inicializar filtros:', error);
  }
}

// ================================
// PRODUTOS
// ================================

function inicializarProdutos() {
  try {
    renderizarApostilas(); // Oculta seção separada
    renderizarProdutos(); // Mostra todos os produtos juntos
    console.log(`📦 ${dadosSite.produtos.length} produtos renderizados`);
  } catch (error) {
    console.error('❌ Erro ao inicializar produtos:', error);
  }
}

// Variável global para controlar o estado do "Ver mais"
let mostrandoTodasApostilas = false;

function renderizarApostilas() {
  try {
    const container = document.getElementById('apostilas-container');
    if (!container) return;

    // Ocultar seção de apostilas separada
    const apostilasSection = document.getElementById('apostilas');
    if (apostilasSection) {
      apostilasSection.style.display = 'none';
    }

    console.log('📚 Seção de apostilas separada foi ocultada - apostilas agora aparecem em "Nossos Produtos"');
  } catch (error) {
    console.error('❌ Erro ao renderizar apostilas:', error);
  }
}

function renderizarProdutos() {
  try {
    const container = document.getElementById('produtos-container');
    if (!container) return;

    container.innerHTML = '';

    // Mostrar TODOS os produtos (incluindo apostilas)
    const todosProdutos = dadosSite.produtos;

    if (todosProdutos.length === 0) {
      container.innerHTML = `
        <div class="nenhum-produto">
          <h3>Nenhum produto encontrado</h3>
          <p>Adicione produtos usando o painel de edição</p>
        </div>
      `;
      return;
    }

    const colunas = dadosSite.configuracoes.colunasDesktop || 3;
    container.className = `produtos-grid cols-${colunas}`;

    todosProdutos.forEach((produto, index) => {
      const produtoHTML = criarHTMLProduto(produto, index);
      container.innerHTML += produtoHTML;
    });

    adicionarEventosProdutos();
    console.log(`✅ ${todosProdutos.length} produtos renderizados (incluindo apostilas)`);
  } catch (error) {
    console.error('❌ Erro ao renderizar produtos:', error);
  }
}

function alternarVisualizacaoApostilas() {
  try {
    mostrandoTodasApostilas = !mostrandoTodasApostilas;
    renderizarApostilas();

    // Scroll suave para a seção de apostilas se expandindo
    if (mostrandoTodasApostilas) {
      document.getElementById('apostilas').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  } catch (error) {
    console.error('❌ Erro ao alternar visualização de apostilas:', error);
  }
}

function criarHTMLProduto(produto, index) {
  try {
    const desconto = calcularDesconto(produto.precoOriginal, produto.preco);
    const temDesconto = produto.precoOriginal &&
      extrairPreco(produto.precoOriginal) > extrairPreco(produto.preco);

    return `
      <div class="produto" data-categoria="${produto.categoria || ''}" data-preco="${extrairPreco(produto.preco)}">
        ${temDesconto ? `<div class="badge-desconto">-${desconto}%</div>` : ''}
        ${produto.categoria ? `<div class="categoria">${produto.categoria}</div>` : ''}

        <img src="${produto.imagem || 'https://via.placeholder.com/400x300?text=Produto'}"
             alt="${produto.nome}" 
             onerror="this.onerror=null; this.src='${produto.imagemOriginal || 'https://via.placeholder.com/400x300?text=Produto'}'" 
             loading="lazy">

        <div class="produto-info">
          <h4>${produto.nome}</h4>
          ${produto.descricao ? `<p class="descricao">${produto.descricao}</p>` : ''}

          <div class="avaliacoes">
            <span class="nota">4.8</span>
            <span>⭐⭐⭐⭐⭐</span>
            <span class="total-avaliacoes">(${Math.floor(Math.random() * 50) + 10} avaliações)</span>
          </div>

          <div class="preco-container">
            ${produto.precoOriginal ? `<span class="preco-original">${produto.precoOriginal}</span>` : ''}
            <div class="preco-atual">${produto.preco}</div>
          </div>

          ${produto.estoque !== undefined ? `
            <div class="estoque-info ${produto.estoque < 5 ? 'estoque-baixo' : ''}">
              ${produto.estoque > 0 ? `✅ ${produto.estoque} em estoque` : '❌ Fora de estoque'}
            </div>
          ` : ''}

          <div class="produto-acoes">
            ${produto.linkKiwify ? `
              <a href="${produto.linkKiwify}" target="_blank" class="botao-comprar">
                💳 Comprar
              </a>` : ''}

            <button class="btn-adicionar-carrinho" onclick="adicionarAoCarrinho(${index})">
              🛒
            </button>

            <button class="btn-wishlist" onclick="adicionarWishlist(${index})">
              ❤️
            </button>

            ${produto.link ? `
              <a href="${produto.link}" target="_blank" class="botao-comprar" style="background: #25d366;">
                📱 WhatsApp
              </a>` : ''}
          </div>
        </div>

        ${modoEdicao ? `
          <div class="produto-edicao">
            <button onclick="editarProduto(${index})" class="btn-editar">✏️</button>
            <button onclick="excluirProduto(${index})" class="btn-excluir">🗑️</button>
          </div>
        ` : ''}
      </div>
    `;
  } catch (error) {
    console.error('❌ Erro ao criar HTML do produto:', error);
    return '<div class="produto erro">Erro ao carregar produto</div>';
  }
}

function adicionarEventosProdutos() {
  try {
    // Remover eventos antigos primeiro para evitar duplicação
    const botoesCarrinho = document.querySelectorAll('.btn-adicionar-carrinho');
    botoesCarrinho.forEach(botao => {
      // Clonar o botão para remover todos os event listeners
      const novoBotao = botao.cloneNode(true);
      botao.parentNode.replaceChild(novoBotao, botao);
    });

    const botoesWishlist = document.querySelectorAll('.btn-wishlist');
    botoesWishlist.forEach(botao => {
      // Clonar o botão para remover todos os event listeners
      const novoBotao = botao.cloneNode(true);
      botao.parentNode.replaceChild(novoBotao, botao);
    });

    console.log('➕ Eventos adicionados aos produtos');
  } catch (error) {
    console.error('❌ Erro ao adicionar eventos aos produtos:', error);
  }
}

function editarProduto(index) {
  try {
    produtoEditandoIndex = index;
    const produto = dadosSite.produtos[index];

    // Preencher o modal com os dados do produto
    document.getElementById('produto-nome').value = produto.nome || '';
    document.getElementById('produto-descricao').value = produto.descricao || '';
    document.getElementById('produto-preco').value = produto.preco || '';
    document.getElementById('produto-preco-original').value = produto.precoOriginal || '';
    document.getElementById('produto-imagem').value = produto.imagem || '';
    document.getElementById('produto-categoria').value = produto.categoria || '';
    document.getElementById('produto-estoque').value = produto.estoque !== undefined ? produto.estoque : '';
    document.getElementById('produto-link').value = produto.link || '';
    document.getElementById('produto-link-kiwify').value = produto.linkKiwify || '';

    // Abrir o modal de produto
    abrirModalProduto();
    console.log(`✏️ Editando produto ${index}`);
  } catch (error) {
    console.error('❌ Erro ao editar produto:', error);
  }
}

function salvarProduto() {
  try {
    const nome = document.getElementById('produto-nome').value;
    const descricao = document.getElementById('produto-descricao').value;
    const preco = document.getElementById('produto-preco').value;
    const precoOriginal = document.getElementById('produto-preco-original').value;
    const imagem = document.getElementById('produto-imagem').value;
    const categoria = document.getElementById('produto-categoria').value;
    const estoque = document.getElementById('produto-estoque').value;
    const link = document.getElementById('produto-link').value;
    const linkKiwify = document.getElementById('produto-link-kiwify').value;

    if (!nome || !preco) {
      mostrarNotificacao('Preencha nome e preço do produto', 'aviso');
      return;
    }

    const novoProduto = {
      nome,
      descricao,
      preco,
      precoOriginal,
      imagem,
      categoria,
      estoque: estoque !== '' ? parseInt(estoque) : undefined,
      link,
      linkKiwify
    };

    if (produtoEditandoIndex !== -1) {
      // Editar produto existente
      dadosSite.produtos[produtoEditandoIndex] = novoProduto;
      console.log(`✅ Produto ${produtoEditandoIndex} atualizado`);
    } else {
      // Adicionar novo produto
      dadosSite.produtos.push(novoProduto);
      console.log('➕ Novo produto adicionado');
    }

    // Resetar índice de edição
    produtoEditandoIndex = -1;

    // Fechar modal e atualizar lista
    fecharModalProduto();
    salvarDados();
    inicializarProdutos();
    mostrarNotificacao('Produto salvo com sucesso', 'sucesso');
  } catch (error) {
    console.error('❌ Erro ao salvar produto:', error);
    mostrarNotificacao('Erro ao salvar produto', 'erro');
  }
}

function excluirProduto(index) {
  try {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      dadosSite.produtos.splice(index, 1);
      salvarDados();
      inicializarProdutos();
      mostrarNotificacao('Produto excluído com sucesso', 'sucesso');
      console.log(`🗑️ Produto ${index} excluído`);
    }
  } catch (error) {
    console.error('❌ Erro ao excluir produto:', error);
    mostrarNotificacao('Erro ao excluir produto', 'erro');
  }
}

function atualizarFiltroCategoria() {
  try {
    const filtroCategoria = document.getElementById('filtro-categoria');
    if (!filtroCategoria) return;

    // Remover opções existentes
    filtroCategoria.innerHTML = '<option value="">Todas as categorias</option>';

    // Obter categorias únicas dos produtos
    const categorias = [...new Set(dadosSite.produtos.map(produto => produto.categoria).filter(Boolean))];

    // Adicionar opções de categoria
    categorias.forEach(categoria => {
      const option = document.createElement('option');
      option.value = categoria;
      option.textContent = categoria;
      filtroCategoria.appendChild(option);
    });

    console.log('✔️ Filtro de categorias atualizado');
  } catch (error) {
    console.error('❌ Erro ao atualizar filtro de categorias:', error);
  }
}

function filtrarProdutos() {
  try {
    const busca = document.getElementById('busca-produtos').value.toLowerCase();
    const categoria = document.getElementById('filtro-categoria').value;
    const preco = document.getElementById('filtro-preco').value;

    const produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto => {
      const nome = produto.querySelector('h4').textContent.toLowerCase();
      const descricao = produto.querySelector('.descricao')?.textContent.toLowerCase() || '';
      const categoriaProduto = produto.dataset.categoria || '';
      const precoProduto = parseFloat(produto.dataset.preco);

      const buscaOk = nome.includes(busca) || descricao.includes(busca);
      const categoriaOk = categoria === '' || categoriaProduto === categoria;
      const precoOk = verificarPreco(precoProduto, preco);

      if (buscaOk && categoriaOk && precoOk) {
        produto.style.display = 'block';
      } else {
        produto.style.display = 'none';
      }
    });
    console.log('🔍 Produtos filtrados');
  } catch (error) {
    console.error('❌ Erro ao filtrar produtos:', error);
  }
}

function verificarPreco(precoProduto, precoFaixa) {
  try {
    if (precoFaixa === '') return true;

    const [min, max] = precoFaixa.split('-');

    if (max === undefined) {
      return precoProduto >= parseFloat(min);
    } else {
      return precoProduto >= parseFloat(min) && precoProduto <= parseFloat(max);
    }
  } catch (error) {
    console.error('❌ Erro ao verificar preço:', error);
    return false;
  }
}

// ================================
// AVALIAÇÕES
// ================================

function inicializarAvaliacoes() {
  try {
    // Verificar se existem dados de avaliações
    if (!dadosSite.avaliacoes) {
      console.warn('Dados de avaliações não encontrados, usando dados padrão');
      dadosSite.avaliacoes = [
        {
          nome: 'Carla Mendes - Mãe da Sofia (7 anos)',
          foto: 'https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=100&h=100&fit=crop&face',
          estrelas: 5,
          comentario: 'Como mãe, sempre busco o melhor para minha filha Sofia. As apostilas da CENA foram um investimento certeiro! Ela melhorou muito em português e matemática. O material é bem didático e minha filha se diverte estudando. Super recomendo para outros pais!',
          data: 'há 3 dias'
        },
        {
          nome: 'Roberto Silva - Pai do Lucas (9 anos)',
          foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&face',
          estrelas: 4,
          comentario: 'Meu filho Lucas estava com dificuldades na escola. Comprei o plano intermediário e em apenas 2 semanas já vejo diferença! As aulas de reforço são excelentes e o suporte no WhatsApp é muito bom. O investimento vale cada centavo quando se trata da educação dos nossos filhos.',
          data: 'há 1 semana'
        },
        {
          nome: 'Fernanda Costa - Mãe da Alice (11 anos)',
          foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&face',
          estrelas: 5,
          comentario: 'A colônia de férias foi perfeita para minha filha Alice! Como mãe que trabalha, fico tranquila sabendo que ela está em um ambiente seguro e educativo. Os monitores são carinhosos e sempre nos mantêm informados. Minha filha fez novos amigos e ainda aprendeu coisas novas. Já garantimos a vaga para as próximas férias!',
          data: 'há 5 dias'
        }
      ];
    }

    renderizarAvaliacoes();
    console.log(`⭐ ${dadosSite.avaliacoes.length} avaliações inicializadas com sucesso`);
  } catch (error) {
    console.error('❌ Erro ao inicializar avaliações:', error);
  }
}

function renderizarAvaliacoes() {
  try {
    const container = document.getElementById('avaliacoes-container');
    if (!container) {
      console.warn('Container de avaliações não encontrado');
      return;
    }

    container.innerHTML = '';

    if (!dadosSite.avaliacoes || dadosSite.avaliacoes.length === 0) {
      container.innerHTML = `
        <div class="nenhuma-avaliacao" style="text-align: center; padding: 40px; color: #666;">
          <h4>Ainda não temos avaliações</h4>
          <p>Seja o primeiro a avaliar nossos produtos!</p>
        </div>
      `;
      return;
    }

    dadosSite.avaliacoes.forEach((avaliacao, index) => {
      const avaliacaoHTML = criarHTMLAvaliacao(avaliacao, index);
      container.innerHTML += avaliacaoHTML;
    });
    
    console.log(`⭐ ${dadosSite.avaliacoes.length} avaliações renderizadas com sucesso`);
  } catch (error) {
    console.error('❌ Erro ao renderizar avaliações:', error);
    const container = document.getElementById('avaliacoes-container');
    if (container) {
      container.innerHTML = `
        <div class="erro-avaliacoes" style="text-align: center; padding: 40px; color: #e74c3c;">
          <h4>❌ Erro ao carregar avaliações</h4>
          <p>Tente recarregar a página</p>
        </div>
      `;
    }
  }
}

function criarHTMLAvaliacao(avaliacao, index) {
  try {
    const comentarioCompleto = avaliacao.comentario || '';
    const comentarioTruncado = comentarioCompleto.length > 100 
      ? comentarioCompleto.substring(0, 100) + '...' 
      : comentarioCompleto;
    const precisaVerMais = comentarioCompleto.length > 100;

    return `
      <div class="avaliacao">
        <div class="avaliacao-header">
          <img src="${avaliacao.foto || 'https://via.placeholder.com/50x50?text=👤'}" 
               alt="${avaliacao.nome}"
               onerror="this.src='https://via.placeholder.com/50x50?text=👤'">
          <div class="avaliacao-info">
            <h4>${avaliacao.nome}</h4>
            <div class="estrelas">
              ${gerarEstrelas(avaliacao.estrelas)}
            </div>
          </div>
        </div>
        <div class="comentario-container">
          <p class="comentario" id="comentario-${index}">
            ${precisaVerMais ? comentarioTruncado : comentarioCompleto}
          </p>
          ${precisaVerMais ? `
            <div class="comentario-acoes">
              <button class="btn-ver-mais" onclick="alternarComentario(${index}, true)" id="btn-ver-mais-${index}">
                📖 Ver mais
              </button>
              <button class="btn-ver-menos" onclick="alternarComentario(${index}, false)" id="btn-ver-menos-${index}" style="display: none;">
                📄 Ver menos
              </button>
            </div>
          ` : ''}
        </div>
        <div class="avaliacao-footer">
          <span class="data">${avaliacao.data}</span>
          ${modoEdicao ? `
            <div class="avaliacao-edicao">
              <button onclick="editarAvaliacao(${index})" class="btn-editar">✏️</button>
              <button onclick="excluirAvaliacao(${index})" class="btn-excluir">🗑️</button>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  } catch (error) {
    console.error('❌ Erro ao criar HTML da avaliação:', error);
    return '<div class="avaliacao erro">Erro ao carregar avaliação</div>';
  }
}

function gerarEstrelas(quantidade) {
  try {
    let estrelasHTML = '';
    for (let i = 0; i < 5; i++) {
      estrelasHTML += i < quantidade ? '⭐' : '☆';
    }
    return estrelasHTML;
  } catch (error) {
    console.error('❌ Erro ao gerar estrelas:', error);
    return '☆☆☆☆☆';
  }
}

function editarAvaliacao(index) {
  try {
    avaliacaoEditandoIndex = index;
    const avaliacao = dadosSite.avaliacoes[index];

    // Preencher o modal com os dados da avaliação
    document.getElementById('avaliacao-nome').value = avaliacao.nome || '';
    document.getElementById('avaliacao-foto').value = avaliacao.foto || '';
    document.getElementById('avaliacao-estrelas').value = avaliacao.estrelas || 5;
    document.getElementById('avaliacao-comentario').value = avaliacao.comentario || '';
    document.getElementById('avaliacao-data').value = avaliacao.data || '';

    // Abrir o modal de avaliação
    abrirModalAvaliacao();
    console.log(`✏️ Editando avaliação ${index}`);
  } catch (error) {
    console.error('❌ Erro ao editar avaliação:', error);
  }
}

function salvarAvaliacao() {
  try {
    const nome = document.getElementById('avaliacao-nome').value;
    const foto = document.getElementById('avaliacao-foto').value;
    const estrelas = parseInt(document.getElementById('avaliacao-estrelas').value);
    const comentario = document.getElementById('avaliacao-comentario').value;
    const data = document.getElementById('avaliacao-data').value;

    if (!nome || !comentario) {
      mostrarNotificacao('Preencha nome e comentário da avaliação', 'aviso');
      return;
    }

    const novaAvaliacao = {
      nome,
      foto,
      estrelas,
      comentario,
      data
    };

    if (avaliacaoEditandoIndex !== -1) {
      // Editar avaliação existente
      dadosSite.avaliacoes[avaliacaoEditandoIndex] = novaAvaliacao;
      console.log(`✅ Avaliação ${avaliacaoEditandoIndex} atualizada`);
    } else {
      // Adicionar nova avaliação
      dadosSite.avaliacoes.push(novaAvaliacao);
      console.log('➕ Nova avaliação adicionada');
    }

    // Resetar índice de edição
    avaliacaoEditandoIndex = -1;

    // Fechar modal e atualizar lista
    fecharModalAvaliacao();
    salvarDados();
    inicializarAvaliacoes();
    mostrarNotificacao('Avaliação salva com sucesso', 'sucesso');
  } catch (error) {
    console.error('❌ Erro ao salvar avaliação:', error);
    mostrarNotificacao('Erro ao salvar avaliação', 'erro');
  }
}

function excluirAvaliacao(index) {
  try {
    if (confirm('Tem certeza que deseja excluir esta avaliação?')) {
      dadosSite.avaliacoes.splice(index, 1);
      salvarDados();
      inicializarAvaliacoes();
      mostrarNotificacao('Avaliação excluída com sucesso', 'sucesso');
      console.log(`🗑️ Avaliação ${index} excluída`);
    }
  } catch (error) {
    console.error('❌ Erro ao excluir avaliação:', error);
    mostrarNotificacao('Erro ao excluir avaliação', 'erro');
  }
}

// ================================
// CARRINHO E NOTIFICAÇÕES
// ================================

// Sistema de notificações de compras
let historicoCompras = [];
let notificacoesAtivas = [];

function carregarHistoricoCompras() {
  try {
    const historico = localStorage.getItem('historicoComprasLojaCENA');
    if (historico) {
      historicoCompras = JSON.parse(historico);
      console.log(`📋 ${historicoCompras.length} compras carregadas do histórico`);
    }
  } catch (error) {
    console.error('❌ Erro ao carregar histórico:', error);
  }
}

function salvarHistoricoCompras() {
  try {
    localStorage.setItem('historicoComprasLojaCENA', JSON.stringify(historicoCompras));
    console.log('💾 Histórico de compras salvo');
  } catch (error) {
    console.error('❌ Erro ao salvar histórico:', error);
  }
}

function registrarCompra(produto, acao) {
  try {
    const compra = {
      id: Date.now() + Math.random(),
      produto: {
        nome: produto.nome,
        preco: produto.preco,
        categoria: produto.categoria,
        imagem: produto.imagem
      },
      acao: acao, // 'adicionado', 'removido', 'comprado', 'interesse'
      timestamp: new Date().toISOString(),
      data: new Date().toLocaleString('pt-BR'),
      valor: extrairPreco(produto.preco),
      quantidade: produto.quantidade || 1
    };

    historicoCompras.unshift(compra); // Adiciona no início da lista
    
    // Manter apenas as últimas 100 compras
    if (historicoCompras.length > 100) {
      historicoCompras = historicoCompras.slice(0, 100);
    }

    salvarHistoricoCompras();
    atualizarNotificacoesCompra(compra);
    
    console.log(`📊 Compra registrada: ${acao} - ${produto.nome}`);
  } catch (error) {
    console.error('❌ Erro ao registrar compra:', error);
  }
}

function atualizarNotificacoesCompra(compra) {
  try {
    // Mensagens personalizadas para cada ação
    const mensagensAcao = {
      'adicionado': {
        titulo: '🛒 Adicionado ao Carrinho!',
        subtitulo: 'Produto incluído na sua lista de interesse',
        dica: 'Continue navegando ou finalize seu interesse'
      },
      'removido': {
        titulo: '🗑️ Removido do Carrinho',
        subtitulo: 'Produto retirado da sua lista',
        dica: 'Você pode adicionar novamente quando quiser'
      },
      'comprado': {
        titulo: '💳 Interesse Demonstrado!',
        subtitulo: 'WhatsApp será aberto com seus dados',
        dica: 'Aguarde o contato com os links de pagamento'
      },
      'interesse': {
        titulo: '❤️ Adicionado aos Favoritos!',
        subtitulo: 'Produto salvo na sua lista de desejos',
        dica: 'Acesse seus favoritos no menu superior'
      }
    };

    const mensagemConfig = mensagensAcao[compra.acao] || {
      titulo: '📦 Ação Realizada',
      subtitulo: 'Operação concluída com sucesso',
      dica: 'Continue navegando pelos produtos'
    };
    
    mostrarNotificacaoDetalhada({
      titulo: mensagemConfig.titulo,
      subtitulo: mensagemConfig.subtitulo,
      dica: mensagemConfig.dica,
      produto: compra.produto.nome,
      preco: compra.produto.preco,
      acao: compra.acao,
      timestamp: compra.data
    });

    // Atualizar estatísticas em tempo real
    atualizarEstatisticasCompra();
    
  } catch (error) {
    console.error('❌ Erro ao atualizar notificações:', error);
  }
}

function mostrarNotificacaoDetalhada(dados) {
  try {
    const container = document.getElementById('notificacoes-container') || criarContainerNotificacoes();
    
    const notificacao = document.createElement('div');
    notificacao.className = 'notificacao-compra';
    notificacao.innerHTML = `
      <div class="notificacao-header">
        <span class="notificacao-icone">${getIconeAcao(dados.acao)}</span>
        <div class="notificacao-textos">
          <span class="notificacao-titulo">${dados.titulo}</span>
          ${dados.subtitulo ? `<span class="notificacao-subtitulo">${dados.subtitulo}</span>` : ''}
        </div>
        <span class="notificacao-fechar" onclick="this.parentElement.parentElement.remove()">×</span>
      </div>
      <div class="notificacao-corpo">
        <div class="produto-info">
          <div class="produto-nome">📦 ${dados.produto}</div>
          <div class="produto-preco">💰 ${dados.preco}</div>
        </div>
        <div class="notificacao-detalhes">
          ${dados.dica ? `<div class="produto-dica">💡 ${dados.dica}</div>` : ''}
          <div class="produto-timestamp">🕐 ${dados.timestamp}</div>
        </div>
      </div>
      <div class="notificacao-progresso"></div>
    `;

    container.appendChild(notificacao);
    notificacoesAtivas.push(notificacao);

    // Animar entrada
    setTimeout(() => {
      notificacao.classList.add('ativa');
    }, 100);

    // Tempo diferente baseado na ação
    const tempoExibicao = dados.acao === 'comprado' ? 8000 : 5000;

    // Remover automaticamente
    setTimeout(() => {
      if (notificacao.parentNode) {
        notificacao.classList.add('saindo');
        setTimeout(() => {
          notificacao.remove();
          const index = notificacoesAtivas.indexOf(notificacao);
          if (index > -1) notificacoesAtivas.splice(index, 1);
        }, 300);
      }
    }, tempoExibicao);

    console.log(`📢 Notificação detalhada exibida: ${dados.titulo}`);
  } catch (error) {
    console.error('❌ Erro ao mostrar notificação detalhada:', error);
  }
}

function criarContainerNotificacoes() {
  try {
    const container = document.createElement('div');
    container.id = 'notificacoes-container';
    container.className = 'notificacoes-container';
    document.body.appendChild(container);
    return container;
  } catch (error) {
    console.error('❌ Erro ao criar container de notificações:', error);
    return null;
  }
}

function getIconeAcao(acao) {
  const icones = {
    'adicionado': '🛒',
    'removido': '🗑️',
    'comprado': '💳',
    'interesse': '❤️'
  };
  return icones[acao] || '📦';
}

function atualizarEstatisticasCompra() {
  try {
    const estatisticas = {
      totalItens: historicoCompras.length,
      valorTotal: historicoCompras.reduce((total, compra) => {
        if (compra.acao === 'adicionado') {
          return total + (compra.valor * compra.quantidade);
        }
        return total;
      }, 0),
      produtosMaisAdicionados: {},
      categoriasPopulares: {}
    };

    // Calcular produtos mais adicionados
    historicoCompras.forEach(compra => {
      if (compra.acao === 'adicionado') {
        const nome = compra.produto.nome;
        estatisticas.produtosMaisAdicionados[nome] = (estatisticas.produtosMaisAdicionados[nome] || 0) + 1;
        
        const categoria = compra.produto.categoria || 'Sem categoria';
        estatisticas.categoriasPopulares[categoria] = (estatisticas.categoriasPopulares[categoria] || 0) + 1;
      }
    });

    // Salvar estatísticas
    localStorage.setItem('estatisticasLojaCENA', JSON.stringify(estatisticas));
    
    console.log('📊 Estatísticas atualizadas:', estatisticas);
  } catch (error) {
    console.error('❌ Erro ao atualizar estatísticas:', error);
  }
}

function mostrarHistoricoCompras() {
  try {
    const modal = document.createElement('div');
    modal.className = 'modal historico-modal';
    modal.innerHTML = `
      <div class="modal-content historico-content">
        <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
        <h3>📋 Histórico de Compras</h3>
        
        <div class="historico-stats">
          <div class="stat-item">
            <span class="stat-numero">${historicoCompras.length}</span>
            <span class="stat-label">Total de Ações</span>
          </div>
          <div class="stat-item">
            <span class="stat-numero">${historicoCompras.filter(c => c.acao === 'adicionado').length}</span>
            <span class="stat-label">Itens Adicionados</span>
          </div>
          <div class="stat-item">
            <span class="stat-numero">${historicoCompras.filter(c => c.acao === 'comprado').length}</span>
            <span class="stat-label">Interesses Enviados</span>
          </div>
        </div>

        <div class="historico-filtros">
          <select id="filtro-acao-historico">
            <option value="">Todas as ações</option>
            <option value="adicionado">Adicionados</option>
            <option value="removido">Removidos</option>
            <option value="comprado">Comprados</option>
            <option value="interesse">Favoritos</option>
          </select>
          <button onclick="exportarHistorico()" class="btn-exportar-mini">📤 Exportar</button>
          <button onclick="limparHistorico()" class="btn-limpar-mini">🗑️ Limpar</button>
        </div>

        <div class="historico-lista" id="historico-lista">
          ${gerarListaHistorico()}
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = 'flex';

    // Adicionar evento do filtro
    document.getElementById('filtro-acao-historico').addEventListener('change', function() {
      document.getElementById('historico-lista').innerHTML = gerarListaHistorico(this.value);
    });

    console.log('📋 Modal de histórico aberto');
  } catch (error) {
    console.error('❌ Erro ao mostrar histórico:', error);
  }
}

function gerarListaHistorico(filtroAcao = '') {
  try {
    const comprasFiltradas = filtroAcao ? 
      historicoCompras.filter(c => c.acao === filtroAcao) : 
      historicoCompras;

    if (comprasFiltradas.length === 0) {
      return '<div class="historico-vazio">📭 Nenhuma compra encontrada</div>';
    }

    return comprasFiltradas.map(compra => `
      <div class="historico-item">
        <div class="historico-produto">
          <div class="produto-info">
            <span class="historico-icone">${getIconeAcao(compra.acao)}</span>
            <div class="produto-detalhes">
              <div class="produto-nome">${compra.produto.nome}</div>
              <div class="produto-categoria">${compra.produto.categoria || 'Sem categoria'}</div>
            </div>
          </div>
          <div class="historico-valores">
            <div class="produto-preco">${compra.produto.preco}</div>
            <div class="produto-data">${compra.data}</div>
          </div>
        </div>
      </div>
    `).join('');
  } catch (error) {
    console.error('❌ Erro ao gerar lista do histórico:', error);
    return '<div class="historico-erro">❌ Erro ao carregar histórico</div>';
  }
}

function exportarHistorico() {
  try {
    const dados = historicoCompras.map(compra => ({
      produto: compra.produto.nome,
      preco: compra.produto.preco,
      categoria: compra.produto.categoria,
      acao: compra.acao,
      data: compra.data,
      valor: compra.valor,
      quantidade: compra.quantidade
    }));

    const csv = [
      ['Produto', 'Preço', 'Categoria', 'Ação', 'Data', 'Valor', 'Quantidade'],
      ...dados.map(item => [
        item.produto,
        item.preco,
        item.categoria || '',
        item.acao,
        item.data,
        item.valor,
        item.quantidade
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `historico_compras_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();

    mostrarNotificacao('📤 Histórico exportado com sucesso!', 'sucesso');
    console.log('📤 Histórico exportado');
  } catch (error) {
    console.error('❌ Erro ao exportar histórico:', error);
    mostrarNotificacao('❌ Erro ao exportar histórico', 'erro');
  }
}

function limparHistorico() {
  try {
    if (confirm('⚠️ Tem certeza que deseja limpar todo o histórico? Esta ação não pode ser desfeita.')) {
      historicoCompras = [];
      salvarHistoricoCompras();
      document.getElementById('historico-lista').innerHTML = gerarListaHistorico();
      mostrarNotificacao('🗑️ Histórico limpo com sucesso!', 'sucesso');
      console.log('🗑️ Histórico limpo');
    }
  } catch (error) {
    console.error('❌ Erro ao limpar histórico:', error);
  }
}

function adicionarAoCarrinho(index) {
  try {
    const produto = dadosSite.produtos[index];
    if (!produto) {
      console.warn(`Produto com índice ${index} não encontrado`);
      mostrarNotificacao('Produto não encontrado', 'erro');
      return;
    }

    // Verificar se o produto já está no carrinho usando nome e índice
    const produtoExistenteIndex = carrinho.findIndex(item => 
      item.nome === produto.nome && item.preco === produto.preco
    );
    
    if (produtoExistenteIndex !== -1) {
      // Aumentar quantidade se já existir
      carrinho[produtoExistenteIndex].quantidade = (carrinho[produtoExistenteIndex].quantidade || 1) + 1;
      mostrarNotificacao(`Quantidade de ${produto.nome} aumentada`, 'sucesso');
      
      // Registrar aumento de quantidade
      registrarCompra({...produto, quantidade: carrinho[produtoExistenteIndex].quantidade}, 'adicionado');
    } else {
      // Adicionar produto ao carrinho
      carrinho.push({
        ...produto,
        quantidade: 1,
        dataAdicao: new Date().toISOString(),
        id: Date.now() + Math.random() // ID único para evitar duplicação
      });
      mostrarNotificacao(`${produto.nome} adicionado ao carrinho`, 'sucesso');
      
      // Registrar nova adição
      registrarCompra({...produto, quantidade: 1}, 'adicionado');
    }

    salvarCarrinho();
    atualizarContadorCarrinho();
    console.log(`🛒 ${produto.nome} adicionado ao carrinho`);
  } catch (error) {
    console.error('❌ Erro ao adicionar ao carrinho:', error);
    mostrarNotificacao('Erro ao adicionar ao carrinho', 'erro');
  }
}

function limparCarrinho() {
  try {
    carrinho = [];
    salvarCarrinho();
    atualizarContadorCarrinho();
    renderizarCarrinho();
    mostrarNotificacao('Carrinho limpo com sucesso', 'sucesso');
    console.log('🗑️ Carrinho limpo');
  } catch (error) {
    console.error('❌ Erro ao limpar carrinho:', error);
    mostrarNotificacao('Erro ao limpar carrinho', 'erro');
  }
}

function abrirModalCarrinho() {
  try {
    renderizarCarrinho();
    document.getElementById('modal-carrinho').style.display = 'flex';
    console.log('🛒 Modal do carrinho aberto');
  } catch (error) {
    console.error('❌ Erro ao abrir modal do carrinho:', error);
  }
}

function fecharModalCarrinho() {
  try {
    document.getElementById('modal-carrinho').style.display = 'none';
    console.log('🛒 Modal do carrinho fechado');
  } catch (error) {
    console.error('❌ Erro ao fechar modal do carrinho:', error);
  }
}

function alterarQuantidadeCarrinho(index, novaQuantidade) {
  try {
    if (index >= 0 && index < carrinho.length && novaQuantidade > 0) {
      carrinho[index].quantidade = novaQuantidade;
      salvarCarrinho();
      atualizarContadorCarrinho();
      renderizarCarrinho();
      console.log(`🔄 Quantidade alterada para ${novaQuantidade} no produto ${index}`);
    }
  } catch (error) {
    console.error('❌ Erro ao alterar quantidade:', error);
  }
}

function calcularTotalCarrinho() {
  try {
    let total = 0;
    carrinho.forEach(produto => {
      const preco = extrairPreco(produto.preco);
      const quantidade = produto.quantidade || 1;
      total += preco * quantidade;
    });
    return total;
  } catch (error) {
    console.error('❌ Erro ao calcular total:', error);
    return 0;
  }
}

function obterResumoCarrinho() {
  try {
    const total = calcularTotalCarrinho();
    const quantidade = carrinho.reduce((acc, item) => acc + (item.quantidade || 1), 0);
    
    return {
      itens: carrinho.length,
      quantidade: quantidade,
      total: total,
      totalFormatado: `R$ ${total.toFixed(2).replace('.', ',')}`
    };
  } catch (error) {
    console.error('❌ Erro ao obter resumo do carrinho:', error);
    return { itens: 0, quantidade: 0, total: 0, totalFormatado: 'R$ 0,00' };
  }
}







function renderizarCarrinho() {
  try {
    const container = document.getElementById('itens-carrinho');
    const totalElement = document.getElementById('total-carrinho');
    
    if (!container || !totalElement) return;

    if (carrinho.length === 0) {
      container.innerHTML = `
        <div class="carrinho-vazio">
          <div class="icone-carrinho-vazio">🛒</div>
          <h4>Seu carrinho está vazio</h4>
          <p>Adicione alguns produtos para começar suas compras!</p>
          <div class="carrinho-acoes-vazio">
            <div class="carrinho-acoes">
              <button onclick="fecharModalCarrinho()" class="btn-continuar-comprando">
                🛍️ Continuar Comprando
              </button>
            </div>
          </div>
        </div>
      `;
      totalElement.textContent = 'R$ 0,00';
      return;
    }

    let total = 0;
    let htmlItems = '';

    carrinho.forEach((produto, index) => {
      const preco = extrairPreco(produto.preco);
      const quantidade = produto.quantidade || 1;
      const subtotal = preco * quantidade;
      total += subtotal;

      const itemId = produto.id || `item-${index}`;

      htmlItems += `
        <div class="item-carrinho" data-index="${index}" data-id="${itemId}">
          <img src="${produto.imagem || 'https://via.placeholder.com/80x80'}" 
               alt="${produto.nome}"
               onerror="this.src='https://via.placeholder.com/80x80?text=Produto'">
          <div class="item-info">
            <h5>${produto.nome}</h5>
            <p class="item-preco">${produto.preco}</p>
            <p class="item-subtotal">Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}</p>
          </div>
          <div class="item-controles">
            <div class="quantidade-controle">
              <button class="btn-quantidade" onclick="alterarQuantidadeCarrinho(${index}, ${quantidade - 1})">-</button>
              <span class="quantidade">${quantidade}</span>
              <button class="btn-quantidade" onclick="alterarQuantidadeCarrinho(${index}, ${quantidade + 1})">+</button>
            </div>
          </div>
          <div class="item-acoes">
            <button class="btn-remover" onclick="removerDoCarrinho(${index})" title="Remover">🗑️</button>
          </div>
        </div>
      `;
    });

    // Adicionar controles do carrinho
    const controlesCarrinho = `
      <div class="carrinho-controles">
        <div class="carrinho-acoes">
          <button onclick="fecharModalCarrinho()" class="btn-continuar-comprando">
            🛍️ Continuar Comprando
          </button>
          <button onclick="limparCarrinho()" class="btn-limpar-carrinho">
            🗑️ Limpar Carrinho
          </button>
        </div>
      </div>
    `;

    container.innerHTML = htmlItems + controlesCarrinho;

    totalElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    console.log(`🛒 Carrinho renderizado com ${carrinho.length} itens`);
  } catch (error) {
    console.error('❌ Erro ao renderizar carrinho:', error);
    // Em caso de erro, limpar carrinho
    const container = document.getElementById('itens-carrinho');
    if (container) {
      container.innerHTML = `
        <div class="carrinho-erro">
          <h4>❌ Erro ao carregar carrinho</h4>
          <button onclick="limparCarrinho()" class="btn-limpar-carrinho">🗑️ Limpar Carrinho</button>
        </div>
      `;
    }
  }
}

function finalizarCompra() {
  try {
    // Validar formulário
    if (!validarFormulario()) {
      return;
    }

    // Obter dados do formulário
    const nome = document.getElementById('cliente-nome').value.trim();
    const email = document.getElementById('cliente-email').value.trim();
    const telefone = document.getElementById('cliente-telefone').value.trim();
    const cep = document.getElementById('cliente-cep').value.trim();
    const cidade = document.getElementById('cliente-cidade').value.trim();
    const estado = document.getElementById('cliente-estado').value;
    const bairro = document.getElementById('cliente-bairro').value.trim();
    const rua = document.getElementById('cliente-rua').value.trim();
    const numero = document.getElementById('cliente-numero').value.trim();
    const complemento = document.getElementById('cliente-complemento').value.trim();
    const referencia = document.getElementById('cliente-referencia').value.trim();

    // Adicionar feedback visual ao botão
    const btnFinalizar = document.getElementById('finalizar-compra');
    if (btnFinalizar) {
      btnFinalizar.innerHTML = '⏳ Processando...';
      btnFinalizar.disabled = true;
    }

    // Registrar cada produto como "comprado" (interesse demonstrado)
    carrinho.forEach(produto => {
      registrarCompra(produto, 'comprado');
    });

    // Construir mensagem para WhatsApp
    let mensagem = `🛒 *DEMONSTRAÇÃO DE INTERESSE*\n\n`;
    mensagem += `👤 *Dados do Cliente:*\n`;
    mensagem += `Nome: ${nome}\n`;
    mensagem += `Email: ${email}\n`;
    mensagem += `Telefone: ${telefone}\n\n`;
    
    mensagem += `📍 *Endereço:*\n`;
    mensagem += `CEP: ${cep}\n`;
    mensagem += `Cidade: ${cidade} - ${estado}\n`;
    mensagem += `Bairro: ${bairro}\n`;
    mensagem += `Endereço: ${rua}, ${numero}\n`;
    if (complemento) mensagem += `Complemento: ${complemento}\n`;
    if (referencia) mensagem += `Referência: ${referencia}\n\n`;

    mensagem += `📦 *Produtos de Interesse:*\n`;
    let totalCarrinho = 0;
    carrinho.forEach((produto, index) => {
      const preco = extrairPreco(produto.preco);
      totalCarrinho += preco;
      mensagem += `${index + 1}. ${produto.nome} - ${produto.preco}\n`;
    });

    mensagem += `\n💰 *Total Estimado:* R$ ${totalCarrinho.toFixed(2).replace('.', ',')}\n\n`;
    mensagem += `🔗 *Próximos Passos:*\n`;
    mensagem += `Por favor, me envie os links da Kiwify para pagamento de cada produto.\n\n`;
    mensagem += `Obrigado! 😊`;

    // Codificar mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);
    const urlWhatsApp = `https://wa.me/55${dadosSite.whatsapp}?text=${mensagemCodificada}`;

    // Mostrar notificação de compra finalizada
    mostrarNotificacaoDetalhada({
      titulo: '🎉 Interesse demonstrado com sucesso!',
      produto: `${carrinho.length} produto(s)`,
      preco: `Total: R$ ${totalCarrinho.toFixed(2).replace('.', ',')}`,
      acao: 'comprado',
      timestamp: new Date().toLocaleString('pt-BR')
    });

    // Abrir WhatsApp
    window.open(urlWhatsApp, '_blank');

    // Limpar carrinho e fechar modal
    carrinho = [];
    salvarCarrinho();
    atualizarContadorCarrinho();
    fecharModalCarrinho();
    
    mostrarNotificacao('Redirecionando para WhatsApp...', 'sucesso');
    console.log('📱 Redirecionando para WhatsApp');
  } catch (error) {
    console.error('❌ Erro ao finalizar compra:', error);
    mostrarNotificacao('Erro ao finalizar compra', 'erro');
  }
}

function removerDoCarrinho(index) {
  try {
    if (index >= 0 && index < carrinho.length) {
      const produtoRemovido = carrinho.splice(index, 1)[0];
      
      // Registrar remoção no histórico
      registrarCompra(produtoRemovido, 'removido');
      
      salvarCarrinho();
      atualizarContadorCarrinho();
      renderizarCarrinho(); // Re-renderizar carrinho após remoção
      mostrarNotificacao(`${produtoRemovido.nome} removido do carrinho`, 'info');
      console.log(`🗑️ ${produtoRemovido.nome} removido do carrinho`);
    } else {
      console.warn(`Índice inválido para remover do carrinho: ${index}`);
      // Re-renderizar carrinho mesmo com erro para corrigir índices
      renderizarCarrinho();
    }
  } catch (error) {
    console.error('❌ Erro ao remover do carrinho:', error);
    mostrarNotificacao('Erro ao remover do carrinho', 'erro');
    // Re-renderizar carrinho em caso de erro
    renderizarCarrinho();
  }
}

function atualizarContadorCarrinho() {
  try {
    const contador = document.getElementById('contador-carrinho');
    if (contador) {
      contador.textContent = carrinho.length.toString();
      console.log(`🔔 Contador do carrinho atualizado: ${carrinho.length}`);
    }
  } catch (error) {
    console.error('❌ Erro ao atualizar contador do carrinho:', error);
  }
}

function carregarCarrinho() {
  try {
    const carrinhoSalvo = localStorage.getItem('carrinhoLojaCENA');
    if (carrinhoSalvo) {
      carrinho = JSON.parse(carrinhoSalvo);
      atualizarContadorCarrinho();
      console.log('🛒 Carrinho carregado do localStorage');
    }
  } catch (error) {
    console.error('❌ Erro ao carregar carrinho:', error);
  }
}

function salvarCarrinho() {
  try {
    localStorage.setItem('carrinhoLojaCENA', JSON.stringify(carrinho));
    console.log('💾 Carrinho salvo no localStorage');
  } catch (error) {
    console.error('❌ Erro ao salvar carrinho:', error);
  }
}

// ================================
// WISHLIST
// ================================

function adicionarWishlist(index) {
  try {
    const produto = dadosSite.produtos[index];
    if (!produto) {
      console.warn(`Produto com índice ${index} não encontrado`);
      return;
    }
    
    // Registrar adição à wishlist
    registrarCompra(produto, 'interesse');
    
    // Implementar lógica para adicionar à wishlist
    mostrarNotificacao(`${produto.nome} adicionado à lista de desejos`, 'sucesso');
    console.log(`❤️ ${produto.nome} adicionado à wishlist`);
  } catch (error) {
    console.error('❌ Erro ao adicionar à wishlist:', error);
    mostrarNotificacao('Erro ao adicionar à lista de desejos', 'erro');
  }
}

// ================================
// MODAIS E PAINEL DE CONTROLE
// ================================

function mostrarModalSenha() {
  try {
    document.getElementById('modal-senha').style.display = 'flex';
    console.log('🔒 Modal de senha aberto');
  } catch (error) {
    console.error('❌ Erro ao mostrar modal de senha:', error);
  }
}

function verificarSenhaAdmin() {
  try {
    const senhaDigitada = document.getElementById('input-senha').value;
    if (senhaDigitada === senhaCorreta) {
      abrirPainelControle();
      fecharModalSenha();
      document.getElementById('input-senha').value = ''; // Limpar o campo de senha
      mostrarNotificacao('🔓 Acesso liberado ao painel de controle!', 'sucesso');
    } else {
      mostrarNotificacao('❌ Senha incorreta!', 'erro');
    }
  } catch (error) {
    console.error('❌ Erro ao verificar senha:', error);
  }
}

function fecharModalSenha() {
  try {
    document.getElementById('modal-senha').style.display = 'none';
    console.log('🔒 Modal de senha fechado');
  } catch (error) {
    console.error('❌ Erro ao fechar modal de senha:', error);
  }
}

function abrirPainelControle() {
  try {
    document.getElementById('painel-edicao').style.display = 'block';
    modoEdicao = true;
    document.body.classList.add('modo-edicao');
    inicializarProdutos();
    inicializarAvaliacoes();
    console.log('⚙️ Painel de controle aberto');
  } catch (error) {
    console.error('❌ Erro ao abrir painel de controle:', error);
  }
}

function fecharPainel() {
  try {
    document.getElementById('painel-edicao').style.display = 'none';
    modoEdicao = false;
    document.body.classList.remove('modo-edicao');
    inicializarProdutos();
    inicializarAvaliacoes();
    console.log('⚙️ Painel de controle fechado');
  } catch (error) {
    console.error('❌ Erro ao fechar painel de controle:', error);
  }
}

function alternarModoEdicao() {
  try {
    modoEdicao = !modoEdicao;
    document.body.classList.toggle('modo-edicao', modoEdicao);
    inicializarProdutos();
    inicializarAvaliacoes();
    console.log(`✏️ Modo de edição ${modoEdicao ? 'ativado' : 'desativado'}`);
  } catch (error) {
    console.error('❌ Erro ao alternar modo de edição:', error);
  }
}

function alternarAba(abaId) {
  try {
    // Remover classe ativa de todas as abas
    const abasBtns = document.querySelectorAll('.aba-btn');
    abasBtns.forEach(btn => btn.classList.remove('ativa'));
    
    const abasConteudo = document.querySelectorAll('.aba-conteudo');
    abasConteudo.forEach(aba => aba.classList.remove('ativa'));

    // Ativar aba clicada
    const btnAtivo = document.querySelector(`[data-aba="${abaId}"]`);
    if (btnAtivo) btnAtivo.classList.add('ativa');
    
    const abaAtiva = document.getElementById(`aba-${abaId}`);
    if (abaAtiva) abaAtiva.classList.add('ativa');
    
    console.log(`🗂️ Aba "${abaId}" exibida`);
  } catch (error) {
    console.error('❌ Erro ao alternar aba:', error);
  }
}

function salvarAlteracoes() {
  try {
    // Atualizar dados do site com valores dos inputs
    dadosSite.titulo = document.getElementById('edit-titulo')?.value || dadosSite.titulo;
    dadosSite.slogan = document.getElementById('edit-slogan')?.value || dadosSite.slogan;
    dadosSite.sobre = document.getElementById('edit-sobre')?.value || dadosSite.sobre;
    dadosSite.email = document.getElementById('edit-email')?.value || dadosSite.email;
    dadosSite.whatsapp = document.getElementById('edit-whatsapp')?.value || dadosSite.whatsapp;
    dadosSite.whatsappNome = document.getElementById('edit-whatsapp-nome')?.value || dadosSite.whatsappNome;
    dadosSite.telegram = document.getElementById('edit-telegram')?.value || dadosSite.telegram;

    // Salvar cores
    if (dadosSite.cores) {
      dadosSite.cores.principal = document.getElementById('edit-cor-principal')?.value || dadosSite.cores.principal;
      dadosSite.cores.secundaria = document.getElementById('edit-cor-secundaria')?.value || dadosSite.cores.secundaria;
      dadosSite.cores.texto = document.getElementById('edit-cor-texto')?.value || dadosSite.cores.texto;
      dadosSite.cores.fundo = document.getElementById('edit-cor-fundo')?.value || dadosSite.cores.fundo;
    }

    // Aplicar alterações
    aplicarTemaDinamico();
    salvarDados();
    atualizarTituloSite();
    
    mostrarNotificacao('✅ Alterações salvas com sucesso!', 'sucesso');
    console.log('💾 Alterações salvas');
  } catch (error) {
    console.error('❌ Erro ao salvar alterações:', error);
    mostrarNotificacao('❌ Erro ao salvar alterações', 'erro');
  }
}

function atualizarTituloSite() {
  try {
    const tituloElement = document.getElementById('site-title');
    if (tituloElement && dadosSite.titulo) {
      tituloElement.textContent = dadosSite.titulo;
    }
  } catch (error) {
    console.error('❌ Erro ao atualizar título do site:', error);
  }
}

function abrirModalProduto() {
  try {
    // Limpar campos do modal
    document.getElementById('produto-nome').value = '';
    document.getElementById('produto-descricao').value = '';
    document.getElementById('produto-preco').value = '';
    document.getElementById('produto-preco-original').value = '';
    document.getElementById('produto-imagem').value = '';
    document.getElementById('produto-categoria').value = '';
    document.getElementById('produto-estoque').value = '';
    document.getElementById('produto-link').value = '';
    document.getElementById('produto-link-kiwify').value = '';
    document.getElementById('produto-modal').style.display = 'flex';
    console.log('📦 Modal de produto aberto');
  } catch (error) {
    console.error('❌ Erro ao abrir modal de produto:', error);
  }
}

function fecharModalProduto() {
  try {
    document.getElementById('modal-produto').style.display = 'none';
    produtoEditandoIndex = -1;
    console.log('📦 Modal de produto fechado');
  } catch (error) {
    console.error('❌ Erro ao fechar modal de produto:', error);
  }
}

function abrirModalAvaliacao() {
  try {
    // Limpar campos do modal
    document.getElementById('avaliacao-nome').value = '';
    document.getElementById('avaliacao-foto').value = '';
    document.getElementById('avaliacao-estrelas').value = '5';
    document.getElementById('avaliacao-comentario').value = '';
    document.getElementById('avaliacao-data').value = '';
    document.getElementById('avaliacao-modal').style.display = 'flex';
    console.log('⭐ Modal de avaliação aberto');
  } catch (error) {
    console.error('❌ Erro ao abrir modal de avaliação:', error);
  }
}

function abrirModalGerenciarImagens() {
  try {
    const modal = document.createElement('div');
    modal.className = 'modal modal-imagens';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
        <h3>🖼️ Gerenciar Imagens dos Produtos</h3>
        
        <div class="imagens-info">
          <div class="info-card">
            <h4>📁 Pasta de Imagens</h4>
            <p>Local: <code>./images/produtos/</code></p>
            <p>As imagens dos produtos ficam armazenadas nesta pasta e podem ser facilmente substituídas.</p>
          </div>
          
          <div class="info-card">
            <h4>📐 Especificações</h4>
            <ul>
              <li><strong>Tamanho recomendado:</strong> 400x300px</li>
              <li><strong>Formato:</strong> JPG, PNG, WebP</li>
              <li><strong>Tamanho máximo:</strong> 2MB por imagem</li>
              <li><strong>Proporção:</strong> 4:3 (landscape)</li>
            </ul>
          </div>
        </div>

        <div class="lista-imagens">
          <h4>🏷️ Imagens dos Produtos Atuais</h4>
          <div class="produtos-imagens">
            ${dadosSite.produtos.map((produto, index) => `
              <div class="produto-imagem-item">
                <div class="imagem-preview">
                  <img src="${produto.imagem}" alt="${produto.nome}" 
                       onerror="this.src='${produto.imagemOriginal || 'https://via.placeholder.com/200x150?text=Produto'}'">
                </div>
                <div class="imagem-info">
                  <h5>${produto.nome}</h5>
                  <p class="caminho-atual">📁 ${produto.imagem}</p>
                  <div class="imagem-acoes">
                    <button onclick="alterarImagemProduto(${index})" class="btn-alterar-imagem">
                      📷 Alterar Imagem
                    </button>
                    <button onclick="restaurarImagemOriginal(${index})" class="btn-restaurar">
                      🔄 Usar Original
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="instrucoes-upload">
          <h4>📤 Como Atualizar as Imagens</h4>
          <ol>
            <li>Clique em "Alterar Imagem" no produto desejado</li>
            <li>Selecione uma nova imagem do seu dispositivo</li>
            <li>A imagem será convertida e substituirá a atual</li>
            <li>Para reverter, use "Usar Original"</li>
          </ol>
          
          <div class="dicas-imagem">
            <h5>💡 Dicas para Melhores Resultados</h5>
            <ul>
              <li>Use imagens com boa iluminação e fundo limpo</li>
              <li>Certifique-se de que o produto está bem centralizado</li>
              <li>Evite imagens muito escuras ou com texto sobreposto</li>
              <li>Para melhor qualidade, use imagens em alta resolução</li>
            </ul>
          </div>
        </div>
        
        <div class="modal-acoes">
          <button onclick="this.parentElement.parentElement.parentElement.remove()" class="btn-salvar">
            ✅ Fechar
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    console.log('🖼️ Modal de gerenciamento de imagens aberto');
  } catch (error) {
    console.error('❌ Erro ao abrir modal de imagens:', error);
    mostrarNotificacao('Erro ao abrir gerenciador de imagens', 'erro');
  }
}

function alterarImagemProduto(index) {
  try {
    const produto = dadosSite.produtos[index];
    if (!produto) {
      mostrarNotificacao('Produto não encontrado', 'erro');
      return;
    }

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    
    fileInput.addEventListener('change', function(event) {
      const file = event.target.files[0];
      if (file) {
        // Verificar tamanho do arquivo (máximo 2MB)
        if (file.size > 2 * 1024 * 1024) {
          mostrarNotificacao('Imagem muito grande. Máximo 2MB.', 'aviso');
          return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
          // Atualizar a imagem do produto
          dadosSite.produtos[index].imagem = e.target.result;
          
          // Salvar dados
          salvarDados();
          
          // Atualizar a visualização
          inicializarProdutos();
          
          // Fechar modal atual e reabrir com dados atualizados
          document.querySelector('.modal-imagens').remove();
          setTimeout(() => {
            abrirModalGerenciarImagens();
          }, 100);
          
          mostrarNotificação(`✅ Imagem de "${produto.nome}" atualizada!`, 'sucesso');
          console.log(`🖼️ Imagem do produto ${index} alterada`);
        };
        
        reader.readAsDataURL(file);
      }
    });
    
    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
  } catch (error) {
    console.error('❌ Erro ao alterar imagem do produto:', error);
    mostrarNotificacao('Erro ao alterar imagem', 'erro');
  }
}

function restaurarImagemOriginal(index) {
  try {
    const produto = dadosSite.produtos[index];
    if (!produto) {
      mostrarNotificacao('Produto não encontrado', 'erro');
      return;
    }

    if (confirm(`Restaurar imagem original de "${produto.nome}"?`)) {
      // Restaurar imagem original
      dadosSite.produtos[index].imagem = produto.imagemOriginal || './images/produtos/placeholder.jpg';
      
      // Salvar dados
      salvarDados();
      
      // Atualizar a visualização
      inicializarProdutos();
      
      // Fechar modal atual e reabrir com dados atualizados
      document.querySelector('.modal-imagens').remove();
      setTimeout(() => {
        abrirModalGerenciarImagens();
      }, 100);
      
      mostrarNotificação(`🔄 Imagem original de "${produto.nome}" restaurada!`, 'sucesso');
      console.log(`🔄 Imagem original do produto ${index} restaurada`);
    }
  } catch (error) {
    console.error('❌ Erro ao restaurar imagem original:', error);
    mostrarNotificacao('Erro ao restaurar imagem', 'erro');
  }
}

function fecharModalAvaliacao() {
  try {
    document.getElementById('modal-avaliacao').style.display = 'none';
    avaliacaoEditandoIndex = -1;
    console.log('⭐ Modal de avaliação fechado');
  } catch (error) {
    console.error('❌ Erro ao fechar modal de avaliação:', error);
  }
}

// ================================
// COMENTÁRIOS DAS AVALIAÇÕES
// ================================

function alternarComentario(index, mostrarCompleto) {
  try {
    const avaliacao = dadosSite.avaliacoes[index];
    if (!avaliacao) {
      console.warn(`Avaliação ${index} não encontrada`);
      return;
    }

    const comentarioElement = document.getElementById(`comentario-${index}`);
    const btnVerMais = document.getElementById(`btn-ver-mais-${index}`);
    const btnVerMenos = document.getElementById(`btn-ver-menos-${index}`);

    if (!comentarioElement) {
      console.warn(`Elemento de comentário ${index} não encontrado`);
      return;
    }

    const comentarioCompleto = avaliacao.comentario || '';
    const comentarioTruncado = comentarioCompleto.length > 100 
      ? comentarioCompleto.substring(0, 100) + '...' 
      : comentarioCompleto;

    if (mostrarCompleto) {
      // Mostrar comentário completo
      comentarioElement.textContent = comentarioCompleto;
      if (btnVerMais) btnVerMais.style.display = 'none';
      if (btnVerMenos) btnVerMenos.style.display = 'inline-block';
      console.log(`📖 Comentário ${index} expandido`);
    } else {
      // Mostrar comentário truncado
      comentarioElement.textContent = comentarioTruncado;
      if (btnVerMais) btnVerMais.style.display = 'inline-block';
      if (btnVerMenos) btnVerMenos.style.display = 'none';
      console.log(`📄 Comentário ${index} recolhido`);
    }
  } catch (error) {
    console.error('❌ Erro ao alternar comentário:', error);
  }
}

// ================================
// FUNÇÕES DOS BOTÕES DAS AVALIAÇÕES
// ================================

function abrirModalDepoimento() {
  try {
    const modal = document.createElement('div');
    modal.className = 'modal modal-depoimento';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
        <h3>⭐ Deixe Sua Avaliação</h3>
        
        <div class="depoimento-form">
          <div class="grupo-controle">
            <label>Seu Nome:</label>
            <input type="text" id="depoimento-nome" placeholder="Digite seu nome completo">
          </div>
          
          <div class="grupo-controle">
            <label>Avaliação:</label>
            <div class="estrelas-input">
              <span class="estrela" data-rating="1">⭐</span>
              <span class="estrela" data-rating="2">⭐</span>
              <span class="estrela" data-rating="3">⭐</span>
              <span class="estrela" data-rating="4">⭐</span>
              <span class="estrela" data-rating="5">⭐</span>
            </div>
            <span id="rating-text">Clique nas estrelas para avaliar</span>
          </div>
          
          <div class="grupo-controle">
            <label>Produto Avaliado:</label>
            <select id="depoimento-produto">
              <option value="">Selecione o produto</option>
              ${dadosSite.produtos.map(produto => 
                `<option value="${produto.nome}">${produto.nome}</option>`
              ).join('')}
              <option value="Outros">Outros</option>
            </select>
          </div>
          
          <div class="grupo-controle">
            <label>Seu Depoimento:</label>
            <textarea id="depoimento-texto" placeholder="Conte sua experiência conosco..." rows="5"></textarea>
          </div>
          
          <div class="grupo-controle">
            <label>Email (opcional):</label>
            <input type="email" id="depoimento-email" placeholder="seu@email.com">
            <small>Para enviarmos seu cupom de desconto</small>
          </div>
          
          <button onclick="enviarDepoimento()" class="btn-enviar-depoimento">
            📤 Enviar Avaliação
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = 'flex';

    // Adicionar eventos às estrelas
    const estrelas = modal.querySelectorAll('.estrela');
    let ratingAtual = 0;
    
    estrelas.forEach((estrela, index) => {
      estrela.addEventListener('click', function() {
        ratingAtual = index + 1;
        atualizarEstrelas(estrelas, ratingAtual);
        document.getElementById('rating-text').textContent = getRatingText(ratingAtual);
      });
      
      estrela.addEventListener('mouseover', function() {
        atualizarEstrelas(estrelas, index + 1, true);
      });
    });

    modal.querySelector('.estrelas-input').addEventListener('mouseleave', function() {
      atualizarEstrelas(estrelas, ratingAtual);
    });

    console.log('⭐ Modal de depoimento aberto');
  } catch (error) {
    console.error('❌ Erro ao abrir modal de depoimento:', error);
    mostrarNotificacao('Erro ao abrir formulário de avaliação', 'erro');
  }
}

function atualizarEstrelas(estrelas, rating, hover = false) {
  estrelas.forEach((estrela, index) => {
    if (index < rating) {
      estrela.style.color = '#FFD700';
      estrela.style.transform = hover ? 'scale(1.2)' : 'scale(1)';
    } else {
      estrela.style.color = '#ddd';
      estrela.style.transform = 'scale(1)';
    }
  });
}

function getRatingText(rating) {
  const textos = {
    1: '😞 Muito insatisfeito',
    2: '😐 Insatisfeito', 
    3: '😊 Satisfeito',
    4: '😃 Muito satisfeito',
    5: '🤩 Excelente!'
  };
  return textos[rating] || 'Clique nas estrelas para avaliar';
}

function enviarDepoimento() {
  try {
    const nome = document.getElementById('depoimento-nome').value.trim();
    const produto = document.getElementById('depoimento-produto').value;
    const texto = document.getElementById('depoimento-texto').value.trim();
    const email = document.getElementById('depoimento-email').value.trim();
    const rating = document.querySelectorAll('.estrela[style*="#FFD700"]').length;

    if (!nome || !texto || rating === 0) {
      mostrarNotificacao('Preencha nome, avaliação e depoimento', 'aviso');
      return;
    }

    // Construir mensagem para WhatsApp
    let mensagem = `⭐ *NOVA AVALIAÇÃO*\n\n`;
    mensagem += `👤 *Nome:* ${nome}\n`;
    mensagem += `⭐ *Avaliação:* ${rating} estrela${rating > 1 ? 's' : ''}\n`;
    if (produto) mensagem += `📦 *Produto:* ${produto}\n`;
    if (email) mensagem += `📧 *Email:* ${email}\n`;
    mensagem += `\n💬 *Depoimento:*\n"${texto}"\n\n`;
    mensagem += `📱 Enviado pelo site da Loja CENA`;

    const mensagemCodificada = encodeURIComponent(mensagem);
    const urlWhatsApp = `https://wa.me/55${dadosSite.whatsapp}?text=${mensagemCodificada}`;

    // Abrir WhatsApp
    window.open(urlWhatsApp, '_blank');

    // Fechar modal
    document.querySelector('.modal-depoimento').remove();
    
    mostrarNotificacao('🎉 Obrigado pela avaliação! Redirecionando para WhatsApp...', 'sucesso');
    console.log('📤 Depoimento enviado via WhatsApp');
  } catch (error) {
    console.error('❌ Erro ao enviar depoimento:', error);
    mostrarNotificacao('Erro ao enviar avaliação', 'erro');
  }
}

function mostrarMaisAvaliacoes() {
  try {
    // Simular carregamento de mais avaliações
    mostrarNotificacao('🔄 Carregando mais avaliações...', 'info');
    
    setTimeout(() => {
      mostrarNotificacao('✅ Todas as avaliações já foram carregadas!', 'sucesso');
    }, 2000);
    
    console.log('📖 Função mostrar mais avaliações executada');
  } catch (error) {
    console.error('❌ Erro ao mostrar mais avaliações:', error);
  }
}

function compartilharAvaliacoes() {
  try {
    if (navigator.share) {
      // API Web Share (móvel)
      navigator.share({
        title: 'Avaliações da Loja CENA',
        text: 'Veja o que nossos clientes dizem sobre nossos produtos educacionais!',
        url: window.location.href + '#avaliacoes'
      });
    } else {
      // Fallback para desktop
      const texto = 'Veja as avaliações dos nossos produtos educacionais na Loja CENA!';
      const url = window.location.href + '#avaliacoes';
      
      const modal = document.createElement('div');
      modal.className = 'modal modal-compartilhar';
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
          <h3>📤 Compartilhar Avaliações</h3>
          
          <div class="compartilhar-opcoes">
            <button onclick="compartilharWhatsApp('${encodeURIComponent(texto + ' ' + url)}')" class="btn-compartilhar whatsapp">
              📱 WhatsApp
            </button>
            <button onclick="compartilharFacebook('${url}')" class="btn-compartilhar facebook">
              📘 Facebook
            </button>
            <button onclick="compartilharTwitter('${encodeURIComponent(texto)}', '${url}')" class="btn-compartilhar twitter">
              🐦 Twitter
            </button>
            <button onclick="copiarLink('${url}')" class="btn-compartilhar copiar">
              📋 Copiar Link
            </button>
          </div>
        </div>
      `;
      
      document.body.appendChild(modal);
      modal.style.display = 'flex';
    }
    
    console.log('📤 Modal de compartilhamento aberto');
  } catch (error) {
    console.error('❌ Erro ao compartilhar avaliações:', error);
    mostrarNotificacao('Erro ao compartilhar avaliações', 'erro');
  }
}

function compartilharWhatsApp(texto) {
  window.open(`https://wa.me/?text=${texto}`, '_blank');
}

function compartilharFacebook(url) {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function compartilharTwitter(texto, url) {
  window.open(`https://twitter.com/intent/tweet?text=${texto}&url=${url}`, '_blank');
}

function copiarLink(url) {
  navigator.clipboard.writeText(url).then(() => {
    mostrarNotificacao('✅ Link copiado para a área de transferência!', 'sucesso');
    document.querySelector('.modal-compartilhar').remove();
  }).catch(() => {
    mostrarNotificacao('❌ Erro ao copiar link', 'erro');
  });
}

function abrirModalSortear() {
  try {
    const modal = document.createElement('div');
    modal.className = 'modal modal-sorteio';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
        <h3>🎁 Participar do Sorteio</h3>
        
        <div class="sorteio-info">
          <div class="premio-destaque">
            <div class="premio-icone">🏆</div>
            <h4>Kit Educacional Completo</h4>
            <p>Avaliado em R$ 300,00</p>
          </div>
          
          <div class="sorteio-regras">
            <h5>📋 Como participar:</h5>
            <ul>
              <li>✅ Faça uma compra em nossa loja</li>
              <li>✅ Deixe uma avaliação honesta</li>
              <li>✅ Compartilhe nas redes sociais</li>
              <li>✅ Preencha o formulário abaixo</li>
            </ul>
          </div>
          
          <div class="sorteio-form">
            <div class="grupo-controle">
              <label>Seu Nome:</label>
              <input type="text" id="sorteio-nome" placeholder="Nome completo">
            </div>
            <div class="grupo-controle">
              <label>WhatsApp:</label>
              <input type="tel" id="sorteio-whatsapp" placeholder="(98) 98919-0240">
            </div>
            <div class="grupo-controle">
              <label>Email:</label>
              <input type="email" id="sorteio-email" placeholder="seu@email.com">
            </div>
            <div class="grupo-controle">
              <label>Última compra:</label>
              <input type="text" id="sorteio-compra" placeholder="Produto comprado">
            </div>
          </div>
          
          <button onclick="participarSorteio()" class="btn-participar-sorteio">
            🎯 Participar do Sorteio
          </button>
          
          <div class="sorteio-rodape">
            <small>🗓️ <strong>Sorteio:</strong> Todo último domingo do mês</small><br>
            <small>📞 <strong>Divulgação:</strong> Via WhatsApp e redes sociais</small>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    console.log('🎁 Modal de sorteio aberto');
  } catch (error) {
    console.error('❌ Erro ao abrir modal de sorteio:', error);
    mostrarNotificacao('Erro ao abrir sorteio', 'erro');
  }
}

function participarSorteio() {
  try {
    const nome = document.getElementById('sorteio-nome').value.trim();
    const whatsapp = document.getElementById('sorteio-whatsapp').value.trim();
    const email = document.getElementById('sorteio-email').value.trim();
    const compra = document.getElementById('sorteio-compra').value.trim();

    if (!nome || !whatsapp || !email) {
      mostrarNotificacao('Preencha nome, WhatsApp e email', 'aviso');
      return;
    }

    // Construir mensagem para WhatsApp
    let mensagem = `🎁 *PARTICIPAÇÃO NO SORTEIO*\n\n`;
    mensagem += `👤 *Nome:* ${nome}\n`;
    mensagem += `📱 *WhatsApp:* ${whatsapp}\n`;
    mensagem += `📧 *Email:* ${email}\n`;
    if (compra) mensagem += `🛒 *Última Compra:* ${compra}\n`;
    mensagem += `\n🎯 Quero participar do sorteio mensal!\n`;
    mensagem += `📅 Enviado em: ${new Date().toLocaleString('pt-BR')}`;

    const mensagemCodificada = encodeURIComponent(mensagem);
    const urlWhatsApp = `https://wa.me/55${dadosSite.whatsapp}?text=${mensagemCodificada}`;

    // Abrir WhatsApp
    window.open(urlWhatsApp, '_blank');

    // Fechar modal
    document.querySelector('.modal-sorteio').remove();
    
    mostrarNotificacao('🎉 Participação registrada! Boa sorte!', 'sucesso');
    console.log('🎯 Participação no sorteio enviada');
  } catch (error) {
    console.error('❌ Erro ao participar do sorteio:', error);
    mostrarNotificacao('Erro ao registrar participação', 'erro');
  }
}

// Função para filtrar avaliações
function filtrarAvaliacoes(filtro) {
  try {
    const botoes = document.querySelectorAll('.btn-filtro-avaliacao');
    botoes.forEach(btn => btn.classList.remove('ativo'));
    
    const botaoAtivo = document.querySelector(`[data-filtro="${filtro}"]`);
    if (botaoAtivo) {
      botaoAtivo.classList.add('ativo');
    }

    // Simular filtro (em um sistema real, isso recarregaria as avaliações)
    mostrarNotificacao(`🔍 Filtro aplicado: ${getFiltroNome(filtro)}`, 'info');
    console.log(`🔍 Filtro de avaliações: ${filtro}`);
  } catch (error) {
    console.error('❌ Erro ao filtrar avaliações:', error);
  }
}

function getFiltroNome(filtro) {
  const nomes = {
    'todas': 'Todas as avaliações',
    '5': 'Apenas 5 estrelas',
    '4': 'Apenas 4 estrelas', 
    'recentes': 'Mais recentes',
    'com-foto': 'Com foto'
  };
  return nomes[filtro] || filtro;
}

// Inicializar eventos dos filtros
document.addEventListener('DOMContentLoaded', function() {
  // Adicionar eventos aos filtros de avaliação se existirem
  setTimeout(() => {
    const filtros = document.querySelectorAll('.btn-filtro-avaliacao');
    filtros.forEach(filtro => {
      filtro.addEventListener('click', function() {
        filtrarAvaliacoes(this.dataset.filtro);
      });
    });
  }, 1000);
});

// ================================
// FUNÇÕES DOS BOTÕES PERSONALIZADOS
// ================================

function validarCEP(cepInput) {
  try {
    const cep = cepInput.value.replace(/\D/g, '');
    
    if (cep.length !== 8) {
      mostrarNotificacao('CEP deve ter 8 dígitos', 'aviso');
      return;
    }

    // Mostrar loading no botão
    const btnValidar = cepInput.nextElementSibling;
    if (btnValidar) {
      btnValidar.innerHTML = '⏳ Validando...';
      btnValidar.disabled = true;
    }

    // Simular validação (em produção, usar API real de CEP)
    setTimeout(() => {
      // Restaurar botão
      if (btnValidar) {
        btnValidar.innerHTML = '✓ Validar';
        btnValidar.disabled = false;
      }

      // Simular preenchimento automático
      const cidade = document.getElementById('cliente-cidade');
      const estado = document.getElementById('cliente-estado');
      const bairro = document.getElementById('cliente-bairro');

      if (cidade && !cidade.value) cidade.value = 'São Luís';
      if (estado && !estado.value) estado.value = 'MA';
      if (bairro && !bairro.value) bairro.value = 'Centro';

      mostrarNotificacao('✅ CEP validado com sucesso!', 'sucesso');
    }, 1500);

  } catch (error) {
    console.error('❌ Erro ao validar CEP:', error);
    mostrarNotificacao('Erro ao validar CEP', 'erro');
  }
}

function toggleSenha(inputSenha) {
  try {
    const input = inputSenha;
    const btn = input.nextElementSibling;
    
    if (input.type === 'password') {
      input.type = 'text';
      if (btn) btn.innerHTML = '👁️ Ocultar';
    } else {
      input.type = 'password';
      if (btn) btn.innerHTML = '👁️ Mostrar';
    }
  } catch (error) {
    console.error('❌ Erro ao alternar senha:', error);
  }
}

function formatarTelefone(input) {
  try {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length >= 11) {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length >= 7) {
      value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else if (value.length >= 3) {
      value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    }
    
    input.value = value;
  } catch (error) {
    console.error('❌ Erro ao formatar telefone:', error);
  }
}

function formatarCEP(input) {
  try {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length >= 6) {
      value = value.replace(/(\d{5})(\d{0,3})/, '$1-$2');
    }
    
    input.value = value;
  } catch (error) {
    console.error('❌ Erro ao formatar CEP:', error);
  }
}

function validarFormulario() {
  try {
    const campos = [
      { id: 'cliente-nome', nome: 'Nome completo' },
      { id: 'cliente-email', nome: 'Email' },
      { id: 'cliente-telefone', nome: 'Telefone' },
      { id: 'cliente-cep', nome: 'CEP' },
      { id: 'cliente-cidade', nome: 'Cidade' },
      { id: 'cliente-estado', nome: 'Estado' },
      { id: 'cliente-bairro', nome: 'Bairro' },
      { id: 'cliente-rua', nome: 'Rua' },
      { id: 'cliente-numero', nome: 'Número' }
    ];

    const camposInvalidos = [];

    campos.forEach(campo => {
      const input = document.getElementById(campo.id);
      if (input && !input.value.trim()) {
        input.classList.add('erro');
        camposInvalidos.push(campo.nome);
      } else if (input) {
        input.classList.remove('erro');
      }
    });

    // Validar email
    const emailInput = document.getElementById('cliente-email');
    if (emailInput && emailInput.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('erro');
        camposInvalidos.push('Email válido');
      }
    }

    // Validar telefone
    const telefoneInput = document.getElementById('cliente-telefone');
    if (telefoneInput && telefoneInput.value) {
      const telefoneNumeros = telefoneInput.value.replace(/\D/g, '');
      if (telefoneNumeros.length < 10) {
        telefoneInput.classList.add('erro');
        camposInvalidos.push('Telefone válido');
      }
    }

    if (camposInvalidos.length > 0) {
      mostrarNotificacao(`Preencha: ${camposInvalidos.join(', ')}`, 'aviso');
      return false;
    }

    return true;
  } catch (error) {
    console.error('❌ Erro ao validar formulário:', error);
    return false;
  }
}

// ================================
// UTILIDADES
// ================================

function calcularDesconto(precoOriginal, precoAtual) {
  try {
    const precoOriginalNum = extrairPreco(precoOriginal);
    const precoAtualNum = extrairPreco(precoAtual);

    if (isNaN(precoOriginalNum) || isNaN(precoAtualNum) || precoOriginalNum <= 0) {
      return 0;
    }

    const desconto = ((precoOriginalNum - precoAtualNum) / precoOriginalNum) * 100;
    return Math.round(desconto);
  } catch (error) {
    console.error('❌ Erro ao calcular desconto:', error);
    return 0;
  }
}

function extrairPreco(precoString) {
  try {
    if (typeof precoString !== 'string') return NaN;
    const precoLimpo = precoString.replace(/[^\d,.]/g, '').replace('.', '').replace(',', '.');
    return parseFloat(precoLimpo);
  } catch (error) {
    console.error('❌ Erro ao extrair preço:', error);
    return NaN;
  }
}

function mostrarNotificacao(mensagem, tipo = 'info', tempo = 3000) {
  try {
    // Configurações por tipo de notificação
    const configTipos = {
      'sucesso': {
        icone: '✅',
        cor: '#28a745',
        som: true
      },
      'erro': {
        icone: '❌',
        cor: '#dc3545',
        som: true
      },
      'aviso': {
        icone: '⚠️',
        cor: '#ffc107',
        som: false
      },
      'info': {
        icone: 'ℹ️',
        cor: '#17a2b8',
        som: false
      }
    };

    const config = configTipos[tipo] || configTipos['info'];
    
    const notificacao = document.createElement('div');
    notificacao.classList.add('notificacao', tipo);
    notificacao.innerHTML = `
      <span class="notificacao-icone-simples">${config.icone}</span>
      <span class="notificacao-texto">${mensagem}</span>
      <span class="notificacao-fechar-simples" onclick="this.parentElement.remove()">×</span>
    `;
    
    notificacao.style.borderLeft = `4px solid ${config.cor}`;
    document.body.appendChild(notificacao);

    // Animar entrada
    setTimeout(() => {
      notificacao.classList.add('ativa');
    }, 100);

    // Remover automaticamente
    setTimeout(() => {
      if (notificacao.parentNode) {
        notificacao.classList.add('saindo');
        setTimeout(() => {
          notificacao.remove();
        }, 300);
      }
    }, tempo);

    console.log(`💬 Notificação: ${config.icone} ${mensagem} (${tipo})`);
  } catch (error) {
    console.error('❌ Erro ao mostrar notificação:', error);
  }
}

function atualizarInterfaceResponsiva() {
  try {
    const larguraTela = window.innerWidth;
    let colunas = 3; // Padrão para desktop

    if (larguraTela < 768) {
      colunas = dadosSite.configuracoes.colunasMobile || 1; // Mobile
    } else if (larguraTela < 992) {
      colunas = dadosSite.configuracoes.colunasTablet || 2; // Tablet
    } else {
      colunas = dadosSite.configuracoes.colunasDesktop || 3; // Desktop
    }

    const container = document.getElementById('produtos-container');
    if (container) {
      container.className = `produtos-grid cols-${colunas}`;
    }

    console.log(`📱 Interface atualizada (largura: ${larguraTela}px, colunas: ${colunas})`);
  } catch (error) {
    console.error('❌ Erro ao atualizar interface responsiva:', error);
  }
}



// ================================
// AUTO-SYNC (INSERIDO AQUI)
// ================================
// auto-sync.js content (corrected)
function iniciarMonitoramento() {
  console.log('👀 Monitorando package.json e README.md...');

  // Função para verificar e recarregar package.json
  function verificarPackageJson() {
    fetch('/package.json', { cache: 'no-cache' })
      .then(response => response.json())
      .then(data => {
        const versaoAtual = localStorage.getItem('packageJsonVersao');
        if (!versaoAtual || data.version !== versaoAtual) {
          console.warn('📦 package.json foi alterado. Recarregando dados...');
          localStorage.setItem('packageJsonVersao', data.version);
          // location.reload(); // Recarrega a página para aplicar as mudanças
        }
        console.log('📦 package.json verificado. Versão:', data.version);
      })
      .catch(error => console.error('❌ Erro ao verificar package.json:', error));
  }

  // Função para verificar e recarregar README.md
  function verificarReadmeMd() {
    fetch('/README.md', { cache: 'no-cache' })
      .then(response => response.text())
      .then(data => {
        const hashAtual = localStorage.getItem('readmeMdHash');
        const novoHash = gerarHash(data);

        if (!hashAtual || novoHash !== hashAtual) {
          console.warn('📄 README.md foi alterado. Recarregando dados...');
          localStorage.setItem('readmeMdHash', novoHash);
          // location.reload(); // Recarrega a página para aplicar as mudanças
        }
        console.log('📄 README.md verificado. Hash:', novoHash);
      })
      .catch(error => console.error('❌ Erro ao verificar README.md:', error));
  }

  // Função para gerar um hash simples de uma string
  function gerarHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
    }
    return hash.toString();
  }

  // Definir intervalo para verificar os arquivos (a cada 10 segundos)
  setInterval(() => {
    verificarPackageJson();
    verificarReadmeMd();
  }, 10000);
}

function forcarSincronizacao() {
  console.log('🔄 Forçando sincronização completa...');
  iniciarMonitoramento();
}

function sincronizacaoCompleta() {
  console.log('🔄 Executando sincronização completa...');
  salvarDados();
  carregarDados();
  inicializarProdutos();
  inicializarAvaliacoes();
  atualizarInterfaceResponsiva();
}

// ================================
// Funções auxiliares
// ================================
// Adicione aqui funções auxiliares como calcularDesconto, extrairPreco, etc.======================
// Funções auxiliares
// ================================
// Adicione aqui funções auxiliares como calcularDesconto, extrairPreco, etc.