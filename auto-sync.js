// ================================
// SISTEMA DE SINCRONIZAÇÃO AUTOMÁTICA
// ================================

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
          // location.reload(); // Comentado para evitar recarregamento automático
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
          // location.reload(); // Comentado para evitar recarregamento automático
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

  // Definir intervalo para verificar os arquivos (a cada 30 segundos para reduzir logs)
  setInterval(() => {
    verificarPackageJson();
    verificarReadmeMd();
  }, 30000);

  // Verificação inicial
  verificarPackageJson();
  verificarReadmeMd();
}

function forcarSincronizacao() {
  console.log('🔄 Forçando sincronização completa...');
  iniciarMonitoramento();
}

function sincronizacaoCompleta() {
  try {
    console.log('🔄 Executando sincronização completa...');

    // Verificar se as funções existem antes de chamar
    if (typeof salvarDados === 'function') {
      salvarDados();
    }

    if (typeof carregarDados === 'function') {
      carregarDados();
    }

    if (typeof inicializarProdutos === 'function') {
      inicializarProdutos();
    }

    if (typeof inicializarAvaliacoes === 'function') {
      inicializarAvaliacoes();
    }

    if (typeof atualizarInterfaceResponsiva === 'function') {
      atualizarInterfaceResponsiva();
    }

    console.log('✅ Sincronização completa executada');
  } catch (error) {
    console.error('❌ Erro na sincronização completa:', error);
  }
}

function verificarConsistencia() {
  try {
    // Verificar se elementos essenciais existem
    const elementosEssenciais = [
      'site-title',
      'produtos-container',
      'btn-modificar',
      'contador-carrinho'
    ];

    elementosEssenciais.forEach(id => {
      const elemento = document.getElementById(id);
      if (!elemento) {
        console.warn(`⚠️ Elemento essencial não encontrado: ${id}`);
        restaurarElemento(id);
      }
    });

    // Verificar carrinho
    verificarCarrinho();

    console.log('✅ Verificação de consistência concluída');
  } catch (error) {
    console.error('❌ Erro ao verificar consistência:', error);
  }
}

function verificarCarrinho() {
  try {
    // Verificar se o carrinho existe globalmente
    if (typeof window.carrinho === 'undefined') {
      window.carrinho = [];
      console.warn('⚠️ Carrinho não definido, inicializando...');
    }

    // Verificar se o contador existe e está atualizado
    const contador = document.getElementById('contador-carrinho');
    if (contador && window.carrinho) {
      contador.textContent = window.carrinho.length.toString();
    }
  } catch (error) {
    console.error('❌ Erro ao verificar carrinho:', error);
  }
}

function restaurarElemento(id) {
  try {
    switch (id) {
      case 'site-title':
        console.log('🔧 Tentando restaurar elemento site-title...');
        break;
      case 'produtos-container':
        console.log('🔧 Tentando restaurar elemento produtos-container...');
        break;
      case 'btn-modificar':
        console.log('🔧 Tentando restaurar elemento btn-modificar...');
        break;
      case 'contador-carrinho':
        console.log('🔧 Tentando restaurar elemento contador-carrinho...');
        break;
      default:
        console.log(`🔧 Tentando restaurar elemento ${id}...`);
    }
  } catch (error) {
    console.error(`❌ Erro ao restaurar elemento ${id}:`, error);
  }
}

// Inicializar monitoramento quando o arquivo for carregado
if (typeof document !== 'undefined' && document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(iniciarMonitoramento, 1000);
  });
} else if (typeof document !== 'undefined') {
  setTimeout(iniciarMonitoramento, 1000);
}