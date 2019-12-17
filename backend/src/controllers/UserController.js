const axios = require('axios');
const Dev = require('../models/Dev');
module.exports = {
async show(req, res){
    const { user } = req.headers;

    const loggeduser = await Dev.findById({_id: user });

    return res.json(loggeduser);

}
}