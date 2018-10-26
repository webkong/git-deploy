const exec = require('child_process').execSync

module.exports = () => {
  let name
  let email
  let url

  try {
    name = exec('git config --get user.name')
    email = exec('git config --get user.email')
    url = exec('git config --get remote.origin.url')
  } catch (e) {}

  name = name && JSON.stringify(name.toString().trim()).slice(1, -1)
  email = email && (email.toString().trim())
  url = url && url.toString().trim() ;
  return {
    name, email,url
  }
}
