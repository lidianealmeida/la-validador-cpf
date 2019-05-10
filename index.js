function cpfValidator(cpfString) {
  const cpfArray = cpfString.split('');
  const isCpfInvalid = cpfArray.length < 11 || cpfArray.length > 11 || cpfArray.every(digit => digit === cpfArray[0])
  if (isCpfInvalid) {
    return false;
  else {
     return digitValidator(cpfArray)
  }
}

function digitValidator(cpf) {
    const nineDigitsCpf = cpf.slice(0, 9);
    const firstDigit = getDigits(nineDigitsCpf, false);
    const tenDigitsCpf = [...nineDigitsCpf, firstDigit];
    const secondDigit = getDigits(tenDigitsCpf, true);
    return firstDigit === parseInt(cpf[9]) && secondDigit === parseInt(cpf[10]); 
}

function getDigits(cpf, secondDigit) {
    const number = secondDigit ? 11 : 10;
    const multiply = cpf.map((element, index) => element * (number - index));
    const sum = multiply.reduce((acc, element) => acc + element);
    return (sum % 11) < 2 ? 0 : 11 - (sum % 11);
}

exports.cpfValidator = cpfValidator;
