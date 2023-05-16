import java.util.LinkedList;


public class Queue {
    private LinkedList<Processo> queue;

    public Queue(){
        queue = new LinkedList<>();
    }

    public void AddProcess(Processo processo){
        queue.add(processo);
    }

    public Processo removerProcessos(){
        return fila.removeFirst();
    }

    public boolean Empty(){
        return queue.isEmpty();
    }
}
