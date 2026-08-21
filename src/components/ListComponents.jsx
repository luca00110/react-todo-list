import ItemComponent from "./ItemComponents"

function ListComponent(
    {tarefas, removerTarefa, concluirTarefa}
) {
    return (
        <ul className="lista">
            {tarefas.map((tarefa, indice) => (
                <ItemComponent
                    key={indice}
                    tarefa={tarefa}
                    concluirTarefa={concluirTarefa}
                    removerTarefa={removerTarefa}
                    indice={indice}
                />
            ))}
        </ul>)
}

export default ListComponent
