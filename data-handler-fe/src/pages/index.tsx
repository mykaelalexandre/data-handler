import React, { useEffect, useState } from 'react';
import DataRender from '../components/DataRender';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

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
  

const HomePage: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get<Data[]>('http://localhost:3001/csv/dados', {
          params: { page, pageSize },
        });
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
        setData(response.data);
      } catch (error: any) {
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
      }
    };

    fetchDataFromAPI();
  }, [dispatch, page, pageSize]); 

  return (
    <div>
      <h1>Bem-vindo à minha aplicação</h1>
      <div>
        <label>Page:</label>
        <input
          type="number"
          value={page}
          onChange={(e) => setPage(parseInt(e.target.value))}
        />
        <label>Page Size:</label>
        <input
          type="number"
          value={pageSize}
          onChange={(e) => setPageSize(parseInt(e.target.value))}
        />
      </div>
      <DataRender data={data} page={page} pageSize={pageSize} />
    </div>
  );
};

export default HomePage;
