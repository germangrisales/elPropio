// const express = require('express')
// const next = require('next')

// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app
//     .prepare()
//     .then(() => {
//         const server = express()


//         server.get('/csa', (req, res) => {
//             const actualPage = '/csa'
//             // const queryParams = { title: req.params.id }
//             app.render(req, res, actualPage)
//         })


//         server.get('*', (req, res) => {
//             return handle(req, res)
//         })

//         server.listen(3000, err => {
//             if (err) throw err
//             console.log('> Ready on http://localhost:3000')
//         })
//     })
//     .catch(ex => {
//         console.error(ex.stack)
//         process.exit(1)
//     })

// cargamos express e iniciamos una aplicación
const express = require('express')()
// creamos un servidor HTTP desde de nuestra aplicación de Express
const server = require('http').Server(express)
// creamos una aplicación de socket.io desde nuestro servidor HTTP
const io = require('socket.io')(server)
const next = require('next')



const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
let connect = false
io.on('connection', socket => {
    // escuchamos el evento `message`
    console.log('usuario conectado!')
    connect = true
    socket.on('disconnect', () => {
        console.log('desconectado con el servidor front!')
        connect = false
    })

    socket.on('realTime', (data) => {
        // guardamos el mensaje en nuestra "DB"
        console.log(data)
        // enviamos el mensaje a todos los usuarios menos a quién los envió
        if (connect) {
            socket.broadcast.emit('realTime', data)
        }
    })
})

app.prepare()
    .then(() => {

        express.get('*', (req, res) => {
            return handle(req, res)
        })

        express.get('/csa', (req, res) => {
            const actualPage = '/csa'
            // const queryParams = { title: req.params.id }
            app.render(req, res, actualPage)
        })

        express.get('/navbar', (req, res) => {
            const actualPage = '/NavBar'
            app.render(req, res, actualPage)
        })

        server.listen(port, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:' + port)
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })