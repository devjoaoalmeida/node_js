import {Form, Button} from 'react-bootstrap'

const AddForm = () => {
    return (

        <Form>
            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="Nome *"
                    requires
                    rows={3}
                />
            </Form.Group>
            <Form.Group>
                <Form.Select aria-label="Alfabetizado(a)">
                    <option>Alfabetizado(a)</option>
                    <option value="1">Sim</option>
                    <option value="2">Não</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="Escolaridade *"
                    requires
                />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="Data de Nascimento *"
                    requires
                />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="Nome do Responsável *"
                    requires
                />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="Telefone*"
                    requires
                />
            </Form.Group>

            <Button variant="success" type="submit" block>
                Cadastrar
            </Button>
        </Form>

    )
}

export default AddForm;