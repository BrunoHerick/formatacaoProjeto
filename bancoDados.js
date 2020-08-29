const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const criararquivo = require('./criarArquivo')

const listaRegistros = []

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/mostrarRegistros', (req, res) => {
    res.send(listaRegistros)
})

app.post('/criarArquivo', (req, res) => {//get --> obter alguma informação do servidor
    function verificarBox(requisicao) {
        if (requisicao == "on") return "Ok"
        else return "Nao_concluido"
    }

    const dadosUsuario = {
        Data_formatacao: req.body.data_formatacao,
        Chamado: req.body.chamado,
        SESSP: req.body.sessp,
        Usuario: req.body.usuario,
        Coordenadoria: req.body.coordenadoria,
        Setor: req.body.setor,
        Predio: req.body.predio,
        Sala: req.body.sala,
        Ramal: req.body.ramal,
        Modelo: req.body.modelo,
        CPU: req.body.cpu,
        Memoria_ram: req.body.m_ram,
        HD: req.body.hd,
        Arquitetura: req.body.arquitetura,
        Tecnico: req.body.tecnico,
        Patrimonio: req.body.patrimonio,
        Serie: req.body.serie,
        Nome_usuario_user: verificarBox(req.body.nomeUsuario),
        Ativacao_senha_administrador: verificarBox(req.body.ativacao),
        Desativar_user: verificarBox(req.body.desativaUser),
        Ativar_chave: verificarBox(req.body.ativarChave),
        Instalar_drivers: verificarBox(req.body.instalarDrivers),
        Desabilitar_protocolo: verificarBox(req.body.desabilitarProtocolo),
        Dominio_inserir: verificarBox(req.body.dominioInserir),
        Nome_computador: verificarBox(req.body.nomeComputador),
        Verificar_watchguard: verificarBox(req.body.verificarWatchGuard),
        Adicionar_usuario_padrao: verificarBox(req.body.adicaoUsuarioPadrao),
        Opcao_energia: verificarBox(req.body.opcaoEnergia),
        MSCONFIG: verificarBox(req.body.msconfig),
        Ativar_office_2010: verificarBox(req.body.ativaOffice2010),
        Atualiza_office: verificarBox(req.body.atualizaOffice)
    }
    listaRegistros.push(dadosUsuario)
    criararquivo.criarFile(dadosUsuario)
    res.send("<h1>Arquivo Salvo</h1>")
})

app.listen(porta, () => {
    console.log(`Servidor executado na porta ${porta}`)
})