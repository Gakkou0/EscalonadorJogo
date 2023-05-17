import java.util.ArrayList;
import java.util.List;
import java.util.Random;


public class Processo{


    //definição de tiers de pontuação e tempo de execução para os processos.
    public enum Tier {
        S(100,40),
        A(70, 30),
        B(50,20),
        C(30,10),
        D(10,5);

        private int points;
        private int execucao;

        Tier(int points, int execucao){
            this.points = points;
            this.execucao = execucao;
        }
    }

    private String name;


    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPontuation() {
        return this.pontuation;
    }

    public void setPontuation(int pontuation) {
        this.pontuation = pontuation;
    }

    public int getTime() {
        return this.time;
    }

    public void setTime(int time) {
        this.time = time;
    }
    
    private static final List<String> novosProcessos = new ArrayList<>();


    //bloco estático com 4 nomes genéricos simples pro game gerar processos novos a cada fase, cada um contendo seu respectivo tier
    static{
        novosProcessos.add("Módulo de Entrada e Saída");
        novosProcessos.add("Usuário agurdando interação");
        novosProcessos.add("Processo requisitando Memória RAM");
        novosProcessos.add("Novo processo pedindo prioridade");
    }

    //função que gera um processo aleatório.

    public static Processo geradordeProcesso() {
        Random random = new Random();

        // Selecionar um nome genérico aleatório
        String name = novosProcessos.get(random.nextInt(novosProcessos.size()));

        // Selecionar um tier aleatório
        Tier tier = Tier.values()[random.nextInt(Tier.values().length)];

        // Definir a pontuação e o tempo de execução com base no tier selecionado
        int pontuacao = tier.getPoints();
        int tempoExecucao = tier.getExecucao();

        // Criar uma instância do processo com os valores gerados
        Processo processo = new Processo();
        processo.setName(nome);
        processo.setPontuation(pontuacao);
        processo.setTime(tempoExecucao);

        return processo;
    }
}

