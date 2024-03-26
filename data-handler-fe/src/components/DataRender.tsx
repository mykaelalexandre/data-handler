import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

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

interface DataRenderProps {
  data: Data[];
  page: number;
  pageSize: number;
}

const DataRender: React.FC<DataRenderProps> = ({ data, page, pageSize }) => {
  // Calculando o índice inicial e final dos dados a serem renderizados com base na paginação
  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);

  // Obtendo os dados a serem renderizados de acordo com a página e o tamanho da página
  const dataToRender = data.slice(startIndex, endIndex);

  return (
    <TableContainer component={Paper}>
      <Table>
      <TableHead>
  <TableRow>
    <TableCell>Inst</TableCell>
    <TableCell>Agência</TableCell>
    <TableCell>Cliente</TableCell>
    <TableCell>Nome do Cliente</TableCell>
    <TableCell>CPF/CNPJ</TableCell>
    <TableCell>Contrato</TableCell>
    <TableCell>Data do Contrato</TableCell>
    <TableCell>Qtde Prestações</TableCell>
    <TableCell>Valor Total</TableCell>
    <TableCell>Código do Produto</TableCell>
    <TableCell>Descrição do Produto</TableCell>
    <TableCell>Código da Carteira</TableCell>
    <TableCell>Descrição da Carteira</TableCell>
    <TableCell>Número da Proposta</TableCell>
    <TableCell>Número da Prestação</TableCell>
    <TableCell>Tipo da Prestação</TableCell>
    <TableCell>Número Sequencial da Prestação</TableCell>
    <TableCell>Data de Vencimento da Prestação</TableCell>
    <TableCell>Valor da Prestação</TableCell>
    <TableCell>Valor de Mora</TableCell>
    <TableCell>Valor da Multa</TableCell>
    <TableCell>Valor de Outros Acréscimos</TableCell>
    <TableCell>Valor do IOF</TableCell>
    <TableCell>Valor de Desconto</TableCell>
    <TableCell>Valor Atual</TableCell>
    <TableCell>ID Situação</TableCell>
    <TableCell>ID Situação Venda</TableCell>
  </TableRow>
</TableHead>

        <TableBody>
  {dataToRender.map((item: Data, index: number) => (
    <TableRow key={index}>
      <TableCell>{item.nrInst}</TableCell>
      <TableCell>{item.nrAgencia}</TableCell>
      <TableCell>{item.cdClient}</TableCell>
      <TableCell>{item.nmClient}</TableCell>
      <TableCell>{item.nrCpfCnpj}</TableCell>
      <TableCell>{item.nrContrato}</TableCell>
      <TableCell>{item.dtContrato}</TableCell>
      <TableCell>{item.qtPrestacoes}</TableCell>
      <TableCell>{item.vlTotal}</TableCell>
      <TableCell>{item.cdProduto}</TableCell>
      <TableCell>{item.dsProduto}</TableCell>
      <TableCell>{item.cdCarteira}</TableCell>
      <TableCell>{item.dsCarteira}</TableCell>
      <TableCell>{item.nrProposta}</TableCell>
      <TableCell>{item.nrPresta}</TableCell>
      <TableCell>{item.tpPresta}</TableCell>
      <TableCell>{item.nrSeqPre}</TableCell>
      <TableCell>{item.dtVctPre}</TableCell>
      <TableCell>{item.vlPresta}</TableCell>
      <TableCell>{item.vlMora}</TableCell>
      <TableCell>{item.vlMulta}</TableCell>
      <TableCell>{item.vlOutAcr}</TableCell>
      <TableCell>{item.vlIof}</TableCell>
      <TableCell>{item.vlDescon}</TableCell>
      <TableCell>{item.vlAtual}</TableCell>
      <TableCell>{item.idSituac}</TableCell>
      <TableCell>{item.idSitVen}</TableCell>
    </TableRow>
  ))}
</TableBody>

      </Table>
    </TableContainer>
  );
};

export default DataRender;
