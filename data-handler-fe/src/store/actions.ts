// actions.ts
import { Dispatch } from 'redux';
import { RootState } from './store'; // Importe o tipo RootState se necessário

// Defina os tipos de ação
type Action =
  | { type: 'FETCH_DATA_REQUEST' }
  | { type: 'FETCH_DATA_SUCCESS'; payload: Data[] }
  | { type: 'FETCH_DATA_FAILURE'; payload: string };

// Defina o tipo para os dados
interface Data {
    nrInst: string;
    nrAgencia: string;
    cdClient: string;
    nmClient: string;
    nrCpfCnpj: string;
    nrContrato: string;
    dtContrato: string;
    qtPrestacoes: string;
    vlTotal: string;
    cdProduto: string;
    dsProduto: string;
    cdCarteira: string;
    dsCarteira: string;
    nrProposta: string;
    nrPresta: string;
    tpPresta: string;
    nrSeqPre: string;
    dtVctPre: string;
    vlPresta: string;
    vlMora: string;
    vlMulta: string;
    vlOutAcr: string;
    vlIof: string;
    vlDescon: string;
    vlAtual: string;
    idSituac: string;
    idSitVen: string;
}

// Defina a função fetchData
export const fetchData = () => {
  return async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    try {
      dispatch({ type: 'FETCH_DATA_REQUEST' });

      // Aqui você faria sua requisição para obter os dados do backend
      const data = await fetch('/api/data').then(response => response.json());

      // Despache a ação com os dados recebidos
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error: any) {
      // Em caso de erro, despache uma ação de erro
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    }
  };
};
