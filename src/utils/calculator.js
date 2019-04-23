// number
// symbol
const readMapping = (value, mode = 'number') => {
  return mode === 'number' ? value ? 4 : 0 : value ? 'r' : '-'
};

const writeMapping = (value, mode = 'number') => {
  return mode === 'number' ? value ? 2 : 0 : value ? 'w' : '-'
};

const executeMapping = (value, mode = 'number') => {
  return mode === 'number' ? value ? 1 : 0 : value ? 'x' : '-'
};

export const calculator = ({ read, write, execute }) => {
  return readMapping(read, 'number') + writeMapping(write, 'number') + executeMapping(execute, 'number')
};

export const parseCalculatorToSymbol = ({ read, write, execute }) => {
  return readMapping(read, 'symbol') + writeMapping(write, 'symbol') + executeMapping(execute, 'symbol')
};

export const decodeCalculator = (value) => {
  let read;
  let write;
  let execute;
  switch (value) {
    case '1':
      read = false;
      write = false;
      execute = true;
      break;
    case '2':
      read = false;
      write = true;
      execute = false;
      break;
    case '3':
      read = false;
      write = true;
      execute = true;
      break;
    case '4':
      read = true;
      write = false;
      execute = false;
      break;
    case '5':
      read = true;
      write = false;
      execute = true;
      break;
    case '6':
      read = true;
      write = true;
      execute = false;
      break;
    case '7':
      read = true;
      write = true;
      execute = true;
      break;
    default:
      read = false;
      write = false;
      execute = false;
  }

  return {
    read,
    write,
    execute
  }
};
