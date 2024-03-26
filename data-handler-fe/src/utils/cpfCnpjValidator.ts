export function isValidCPF(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]+/g, '');
  
    if (cpf === '') return false;
  
    // Elimina CPFs inválidos conhecidos
    if (
      cpf.length !== 11 ||
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999'
    ) {
      return false;
    }
  
    // Valida 1º dígito verificador
    let add = 0;
    for (let i = 0; i < 9; i++) {
      add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(9))) {
      return false;
    }
  
    // Valida 2º dígito verificador
    add = 0;
    for (let i = 0; i < 10; i++) {
      add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(cpf.charAt(10))) {
      return false;
    }
  
    return true;
  }
  
  // Função para validar CNPJ
  export function isValidCNPJ(cnpj: string): boolean {
    cnpj = cnpj.replace(/[^\d]+/g, '');
  
    if (cnpj === '') return false;
  
    if (cnpj.length !== 14) return false;
  
    // Valida 1º dígito verificador
    let add = 0;
    for (let i = 0; i < 12; i++) {
      add += parseInt(cnpj.charAt(i)) * (5 - (i % 4));
    }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(cnpj.charAt(12))) {
      return false;
    }
  
    // Valida 2º dígito verificador
    add = 0;
    for (let i = 0; i < 13; i++) {
      add += parseInt(cnpj.charAt(i)) * (6 - (i % 4));
    }
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) {
      rev = 0;
    }
    if (rev !== parseInt(cnpj.charAt(13))) {
      return false;
    }
  
    return true;
  }
  