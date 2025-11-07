const Person = require('./05-person')

describe('Test for Person', () => {
  let person;
  // Arrange - preparar el escenario
  beforeEach(() => {
    person = new Person('Nicolas', 45, 1.7)
  })

  test('should return down', () => {
    person.weight = 45
    // Arrange - Act
    const imc = person.calcIMC()
    // Assert
    expect(imc).toBe('down')
  })

  test('should return normal', () => {
    person.weight = 59
    // Arrange - Act
    const imc = person.calcIMC()
    // Assert
    expect(imc).toBe('normal')
  })
})

