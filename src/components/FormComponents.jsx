function FormComponent({
  texto,
  adicionarTarefa,
  setTexto
}) {
  return (
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
    </div>
  );
}

export default FormComponent;