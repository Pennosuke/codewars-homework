function validatePIN (pin) {
  if(pin.length == 4 || pin.length == 6) {
    let isDigit = true
    for(let i=0; i<pin.length; i++) {
      if(pin[i]<'0' || pin[i]>'9') {
        isDigit = false
        break
      }
    }
    return isDigit
  }
  else {
    return false
  }
}
