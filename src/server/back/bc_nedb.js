const bcrypt = require('bcrypt');
const saltRounds = 10;
// const salt = bcrypt.genSaltSync(saltRounds);
const {
  AsyncNedb
} = require('nedb-async')
const db = new AsyncNedb({
  filename: 'data.db',
  autoload: true,
})

const getUserByEmail = (eml) => {
  let user = db.asyncFindOne({
    _email: eml
  }, function (err, doc) {
    console.log(doc)
    resolve(doc)
  })
  return user.then(doc => doc)
}
module.exports.getUserByID = (id) => {
  let user = db.asyncFindOne({
    _id: id
  }, function (err, doc) {
    console.log(doc)
    resolve(doc)
  })
  return user.then(doc => doc)
}

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) reject(err)
      resolve(hash)
    })
  })
}

const comparePasswords = (psw, foundedHash) => {
  let pr_1 = new Promise((resolve, error) => {
    bcrypt.compare(psw, foundedHash, (err, success) => {
      resolve(success)
    })
  })
  return pr_1.then(success => success)
}

module.exports.recogniseUser = async (eml, psw) => {
  let doc = await getUserByEmail(eml),
      equality = doc ? await comparePasswords(psw, doc._password) : false
      console.log('!!!!!!!!!!!!!!!Success!!!!!!!!!!!!!!    ' + (equality))

  return equality ? doc : ''
}

module.exports.addNewUser = async(eml, psw) => {
    let hash = await hashPassword(psw)
      db.insert({_email: eml, _password: bcrypt.hashSync(psw, saltRounds)}, function (err, newDoc) {})
      return true
}
