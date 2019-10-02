// index, show, store, update, destroy
const User = require("../models/Users")

module.exports = {
    async store(req,res) {
        const { email } = req.body;
        let user = await User.findOne({ email: email });

        if (!user) {
            user = await User.create({ email });
        }
        return res.status(201).json(user);
    }
}