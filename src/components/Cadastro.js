const Cadastro = ({cadastro}) => {
    return (
        <>
            <td><b>{cadastro.nome}</b></td>
            <td>{cadastro.data_nascimento}</td>
            <td>{cadastro.data_cadastro}</td>
            <td>{cadastro.alfabetizado}</td>
            <td>{cadastro.escolaridade}</td>
            <td>{cadastro.nome_responsavel}</td>
            <td>{cadastro.telefone}</td>
            <td>
                <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
            </td>
        </>
    )
}

export default Cadastro;