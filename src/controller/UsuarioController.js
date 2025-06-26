// Metodos  funções oque faz ações
const Usuarios = require("../models/Usuarios");
const UsuarioController = {
    login: (req, res) => {
        const { email, password } = req.body;
        // Validar se os dados não esstão nulos
        if (!email || !password) {
            return res.status(400).json({ erro: 'email and password required!' })
        }
        // Busca Usuario pelo Email
        const usuario = Usuarios.find(user => user.email === email);
        // Valida se encontrou pelo email
        if (!usuario) {
            return res.status(401).json({ erro: 'invalid credential' })
        }
        // Match | comparar senha enviada com a senha armazenada
        const validPassword = usuario.password === password;
        if (!validPassword) {
            return res.status(401).json({ erro: 'invalid credential!' })
        }
        return res.status(201).json(usuario)
    }
}
module.exports = UsuarioController;