const fs = require('fs')

function criarFile(arquivo) {
    fs.writeFile(__dirname + `/ARQUIVOS_REGISTRO_FORMATACAO/${arquivo.Usuario}_chamado${arquivo.Chamado}.json`, JSON.stringify(arquivo), e => {
        console.log("Arquivo salvo !!!")
    })
}

module.exports = {
    criarFile
}