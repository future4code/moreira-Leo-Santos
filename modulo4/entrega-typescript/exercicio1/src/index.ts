const checaTriangulo = (a: number, b: number, c: number): string => {
    if (a !== b && b !== c) {
        return "Escaleno";
      } else if (a === b && b === c) {
        return "Equilátero";
      } else {
        return "Isósceles";
      }
};

console.log(checaTriangulo( Number(process.argv[2]), Number(process.argv[3]), Number(process.argv[4])));