import {createContext, useState} from "react";

export const ContaContext = createContext();

const ContaProvider = ({children}) => {

	const [usuarios, setUsuarios] = useState([])
	const [sessaoAtual, setSessaoAtual] = useState({
		username: "",
		email: "",
		password: ""
	})

	return (
		<ContaContext.Provider value={{
			usuarios, setUsuarios,
			sessaoAtual, setSessaoAtual
		}}>
			{children}
		</ContaContext.Provider>
	);
};

export default ContaProvider;