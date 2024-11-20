// Caso o jogador finalize a aventura ou chegue ao final das etapas
function finishGame() {
    story.innerHTML = "Você completou a jornada! Parabéns, aventureiro! Agora, a história chega ao fim.";
    choice1.innerHTML = "";
    choice2.innerHTML = "";
    // Exibe o caminho percorrido e a conclusão final
    const pathDiv = document.createElement("div");
    pathDiv.classList.add("path");
    pathDiv.innerHTML = "<h3>Caminho Percorrido:</h3>" + userChoices.join(" -> ");
    document.body.appendChild(pathDiv);

    // Exibe um botão para reiniciar o jogo ou ir para a página inicial
    const restartBtn = document.createElement("button");
    restartBtn.innerHTML = "Reiniciar Aventura";
    restartBtn.onclick = () => location.reload(); // Reinicia o jogo
    document.body.appendChild(restartBtn);
}

// Função para verificar se a aventura terminou
function checkGameOver() {
    if (dayCounter >= 50) {
        finishGame(); // Se o contador de dias atingir 50, a aventura acabou
    }
}

// Função de seleção de escolhas, com incremento do contador de dias
function makeChoice(choiceNumber) {
    if (choiceNumber === 101) {
        finishGame(); // Chegada ao final do jogo
    }
    userChoices.push(`Dia ${dayCounter}: Escolha ${choiceNumber}`);
    dayCounter++; // Incrementa o contador de dias

    // Atualiza o dia na tela
    document.getElementById("day").innerHTML = `Dia ${dayCounter}`;

    // Verifica se o jogo chegou ao fim
    checkGameOver();

    // Definir qual história será exibida dependendo da escolha
    switch (choiceNumber) {
        case 1:
            story.innerHTML = `Você acorda em uma floresta densa. O que fará a seguir?`;
            choice1.innerHTML = 'Explorar o caminho à direita.';
            choice2.innerHTML = 'Seguir para a esquerda e procurar abrigo.';
            choice1.onclick = () => makeChoice(2);
            choice2.onclick = () => makeChoice(3);
            break;
        case 2:
            story.innerHTML = `Você encontra uma clareira iluminada pela luz do sol. De repente, ouve um barulho! O que fará?`;
            choice1.innerHTML = 'Investigar o barulho.';
            choice2.innerHTML = 'Ficar em silêncio e se esconder.';
            choice1.onclick = () => makeChoice(4);
            choice2.onclick = () => makeChoice(5);
            break;
        case 3:
            story.innerHTML = `Você encontra uma caverna escura. Dentro dela, algo se move. O que fará?`;
            choice1.innerHTML = 'Entrar na caverna para explorar.';
            choice2.innerHTML = 'Ignorar a caverna e seguir em frente.';
            choice1.onclick = () => makeChoice(6);
            choice2.onclick = () => makeChoice(7);
            break;
        case 4:
            story.innerHTML = `Ao investigar o barulho, você encontra um animal ferido. O que fará?`;
            choice1.innerHTML = 'Cuidar do animal e tentar ajudá-lo.';
            choice2.innerHTML = 'Deixar o animal e seguir em frente.';
            choice1.onclick = () => makeChoice(8);
            choice2.onclick = () => makeChoice(9);
            break;
        case 5:
            story.innerHTML = `Você se esconde e vê um grupo de viajantes passar. O que fará a seguir?`;
            choice1.innerHTML = 'Seguir os viajantes em silêncio.';
            choice2.innerHTML = 'Esperar até que o grupo se afaste e seguir outro caminho.';
            choice1.onclick = () => makeChoice(10);
            choice2.onclick = () => makeChoice(11);
            break;
        case 6:
            story.innerHTML = `Dentro da caverna, você encontra uma bifurcação. O que fará?`;
            choice1.innerHTML = 'Seguir pelo túnel à esquerda.';
            choice2.innerHTML = 'Ir para o túnel à direita.';
            choice1.onclick = () => makeChoice(12);
            choice2.onclick = () => makeChoice(13);
            break;
        case 7:
            story.innerHTML = `Você decide seguir em frente e encontra uma ponte quebrada. O que fará?`;
            choice1.innerHTML = 'Tentar atravessar a ponte de qualquer maneira.';
            choice2.innerHTML = 'Voltar para a caverna e procurar outro caminho.';
            choice1.onclick = () => makeChoice(14);
            choice2.onclick = () => makeChoice(15);
            break;
        case 8:
            story.innerHTML = `Você cuida do animal ferido, mas ele parece desconfiado. O que fará a seguir?`;
            choice1.innerHTML = 'Tentar tranquilizar o animal com palavras suaves.';
            choice2.innerHTML = 'Levantar e seguir em frente sem esperar o animal.';
            choice1.onclick = () => makeChoice(16);
            choice2.onclick = () => makeChoice(17);
            break;
        case 9:
            story.innerHTML = `Você decide seguir em frente, mas encontra uma armadilha. Como reagirá?`;
            choice1.innerHTML = 'Ficar parado para tentar desarmá-la.';
            choice2.innerHTML = 'Correr rapidamente para evitar a armadilha.';
            choice1.onclick = () => makeChoice(18);
            choice2.onclick = () => makeChoice(19);
            break;
        case 10:
            story.innerHTML = `Você segue os viajantes em silêncio, mas algo parece errado. O que fará agora?`;
            choice1.innerHTML = 'Abordar os viajantes e perguntar sobre o que está acontecendo.';
            choice2.innerHTML = 'Ficar escondido e observar até que eles se afastem.';
            choice1.onclick = () => makeChoice(20);
            choice2.onclick = () => makeChoice(21);
            break;
        case 11:
            story.innerHTML = `Você decide esperar, mas acaba encontrando algo valioso no caminho. O que fará?`;
            choice1.innerHTML = 'Pegar o objeto valioso e continuar.';
            choice2.innerHTML = 'Ignorar o objeto e seguir pela trilha.';
            choice1.onclick = () => makeChoice(22);
            choice2.onclick = () => makeChoice(23);
            break;
        case 12:
            story.innerHTML = `Você escolhe o túnel à esquerda e logo encontra uma criatura mística. O que fará?`;
            choice1.innerHTML = 'Tentar conversar com a criatura.';
            choice2.innerHTML = 'Atacar a criatura para se defender.';
            choice1.onclick = () => makeChoice(24);
            choice2.onclick = () => makeChoice(25);
            break;
        case 13:
            story.innerHTML = `Você segue para o túnel à direita, mas começa a escorregar. O que fará?`;
            choice1.innerHTML = 'Tentar se equilibrar para não cair.';
            choice2.innerHTML = 'Usar uma corda para ajudar na travessia.';
            choice1.onclick = () => makeChoice(26);
            choice2.onclick = () => makeChoice(27);
            break;
       case 14:
        story.innerHTML = `Você decide tentar atravessar a ponte quebrada, mas ela começa a ceder. O que fará?`;
        choice1.innerHTML = 'Pular rapidamente para o outro lado.';
        choice2.innerHTML = 'Tentar atravessar com cautela, passo a passo.';
        choice1.onclick = () => makeChoice(28);
        choice2.onclick = () => makeChoice(29);
        break;
    case 15:
        story.innerHTML = `Você volta para a caverna e encontra um outro caminho. O que fará?`;
        choice1.innerHTML = 'Seguir pelo novo caminho que parece mais seguro.';
        choice2.innerHTML = 'Decidir descansar na caverna por um tempo.';
        choice1.onclick = () => makeChoice(30);
        choice2.onclick = () => makeChoice(31);
        break;
    case 16:
        story.innerHTML = `Você tenta tranquilizar o animal, que relaxa aos poucos. O que fará agora?`;
        choice1.innerHTML = 'Ajudar o animal a andar e procurar um abrigo.';
        choice2.innerHTML = 'Liberar o animal e seguir sua jornada.';
        choice1.onclick = () => makeChoice(32);
        choice2.onclick = () => makeChoice(33);
        break;
    case 17:
        story.innerHTML = `Você decide seguir em frente. O que encontra à frente?`;
        choice1.innerHTML = 'Uma grande árvore com frutos dourados.';
        choice2.innerHTML = 'Uma trilha coberta por plantas espinhosas.';
        choice1.onclick = () => makeChoice(34);
        choice2.onclick = () => makeChoice(35);
        break;
    case 18:
        story.innerHTML = `Você tenta desarmar a armadilha, mas ela dispara! O que fará?`;
        choice1.innerHTML = 'Correr para evitar os danos.';
        choice2.innerHTML = 'Pular e tentar escapar da armadilha.';
        choice1.onclick = () => makeChoice(36);
        choice2.onclick = () => makeChoice(37);
        break;
    case 19:
        story.innerHTML = `Você corre para evitar a armadilha, mas acaba caindo em um buraco. O que fará?`;
        choice1.innerHTML = 'Tentar sair do buraco sozinho.';
        choice2.innerHTML = 'Gritar por ajuda e esperar por socorro.';
        choice1.onclick = () => makeChoice(38);
        choice2.onclick = () => makeChoice(39);
        break;
    case 20:
        story.innerHTML = `Você decide conversar com os viajantes. Eles são amigáveis e te oferecem uma escolha. O que fará?`;
        choice1.innerHTML = 'Aceitar a oferta de viagem com eles.';
        choice2.innerHTML = 'Recusar educadamente e seguir seu próprio caminho.';
        choice1.onclick = () => makeChoice(40);
        choice2.onclick = () => makeChoice(41);
        break;
    case 21:
        story.innerHTML = `Você decide se esconder mais tempo e observa uma tempestade se formar. O que fará?`;
        choice1.innerHTML = 'Ficar na sua posição e esperar a tempestade passar.';
        choice2.innerHTML = 'Buscar um abrigo mais seguro antes que a tempestade chegue.';
        choice1.onclick = () => makeChoice(42);
        choice2.onclick = () => makeChoice(43);
        break;
    case 22:
        story.innerHTML = `Você pega o objeto valioso, mas logo depois é emboscado. O que fará?`;
        choice1.innerHTML = 'Usar o objeto valioso para se defender.';
        choice2.innerHTML = 'Tentar fugir e deixar o objeto para trás.';
        choice1.onclick = () => makeChoice(44);
        choice2.onclick = () => makeChoice(45);
        break;
    case 23:
        story.innerHTML = `Você ignora o objeto e continua pela trilha, mas algo estranho acontece. O que fará?`;
        choice1.innerHTML = 'Investigar o que aconteceu.';
        choice2.innerHTML = 'Ignorar a estranheza e seguir em frente.';
        choice1.onclick = () => makeChoice(46);
        choice2.onclick = () => makeChoice(47);
        break;
    case 24:
        story.innerHTML = `Você tenta conversar com a criatura mística, mas ela não parece muito amigável. O que fará?`;
        choice1.innerHTML = 'Tentar se afastar lentamente sem provocar a criatura.';
        choice2.innerHTML = 'Preparar-se para enfrentar a criatura e defender-se.';
        choice1.onclick = () => makeChoice(48);
        choice2.onclick = () => makeChoice(49);
        break;
    case 25:
        story.innerHTML = `Você decide atacar a criatura, mas ela se defende ferozmente. O que fará?`;
        choice1.innerHTML = 'Lutar até o fim e derrotar a criatura.';
        choice2.innerHTML = 'Fugir rapidamente antes que a criatura possa te alcançar.';
        choice1.onclick = () => makeChoice(50);
        choice2.onclick = () => makeChoice(51);
        break;
    case 26:
        story.innerHTML = `Você tenta se equilibrar para não cair, mas perde o equilíbrio. O que fará?`;
        choice1.innerHTML = 'Tentar agarrar uma rocha para se estabilizar.';
        choice2.innerHTML = 'Pular para o lado para evitar cair no abismo.';
        choice1.onclick = () => makeChoice(52);
        choice2.onclick = () => makeChoice(53);
        break;
    case 27:
        story.innerHTML = `Você usa a corda, mas ela começa a se rasgar. O que fará?`;
        choice1.innerHTML = 'Tentar atravessar rapidamente antes que a corda quebre.';
        choice2.innerHTML = 'Cortar a corda e procurar outro caminho.';
        choice1.onclick = () => makeChoice(54);
        choice2.onclick = () => makeChoice(55);
        break;
    case 28:
        story.innerHTML = `Você pula para o outro lado da ponte e consegue escapar da queda. O que fará agora?`;
        choice1.innerHTML = 'Explorar o novo território à sua frente.';
        choice2.innerHTML = 'Voltar e procurar uma alternativa mais segura.';
        choice1.onclick = () => makeChoice(56);
        choice2.onclick = () => makeChoice(57);
        break;
    case 29:
        story.innerHTML = `Você atravessa a ponte com cautela, mas ela começa a balançar. O que fará?`;
        choice1.innerHTML = 'Correr para o outro lado antes que a ponte caia.';
        choice2.innerHTML = 'Parar e esperar que a ponte se estabilize.';
        choice1.onclick = () => makeChoice(58);
        choice2.onclick = () => makeChoice(59);
        break;
        case 29:
            story.innerHTML = `Você atravessa a ponte com cautela, mas ela começa a balançar. O que fará?`;
            choice1.innerHTML = 'Correr para o outro lado antes que a ponte caia.';
            choice2.innerHTML = 'Parar e esperar que a ponte se estabilize.';
            choice1.onclick = () => makeChoice(58);
            choice2.onclick = () => makeChoice(59);
            break;
        case 30:
            story.innerHTML = `Você segue pelo novo caminho, mas percebe algo estranho no ar. O que fará?`;
            choice1.innerHTML = 'Investigar o que está causando o cheiro estranho.';
            choice2.innerHTML = 'Ignorar o cheiro e seguir em frente.';
            choice1.onclick = () => makeChoice(60);
            choice2.onclick = () => makeChoice(61);
            break;
        case 31:
            story.innerHTML = `Você decide descansar na caverna, mas ouve um barulho vindo da entrada. O que fará?`;
            choice1.innerHTML = 'Levantar-se rapidamente e investigar o barulho.';
            choice2.innerHTML = 'Ficar quieto e esperar o barulho passar.';
            choice1.onclick = () => makeChoice(62);
            choice2.onclick = () => makeChoice(63);
            break;
        case 32:
            story.innerHTML = `Você decide ajudar o animal e procurar um abrigo. O que fará em seguida?`;
            choice1.innerHTML = 'Tentar construir um abrigo improvisado.';
            choice2.innerHTML = 'Procurar uma caverna ou outro lugar seguro para se abrigar.';
            choice1.onclick = () => makeChoice(64);
            choice2.onclick = () => makeChoice(65);
            break;
        case 33:
            story.innerHTML = `Você decide liberar o animal e continuar sua jornada. O que fará?`;
            choice1.innerHTML = 'Seguir pela trilha mais à frente.';
            choice2.innerHTML = 'Buscar abrigo para descansar e avaliar o que fazer a seguir.';
            choice1.onclick = () => makeChoice(66);
            choice2.onclick = () => makeChoice(67);
            break;
        case 34:
            story.innerHTML = `Você chega até a árvore com os frutos dourados. O que fará?`;
            choice1.innerHTML = 'Pegar os frutos para comer.';
            choice2.innerHTML = 'Deixar os frutos onde estão e continuar a jornada.';
            choice1.onclick = () => makeChoice(68);
            choice2.onclick = () => makeChoice(69);
            break;
        case 35:
            story.innerHTML = `Você decide seguir pela trilha coberta de espinhos. O que fará?`;
            choice1.innerHTML = 'Usar sua faca para cortar os espinhos.';
            choice2.innerHTML = 'Tentar contornar os espinhos por um caminho alternativo.';
            choice1.onclick = () => makeChoice(70);
            choice2.onclick = () => makeChoice(71);
            break;
        case 36:
            story.innerHTML = `Você tenta se equilibrar para não cair, mas a armadilha dispara. O que fará?`;
            choice1.innerHTML = 'Correr para escapar do impacto.';
            choice2.innerHTML = 'Procurar uma maneira de desarmar a armadilha.';
            choice1.onclick = () => makeChoice(72);
            choice2.onclick = () => makeChoice(73);
            break;
        case 37:
            story.innerHTML = `Você pula para tentar escapar da armadilha, mas acaba caindo em uma caverna. O que fará?`;
            choice1.innerHTML = 'Tentar escalar a parede da caverna.';
            choice2.innerHTML = 'Procurar por um caminho de saída dentro da caverna.';
            choice1.onclick = () => makeChoice(74);
            choice2.onclick = () => makeChoice(75);
            break;
        case 38:
            story.innerHTML = `Você tenta sair do buraco, mas não consegue. O que fará?`;
            choice1.innerHTML = 'Usar um galho para tentar escalar.';
            choice2.innerHTML = 'Gritar por ajuda.';
            choice1.onclick = () => makeChoice(76);
            choice2.onclick = () => makeChoice(77);
            break;
        case 39:
            story.innerHTML = `Você decide esperar por socorro, mas o tempo passa. O que fará?`;
            choice1.innerHTML = 'Tentar escalar pelas paredes do buraco.';
            choice2.innerHTML = 'Continuar esperando, mais calmo agora.';
            choice1.onclick = () => makeChoice(78);
            choice2.onclick = () => makeChoice(79);
            break;
        case 40:
            story.innerHTML = `Você decide aceitar a oferta dos viajantes. O que fará agora?`;
            choice1.innerHTML = 'Viajar com eles para a próxima cidade.';
            choice2.innerHTML = 'Procurar um caminho alternativo sozinho.';
            choice1.onclick = () => makeChoice(80);
            choice2.onclick = () => makeChoice(81);
            break;
        case 41:
            story.innerHTML = `Você recusa a oferta dos viajantes e segue sozinho. O que encontrará no caminho?`;
            choice1.innerHTML = 'Uma estrada longa e monótona, sem muitas surpresas.';
            choice2.innerHTML = 'Uma floresta densa e escura, cheia de mistérios.';
            choice1.onclick = () => makeChoice(82);
            choice2.onclick = () => makeChoice(83);
            break;
        case 42:
            story.innerHTML = `Você decide ficar na sua posição, esperando a tempestade passar. O que fará agora?`;
            choice1.innerHTML = 'Usar uma capa para se proteger do vento e da chuva.';
            choice2.innerHTML = 'Tentar encontrar abrigo em algum lugar da região.';
            choice1.onclick = () => makeChoice(84);
            choice2.onclick = () => makeChoice(85);
            break;
        case 43:
            story.innerHTML = `Você decide procurar um abrigo antes da tempestade chegar. O que fará agora?`;
            choice1.innerHTML = 'Entrar em uma caverna perto dali.';
            choice2.innerHTML = 'Subir em uma árvore alta para se proteger da tempestade.';
            choice1.onclick = () => makeChoice(86);
            choice2.onclick = () => makeChoice(87);
            break;
        case 44:
            story.innerHTML = `Você usa o objeto para se defender, mas ele quebra. O que fará agora?`;
            choice1.innerHTML = 'Usar o que restou para tentar se defender.';
            choice2.innerHTML = 'Fugir para se salvar, deixando o objeto para trás.';
            choice1.onclick = () => makeChoice(88);
            choice2.onclick = () => makeChoice(89);
            break;
        case 45:
            story.innerHTML = `Você decide fugir rapidamente, mas algo mais inesperado acontece. O que fará agora?`;
            choice1.innerHTML = 'Fugir ainda mais rápido para escapar do perigo.';
            choice2.innerHTML = 'Parar e tentar enfrentar o novo obstáculo que surge.';
            choice1.onclick = () => makeChoice(90);
            choice2.onclick = () => makeChoice(91);
            break;
        case 46:
            story.innerHTML = `Você decide investigar o que está acontecendo, mas acaba encontrando algo perigoso. O que fará?`;
            choice1.innerHTML = 'Fugir rapidamente e voltar pelo caminho seguro.';
            choice2.innerHTML = 'Enfrentar o que está à sua frente, seja o que for.';
            choice1.onclick = () => makeChoice(92);
            choice2.onclick = () => makeChoice(93);
            break;
        case 47:
            story.innerHTML = `Você decide ignorar a estranheza e seguir em frente. O que acontece depois?`;
            choice1.innerHTML = 'O caminho se abre e você encontra algo útil.';
            choice2.innerHTML = 'Você se perde e acaba caindo em um novo perigo.';
            choice1.onclick = () => makeChoice(94);
            choice2.onclick = () => makeChoice(95);
            break;
        case 48:
            story.innerHTML = `Você tenta se afastar da criatura mística, mas ela te segue. O que fará?`;
            choice1.innerHTML = 'Desafiar a criatura para um combate.';
            choice2.innerHTML = 'Tentar se esconder e esperar que ela passe.';
            choice1.onclick = () => makeChoice(96);
            choice2.onclick = () => makeChoice(97);
            break;
        case 49:
            story.innerHTML = `Você decide enfrentar a criatura, mas ela se revela mais forte do que esperava. O que fará?`;
            choice1.innerHTML = 'Usar uma estratégia e tentar derrubar a criatura.';
            choice2.innerHTML = 'Fugir e tentar escapar pela floresta.';
            choice1.onclick = () => makeChoice(98);
            choice2.onclick = () => makeChoice(99);
            break;
        case 50:
            story.innerHTML = `Você derrota a criatura ou escapa com sucesso! Parabéns, você sobreviveu à jornada!`;
            choice1.innerHTML = 'Recomeçar a aventura!';
            choice2.innerHTML = 'Sair e descansar depois dessa experiência.';
            choice1.onclick = () => makeChoice(1); // Recomeçar
            choice2.onclick = () => makeChoice(0); // Fim
            break;
            default:
                story.innerHTML = "Erro: Etapa não definida.";
                choice1.style.display = "none";
                choice2.style.display = "none";
        }
        dayCounter++;
        document.getElementById("show-paths").style.display = "block"; // Mostrar os caminhos após a primeira escolha
    }
    
    function makeChoice(step) {
        currentStep = step;
        showStory(step);
        paths.push(`Dia ${dayCounter}: Escolha ${currentStep}`);
        updatePaths();
    }
    
    function togglePaths() {
        pathsContainer.style.display = (pathsContainer.style.display === "block") ? "none" : "block";
    }
    
    function updatePaths() {
        let pathText = "";
        paths.forEach(path => {
            pathText += path + "<br>";
        });
        pathsContainer.innerHTML = pathText;
    }

