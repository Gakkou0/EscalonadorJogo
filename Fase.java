public class Fase {
    private Queue queue;
    private int pontuacao;
    private boolean terminada;

    public void iniciar() {
        pontuacao = 0;
        terminada = false;
        
    }

    //falta numerar novas fases, definir um numero X de processos que cada fase tem e implementar a passagem entre elas.

    public void MoveProcess() {
        if (!queue.isEmpty()) {
            Processo processoAtual = fila.removerProcesso();
            // Realize as ações correspondentes ao processo atual
            // Atualize a pontuação
            pontuacao += processoAtual.getPontuacao();
        } else {
            terminada = true;
        }
    }


    public Fila getFila() {
        return fila;
    }

    public void setFila(Fila fila) {
        this.fila = fila;
    }

    public int getPontuacao() {
        return pontuacao;
    }

    public boolean isTerminada() {
        return terminada;
    }
}
