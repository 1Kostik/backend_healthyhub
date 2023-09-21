const { Water } = require("../../models/water");

const createWaterRecord = async (req, res) => {
    const { _id: owner } = req.user;
    
    const body = req.body;
    
    const newWater = await Water.create({ ...body, owner });
    
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
        newWater,
        },
    });

};

module.exports = createWaterRecord;
