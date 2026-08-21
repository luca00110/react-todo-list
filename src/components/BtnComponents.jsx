function BtnComponent({
  adicionarTarefa,
  limparTarefas,
  tarefas
}) {
  return (
    <div className="botoes">
      <button onClick={adicionarTarefa}>
        Adicionar
      </button>

      {tarefas.length > 0 && (
        <button onClick={limparTarefas}>
          Remover Lista
        </button>
      )}
    </div>
  );
}

export default BtnComponent;