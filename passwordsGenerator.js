class PasswordsGenerator {
  constructor() {
    this.passwords = [];
    this.length = 12; // Default password length
    this.count = 1; // Default number of passwords to generate
    this.PIN = false;
    this.upper = true;
    this.lower = true;
    this.symbol = true;
    this.numbers = true;
    this.format = 'alphanumeric'; // Default format ('alphanumeric', 'letters', 'numbers', 'symbols')
  }

  GeneratePasswords() {
    this.passwords = [];
    const characters = this.getCharacterList();
    for (let i = 0; i < this.count; i++) {
      let password = '';
      for (let j = 0; j < this.length; j++) {
        password += characters[Math.floor(Math.random() * characters.length)];
      }
      this.passwords.push(password);
    }
    return this.passwords;
  }

  getCharacterList() {
    let characters = '';
    if (this.upper) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (this.lower) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (this.numbers) characters += '0123456789';
    if (this.symbol) characters += '!@#$%^&*()-_';
    if (this.PIN) characters = '0123456789';
    return characters;
  }

  SetLength(length) {
    this.length = length;
  }

  GetLength() {
    return this.length;
  }

  SetCount(count) {
    this.count = count;
  }

  GetCount() {
    return this.count;
  }

  SetPIN(PIN) {
    this.PIN = PIN;
  }

  GetPIN() {
    return this.PIN;
  }

  SetUpper(upper) {
    this.upper = upper;
  }

  GetUpper() {
    return this.upper;
  }

  SetLower(lower) {
    this.lower = lower;
  }

  GetLower() {
    return this.lower;
  }

  SetNumbers(numbers) {
    this.numbers = numbers;
  }

  GetNumbers() {
    return this.numbers;
  }

  SetSymbol(symbol) {
    this.symbol = symbol;
  }

  GetSymbol() {
    return this.symbol;
  }

  SetFormat(format) {
    this.format = format;
  }

  GetFormat() {
    return this.format;
  }

  CopyPasswords() {
    return [...this.passwords];
  }
}

// Example usage:
/*const generator = new PasswordsGenerator();
generator.SetLength(15);
generator.SetCount(5);
generator.SetUpper(true);
generator.SetNumbers(true);
generator.SetFormat('alphanumeric');
const passwords = generator.GeneratePasswords();
console.log(passwords);*/
