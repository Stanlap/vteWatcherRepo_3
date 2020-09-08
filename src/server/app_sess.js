const path = require('path')
const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const app = express()
const {
    PORT = process.env.PORT || 8000,
        MODE_ENV = 'development',
        SESS_NAME = 'sid',
        SESS_SECRET = 'obobNMN23h'
} = process.env
const IN_PROD = MODE_ENV === 'production'
const DIST_DIR = path.resolve(__dirname, '../dist')
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(express.static(DIST_DIR))

app.use(session({
    store: new FileStore(),
    name: SESS_NAME,
    saveUninitialized: false,
    resave: false,
    secret: SESS_SECRET,

    cookie: {
        maxAge: 1000 * 60 * 60,
        sameSite: true,
        secure: IN_PROD
    }
}))
const neDB = require('./back/bc_nedb')
const wst = require('./back/chat')
const countRF = require('./back/vte_brain')
const redirectLogin = (req, res, next) => {
    if (!req.session.userId) {
        res.redirect('/login')
    } else {
        next()
    }
}
const redirectRegist = (req, res, next) => {
    if (!req.session.userId) {
        res.redirect('/regist')
    } else {
        next()
    }
}
const redirectHome = (req, res, next) => {
    if (req.session.userId) {
        res.redirect('/home')
    } else {
        next()
    }
}
const redirectMain = (req, res, next) => {
    if (!req.session.userId) {
        res.redirect('/')
    } else {
        next()
    }
}
app.use((req, res, next) => {
    const {
        userId
    } = req.session
    if (userId) {
        res.locals.user = neDB.getUserByID(userId)
    }
    next()
})

app.get('/', (req, res) => {
    const {
        userId
    } = req.session
    // console.log(userId)
    userId ? console.log(req.session.cookie): ''
    res.sendFile(`${DIST_DIR}/public/html/main.html`)
})
app.get('/about_us', (req, res) => res.sendFile(`${DIST_DIR}/public/html/about_us.html`))
app.get('/login', (req, res) => res.sendFile(`${DIST_DIR}/public/html/login.html`))
app.get('/regist', (req, res) => res.sendFile(`${DIST_DIR}/public/html/regist.html`))
app.get('/chat', redirectMain, (req, res) => res.sendFile(`${DIST_DIR}/public/html/chat.html`))
app.get('/main_auth', redirectMain, (req, res) => res.sendFile(`${DIST_DIR}/public/html/main_auth.html`))
app.get('/prog_list', redirectMain, (req, res) => res.sendFile(`${DIST_DIR}/public/html/prog_list.html`))
app.get('/vte_patient_profile', redirectMain, (req, res) => {
    res.sendFile(`${DIST_DIR}/vte_watch/vte_patient_profile.html`)
})
app.get('/vte_user_profile', redirectMain, (req, res) => {
    res.sendFile(`${DIST_DIR}/vte_watch/vte_user_profile.html`)
})
app.get('/vte_reference', redirectMain, (req, res) => {
    res.sendFile(`${DIST_DIR}/vte_watch/vte_reference.html`)
})
app.get('/vte_outer_ref', redirectMain, (req, res) => {
    res.sendFile(`${DIST_DIR}/vte_watch/vte_outer_ref.html`)
})
app.get('/vte_scales', redirectMain, (req, res) => {
    res.sendFile(`${DIST_DIR}/vte_watch/vte_scales.html`)
})
app.get('/vte_obst_profile', redirectMain, (req, res) => {
    res.sendFile(`${DIST_DIR}/vte_watch/vte_obst_profile.html`)
})
app.get('/vte_oper_profile', redirectMain, (req, res) => {
    res.sendFile(`${DIST_DIR}/vte_watch/vte_oper_profile.html`)
})
app.get('/vte_patient_list_rf', redirectMain, (req, res) => {
    res.sendFile(`${DIST_DIR}/vte_watch/vte_patient_list_rf.html`)
})
app.get('/vte_concl', redirectMain, (req, res) => {
    res.sendFile(`${DIST_DIR}/vte_watch/vte_concl.html`)
})
app.get('/vte_drug', redirectMain, (req, res) => {
    res.sendFile(`${DIST_DIR}/vte_watch/vte_drug.html`)
})
app.get('/vte_assignment_sheet', redirectMain, (req, res) => {
    res.sendFile(`${DIST_DIR}/vte_watch/vte_assignment_sheet.html`)
})

app.post('/count', redirectMain, (req, res) => {
    res.send(JSON.stringify(countRF.countKindsRF(req.body.rfArr, req.body.aForCounter)));
});



app.get('/home', redirectLogin, (req, res) => {
    res.send(`
    <h1>Home</h1>
    <a href="/">Main</a>
    <ul>
        <li>Name: </li>
        <li>Email: </li>
    </ul>
    <a href="/login">Login</a>
    <a href="/register">Register</a>
    <form method= "post" action="/logout">
    <button>Logout</button>
    </form>

`)
})

app.get('/register', redirectHome, (req, res) => {
    res.send(`
    <h1>Register</h1>
    <form method ="post" action="/register">
    <input type="email" name="email" placeholder="Email" required/>
    <input type="password" name="password" placeholder="Password" required/>
    <input type="submit"/>
        </form>
        <a href="/">Home</a>
        <a href="/login">Login</a>
    `)
})

app.post('/login', (req, res) => {
    const {
        email,
        password
    } = req.body

    neDB.recogniseUser(email, password).then(doc => {
        console.log(doc)
        if (doc) {
            req.session.userId = doc._id
            console.log(`User ID ${doc._id} auth successful!`)
            return res.redirect('/main_auth')
        }
        res.redirect('/login')
    })
})
app.post('/regist', (req, res) => {
    const {
        email,
        password
    } = req.body

    neDB.recogniseUser(email, password[0]).then(doc => {
        console.log(doc)
        if (doc) {
            req.session.userId = doc._id
            console.log(`User ${doc._id} auth successful!`)
            return res.redirect('/main_auth')
        } else {
            neDB.addNewUser(email, password[0])
                .then(result => console.log(`User ${email} is created!`))
            res.redirect('/login')
        }
    })
})

app.get('/logout', redirectLogin, (req, res) => {
    console.log(`Session ID ${req.session.id} is destroyed`)
    req.session.destroy(() => {
        res.clearCookie(SESS_NAME)
        res.redirect('/')
    })
})

app.listen(PORT, () => console.log(` Server started at http://localhost: ${PORT}`))