public public class Main {
    public static void main(String[] args) {

        // Criar uma instância da Fila
        Queue queue = new Queue();
        
        // Criar e adicionar processos à fila
        Processo processo1 = new Processo("Processo 1");
        Processo processo2 = new Processo("Processo 2");
        queue.AddProcess(processo1);
        queue.addProcess(processo2);

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

