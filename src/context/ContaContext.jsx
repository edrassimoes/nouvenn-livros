import {createContext, useContext, useState} from "react";

export const ContaContext = createContext();

const ContaProvider = ({children}) => {

	// SignUp
	const [nomeCriar, setNomeCriar] = useState("");
	const [senhaCriar, setSenhaCriar] = useState("");
	const [emailCriar, setEmailCriar] = useState('');

	// LogIn, Home
	const [nomeEntrar, setNomeEntrar] = useState("");
	const [senhaEntrar, setSenhaEntrar] = useState("");


	return (
		<ContaContext.Provider value={{
			nomeCriar, setNomeCriar,
			senhaCriar, setSenhaCriar,
			emailCriar, setEmailCriar,
			nomeEntrar, setNomeEntrar,
			senhaEntrar, setSenhaEntrar,
		}}>
			{children}
		</ContaContext.Provider>
	);
};

export default ContaProvider;