export function checkEmail(email) {
  let reEmail = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i;
  return reEmail.test(String(email).toLowerCase());
}

export function checkName(name) {
  let reName = /^[a-zA-Z ]{2,30}$/i;
  return reName.test(String(name).toLowerCase());
}

export function checkMessage(message) {
  let reMessage = /^[A-Za-z]{2,500}$/i;
  return reMessage.test(String(message).toLocaleLowerCase());
}
