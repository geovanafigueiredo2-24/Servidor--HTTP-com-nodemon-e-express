const express = require('express')
const app = express()

app.get('/cadastro', (req, res) => {
    res.json({clientes: "Geovana,Pedro,Eidy,Sara,Deborah,Ronisson,Gabriel,Eduardo,Karine e Bruno"})
})

app.post ('/clientes', (req, res) => {
    res.json({msg:"clientes adicionados!!"})
})


app.put ('/atualizar', (req, res) => {
    res.json({msg:"Atualizado com sucesso!!"})
})



app.delete ('/deletar', (req, res) => { 
    res.json({msg: "deletado com sucesso!!"})
})


app.listen(8080, () => {
    console.log('Bem-vindos ao nosso servidor!!')
})