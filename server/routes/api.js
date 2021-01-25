const express = require('express');
const router = express.Router()
const { Op } = require("sequelize");
const { User, Item, UserItem } = require('../models/');

router.get('/user/:email/:password', async (req, res) => {
    const { email, password } = req.params
    try {
        const user = await User.findOne({
            attributes:['id', 'name', 'gender', 'email'],
            where: {
                [Op.and]: [
                    { email: email },
                    { password: password }
                ]
            }
        })
        user ? res.status(200).send(user) :res.status(404).send('wrong email or password')
    } catch (err) { res.status(400).send(err)}
})

router.post('/user', async (req, res) => {
    try {
        const response = await User.create(req.body)
        const { id, name, email, gender } = response
        res.status(200).send ({user : {id, name, gender, email }})
    } catch (err) { res.status(400).send('email exists') }
})


router.get('/:userId/userLikedItems', async (req, res) => {
    try {
        const user = await User.findOne({
            where: { id: req.params.userId },
            include: [{model: Item, through: { where: {isLike: true} } }],
        })
        res.send(user.Items)
    } catch (err) { res.send(err) }
})

router.get('/:userId/userItems', async (req, res) => {
    try {
        const user = await User.findOne({
            where: { id: req.params.userId },
            include: [Item]
        })
        const gender = user.gender
        const id = []
        user.Items.forEach(i => id.push(i.id))
        const items = await Item.findAll({
            where: {
                gender: gender,
                id: { [Op.notIn]: id}
            }
        })
        res.send(items)
    } catch (err) { res.send(err) }
})

router.post('/:isLike/:ItemId/:UserId', async (req, res) => {
    try {
        const item = await UserItem.create(req.params)
        res.status(200).send(item)
    } catch (err) { res.status(400).send(err) }
})

// const mapItems = require('../data/data');
// async function addItems() {
//     const items = await mapItems()
//     items.forEach((i) => {
//         Item.create(i)
//     })
// }addItems()
module.exports = router



