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
  
  interface Action {
    type: string;
    payload?: any;
  }
  
  const initialState = {
    data: [] as Data[],
    error: '',
  };
  
  const rootReducer = (state = initialState, action: Action) => {
    switch (action.type) {
      case 'FETCH_DATA_SUCCESS':
        return { ...state, data: action.payload };
      case 'FETCH_DATA_ERROR':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  