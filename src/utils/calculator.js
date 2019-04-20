const readMapping = (value) => {
  return value ? 4 : 0
};

const writeMapping = (value) => {
  return value ? 2 : 0
};

const executeMapping = (value) => {
  return value ? 1 : 0
};

export const calculator = ({ read, write, execute }) => {
  return readMapping(read) + writeMapping(write) + executeMapping(execute)
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
