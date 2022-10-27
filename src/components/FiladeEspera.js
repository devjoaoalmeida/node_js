import { Modal, Button} from 'react-bootstrap';
import { useContext , useState} from "react";
import { CadastroContext} from "../contexts/CadastroContext.js";
import Cadastro from "./Cadastro";
import AddForm from "./AddForm";

const FiladeEspera = () => {

    const {cadastros} = useContext(CadastroContext);

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
        <div className="table-title">
			<div className="row">
				<div className="col-sm-6">
					<h2>Gerenciamento da <b>Fila de Espera</b></h2>
				</div>
				<div className="col-sm-6">
					<Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i><span>Cadastrar</span></Button>					
				</div>
			</div>
		</div>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Data de Nascimento</th>
                    <th>Data de Cadastro</th>
                    <th>Alfabetizado</th>
                    <th>Escolaridade</th>
                    <th>Nome do responsável</th>
                    <th>Telefone</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    cadastros.map(cadastro => (
                        <tr key={cadastro.id}>
                            <Cadastro cadastro={cadastro} />
                        </tr>
                    ))
                }
            </tbody>
        </table>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Cadastramento
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddForm />
            </Modal.Body>
            <Modal.Footer>
                
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default FiladeEspera;