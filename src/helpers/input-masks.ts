export const maskPhone = (numberPhone: string) => {
  if (numberPhone.startsWith('+55')) {
    // Apply pt-BR mask
    numberPhone = numberPhone.replace("+55", "")
    return "+55 " + numberPhone
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})(\d+?)$/, '$1')
  } else if (numberPhone.startsWith('+')) {
    // Return only numbers with leading +
    return "+" + maskOnlyNumbers(numberPhone)
  }
  
  // Return only numbers
  return maskOnlyNumbers(numberPhone)
}

export const maskCPF = (cpf: string) => {
  return cpf
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export const maskCEP = (cep: string) => {
  return cep.replace(/\D/g, '').replace(/^(\d{5})(\d{3})+?$/, '$1-$2')
}

// 00/00/0000
export const maskDate = (date: string) => {
  return date
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1')
}

export const maskOnlyLetters = (string) => {
  return string.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, '')
}

export const maskOnlyNumbers = (string) => {
  return string.replace(/\D/g, '')
}
