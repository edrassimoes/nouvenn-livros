import {createContext, useState} from "react";

export const ContaContext = createContext();

const ContaProvider = ({children}) => {

	// LogIn, Home
	const [nomeEntrar, setNomeEntrar] = useState("");
	const [senhaEntrar, setSenhaEntrar] = useState("");

	return (
		<ContaContext.Provider value={{
			nomeEntrar, setNomeEntrar,
			senhaEntrar, setSenhaEntrar,
		}}>
			{children}
		</ContaContext.Provider>
	);
};

export default ContaProvider;