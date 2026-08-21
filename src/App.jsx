import { useState, useEffect } from "react";

import "./App.css";
import FormComponent from "./components/FormComponents";
import ListComponent from "./components/ListComponents";
import BtnComponent from "./components/BtnComponents";
import HeaderComponent from "./components/HeaderComponents";
import FooterComponent from "./components/FooterComponents";

function App() {
  const [texto, setTexto] = useState("");
  const [tarefas, setTarefas] = useState(
    () => {
      const tarefasSalvas = localStorage.getItem(
        "tarefas"
      );

      // o interrogacao e como se fosse o if
      // é o operacao ternario
      return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem(
      "tarefas",
      JSON.stringify(tarefas)
    );
  }, [tarefas]);

  function adicionarTarefa() {
    if (texto.trim() !== "") {
      const tarefaJaExiste = tarefas.find(
        (tarefa) =>
          tarefa.texto.toLowerCase() ===
          texto.trim().toLowerCase()
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
      <HeaderComponent />
      <p className="digitado">
        Você digitou: {texto}
      </p>

      {tarefas.length === 0 && (
        <p className="vazio">
          Nenhuma tarefa cadastrada
        </p>
      )}

      <FormComponent
        texto={texto}
        setTexto={setTexto}
        adicionarTarefa={adicionarTarefa}
      />

      <BtnComponent
        adicionarTarefa={adicionarTarefa}
        limparTarefas={limparTarefas}
        tarefas={tarefas}
      />

      <ListComponent
        tarefas={tarefas}
        concluirTarefa={concluirTarefa}
        removerTarefa={removerTarefa}
      />

      <p className="digitando">
        Total de tarefas: {tarefas.length}
      </p>

      <FooterComponent />

    </div>
  );
}

export default App;