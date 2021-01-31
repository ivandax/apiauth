const Asset = require('../model/Asset');
const router = require('express').Router();
const verify = require('./verifyToken');

const { assetValidation } = require('./validation');

router.post('/', verify, async (req, res) => {
    //Validate asset fields
    const validation = assetValidation(req.body);
    if (validation.error !== undefined) {
        return res.status(400).send(validation.error.details[0].message);
    }
    const asset = new Asset({
        name: validation.value.name,
        type: validation.value.type,
    });
    try {
        const createdAsset = await asset.save();
        res.send(createdAsset);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/', verify, async (req, res) => {
    const assets = await Asset.find({});
    res.json(assets);
});

module.exports = router;
