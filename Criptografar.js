const VIM_CODE = "1HGCM82633A004352"

let vimCodePart2 = '';
let vimCodePart1 = '';
let vimCodePart3 = '';

const separarVimCode = () => {
  for (let indice = 0; indice <= VIM_CODE.length - 1; indice++) {
    if (indice <= 3) {
      vimCodePart1 += VIM_CODE[indice];
    } else if (indice >3 && indice <= 9) {
      vimCodePart2 += VIM_CODE[indice];
    } else {
      vimCodePart3 += VIM_CODE[indice];
    }
  }
}

for (let indice = 0; indice <= vimCodePart1.length; indice++) {
  
}

console.log(vimCodePart1, vimCodePart2, vimCodePart3)