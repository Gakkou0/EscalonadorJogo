public public class Main {
    public static void main(String[] args) {

        // Criar uma instância da Fila
        Queue queue = new Queue();
        
        //inserir aqui a função de gerar novos processos.

        // Criar uma instância da Fase
        Fase fase = new Fase();
        fase.setFila(fila);

        // Iniciar o jogo
        fase.iniciar();

        // Executar o jogo até a condição de término
        while (!fase.isTerminada()) {
            // Realizar o próximo passo do jogo
            fase.MoveProcess();
        }

        // Exibir a pontuação final
        System.out.println("Pontuação final: " + fase.getPontuacao());
    }
}

