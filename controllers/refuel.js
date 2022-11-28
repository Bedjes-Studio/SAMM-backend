const Refuel = require('../models/refuel');

exports.test = (req, res, next) => {
    res.status(200).json({ "Test": "Ok" });
};

exports.create = (req, res, next) => {
    const refuel = new Refuel({
        date: Date.now(),
        mileage: req.body.mileage,
        creatorId: req.auth.userId,
        fuelType: req.body.fuelType,
        litterPrice:  req.body.litterPrice,
        totalCost:  req.body.totalCost,
        litter:  req.body.litter,
    });

    refuel.save().then(
        () => {
            res.status(201).json({
                message: 'Refuel saved successfully!',
                refuel: refuel
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                "error": error
            });
        }
    );
};


exports.delete = (req, res, next) => {
    Refuel.deleteOne({ _id: req.body.id }).then(
        (result) => {
            res.status(200).json({
                message: "Refuel deleted : " + result.deletedCount
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};