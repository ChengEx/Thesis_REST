const jwt = require('jsonwebtoken');
//const { SECRET_KEY } = require('../config');
require('dotenv/config');

module.exports = (context) =>{
    //context = { ...headers } 
    const authHeader = context.req.headers.authorization;
    if(authHeader) {
        // Bearer .....
        const token = authHeader.split('Bearer ')[1];
        if(token){
            try{
                const user = jwt.verify(token, process.env.secret_key);
                return user;
            }catch(err){
                throw new Error('Invalid/Expired token');
            }
        }
        throw new Error('Authentication token must be \'Bearer [token]');
    }
    throw new Error('Authorization header token must be provide');
}