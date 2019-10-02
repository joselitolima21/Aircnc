// index, show, store, update, destroy
const Spot = require("../models/Spot")
const User = require("../models/Users")

module.exports = {
    async show(req,res) {
        const {user_id} = req.headers;
        const spots = await Spot.find({user: user_id})
        return res.status(200).json(spots)
    }
}