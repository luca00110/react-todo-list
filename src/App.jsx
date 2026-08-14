import { useState } from "react";
import "./App.css";

function App() {
  const [texto, setTexto] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    if (texto.trim() !== "") {
      const tarefaJaExiste = tarefas.find(
        (tarefa) => tarefa.texto.toLowerCase() === texto.trim().toLowerCase()
      );

      if (tarefaJaExiste) {
        alert("Essa tarefa já foi adicionada!");
        return;
      }

      const novaTarefa = {
        texto: texto.trim(),
        concluida: false,
      };

      setTarefas([...tarefas, novaTarefa]);
      setTexto("");
    }
  }

  function limparTarefas() {
    setTarefas([]);
  }

  function removerTarefa(indiceRemover) {
    const listaAtualizada = tarefas.filter(
      (_, indice) => indice !== indiceRemover
    );

    setTarefas(listaAtualizada);
  }

  function concluirTarefa(indiceSelecionado) {
    const listaAtualizada = tarefas.map((tarefa, indice) => {
      if (indice === indiceSelecionado) {
        return {
          ...tarefa,
          concluida: !tarefa.concluida,
        };
      }
      return tarefa;
    });

    setTarefas(listaAtualizada);
  }

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>

      <div className="formulario">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite uma tarefa"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              adicionarTarefa();
            }
          }}
        />

        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <p className="digitado">Você digitou: {texto}</p>

      {tarefas.length === 0 && (
        <p className="vazio">Nenhuma tarefa cadastrada</p>
      )}

      <ul className="lista">
        {tarefas.map((tarefa, indice) => (
          <li className="item" key={indice}>
            <span className={tarefa.concluida ? "concluida" : ""}>
              {tarefa.texto}
            </span>

            <div className="acoes">
              <button onClick={() => concluirTarefa(indice)}>
                {tarefa.concluida ? "Desfazer" : "Concluir"}
              </button>
              <button onClick={() => removerTarefa(indice)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>

      <p className="digitando">Total de tarefas: {tarefas.length}</p>

      {tarefas.length > 0 && (
        <button onClick={limparTarefas}>Limpar Tarefas</button>
      )}
    </div>
  );
}

export default App;