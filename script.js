function verificarVelocidade() {
    // Exibe as opções de tipo de via
    const tipoVia = prompt(
      "Escolha o tipo de via:\n1 - Rodovia (120 km/h)\n2 - Avenida (80 km/h)\n3 - Rua (50 km/h)"
    );
  
    let limite;
    let nomeVia;
  
    // Define o limite de acordo com o tipo de via
    switch (tipoVia) {
      case '1':
        limite = 120;
        nomeVia = "Rodovia";
        break;
      case '2':
        limite = 80;
        nomeVia = "Avenida";
        break;
      case '3':
        limite = 50;
        nomeVia = "Rua";
        break;
      default:
        alert("Opção inválida! Por favor, escolha entre 1, 2 ou 3.");
        return; // Interrompe a execução se a entrada for inválida
    }
  
    // Solicita a velocidade do veículo
    const velocidade = parseFloat(prompt("Digite a velocidade do veículo (em km/h):"));
  
    // Verifica se a entrada de velocidade é válida
    if (isNaN(velocidade)) {
      alert("Por favor, insira um número válido para a velocidade.");
      return;
    }
  
    // Verifica se a velocidade está dentro ou acima do limite
    if (velocidade > limite) {
      alert(`Você está acima do limite de velocidade na ${nomeVia}! Limite: ${limite} km/h.`);
    } else {
      alert(`Velocidade dentro do limite na ${nomeVia}. Limite: ${limite} km/h.`);
    }
  }
  
  // Chamada da função para executar o programa
  verificarVelocidade();