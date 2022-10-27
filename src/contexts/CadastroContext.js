import {createContext, useState} from 'react';

export const CadastroContext = createContext()

const CadastroContextProvider = (props) => {
    
    const [cadastros] = useState([
        {id:1, nome:'João Pedro de Almeida', data_nascimento:'25/04/2000', data_cadastro:'25/10/2022', alfabetizado:'sim', escolaridade:'Pós-Graduação incompleta', nome_responsavel:'Sonia Regina', telefone:'(015)99652-2301'},
        {id:2, nome:'João Pedro de Almeida', data_nascimento:'25/04/2000', data_cadastro:'25/10/2022', alfabetizado:'sim', escolaridade:'Pós-Graduação incompleta', nome_responsavel:'Sonia Regina', telefone:'(015)99652-2301'},
        {id:3, nome:'João Pedro de Almeida', data_nascimento:'25/04/2000', data_cadastro:'25/10/2022', alfabetizado:'sim', escolaridade:'Pós-Graduação incompleta', nome_responsavel:'Sonia Regina', telefone:'(015)99652-2301'},
        {id:4, nome:'João Pedro de Almeida', data_nascimento:'25/04/2000', data_cadastro:'25/10/2022', alfabetizado:'sim', escolaridade:'Pós-Graduação incompleta', nome_responsavel:'Sonia Regina', telefone:'(015)99652-2301'},
        {id:5, nome:'João Pedro de Almeida', data_nascimento:'25/04/2000', data_cadastro:'25/10/2022', alfabetizado:'sim', escolaridade:'Pós-Graduação incompleta', nome_responsavel:'Sonia Regina', telefone:'(015)99652-2301'}
])

    return (
        <CadastroContext.Provider value={{cadastros}}>
            {props.children}
        </CadastroContext.Provider>
    )
}

export default CadastroContextProvider;

