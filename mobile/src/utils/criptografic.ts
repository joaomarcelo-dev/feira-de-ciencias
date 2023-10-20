export const cryptografic = (value: string, codes: object) => {
  const valueCryptografic = value.split('').map((letter) => {
    if (codes[letter]) {
      return codes[letter];
    }

    return letter;
  }).join('_');

  console.log(valueCryptografic);
  

  return valueCryptografic;
}

export const decryptografic = (value: string, codes: object) => {
  const invertedObj = {};

    for (const key in codes) {
      invertedObj[codes[key]] = key;
    }

  
  const valueDecryptografic = value.split('_').map((number) => {
    if (invertedObj[number]) {
      return invertedObj[number];
    }

    return number;
  });

  return valueDecryptografic.join('');
  
}