# Activity in Database 2

## This is my activity in database 2 and the important codes/snippets are       the following: 
 1. require('dotenv').config()
const { Pool } = require('pg')
const pool = new Pool({
    user: `${process.env.DB_USER}`,
    host: `${process.env.DB_HOST}`,
    database: `${process.env.DB_DATABASE}`,
    password: `${process.env.DB_PASSWORD}`,
    port: 5432,
    ssl: {
        rejectUnauthorized:false
    },
})

pool.query(, (error,results) => {
    if(error) {
        throw error
    }
    console.log(results.rows)
})

2. 
## In case of error [Type of error], here are the steps that you need to consider:
 1. net.js:989
      throw new ERR_SOCKET_BAD_PORT(port);
      code: 'ERR_SOCKET_BAD_PORT'

 2.  Error: getaddrinfo ENOTFOUND undefined
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:60:26) {
  errno: 'ENOTFOUND',
  code: 'ENOTFOUND',
  syscall: 'getaddrinfo',
  hostname: 'undefined'

3. internal/modules/cjs/loader.js:800
    throw err;
    ^

    Error: Cannot find module '.env'
    code: 'MODULE_NOT_FOUND'

