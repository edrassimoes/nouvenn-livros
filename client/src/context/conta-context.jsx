import {createContext, useState} from "react";

export const ContaContext = createContext();

const ContaProvider = ({children}) => {

	const [usuarios, setUsuarios] = useState([])

	const [data, setData] = useState('')

	return (
		<ContaContext.Provider value={{
			usuarios, setUsuarios,
			data, setData,
		}}>
			{children}
		</ContaContext.Provider>
	);
};

export default ContaProvider;