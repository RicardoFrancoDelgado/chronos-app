export function getNextCycle(currentCycle: number) {
  return currentCycle === 0 || currentCycle === 8 ? 1 : currentCycle + 1;
}

// existem duas checagens a primeira é a se o ciclo é 0 passando pra 1
// a outra é se o ciclo é 8 e ele volta a ser 1
// nada disso ele incrementa até 8