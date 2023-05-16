public class Fase {
    private List<Processo> processos;

    public Fase() {
        processos = new ArrayList<>();
        // Adicione os processos específicos da fase à lista. posteriormente posso fazer uma função que funcione como um "gerador de processos" se isso for melhor pro desenvolvimento.
        processos.add(new Processo("Processo 1"));
        processos.add(new Processo("Processo 2"));
        // ...
    }

    // Método para obter a lista de processos da fase
    public List<Processo> getProcessos() {
        return processos;
    }
}
