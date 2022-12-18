const Cost = require('../models/cost');

exports.create = (req, res, next) => {
    const cost = new Cost({
        date: Date.now(),
        mileage: req.body.mileage,
        creatorId: req.auth.userId,
        carId: req.body.carId,
        value: req.body.value,
        reason: req.body.reason,
        paymentMethod: req.body.paymentMethod
    });

    cost.save().then(
        () => {
            res.status(201).json({
                message: 'Cost saved successfully!',
                cost: cost
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

exports.getSingle = (req, res, next) => {
    Cost.findOne({
        _id: req.body.id
    }).then(
        (cost) => {
            res.status(200).json(cost);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
}

exports.getAll = (req, res, next) => {
    Cost.find().then(
        (cost) => {
            res.status(200).json(cost);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.update = (req, res, next) => {
    const cost = new Cost({
        _id: req.body.id,
        date: req.body.date,
        mileage: req.body.mileage,
        creatorId: req.auth.userId,
        carId: req.body.carId,
        value: req.auth.value,
        reason: req.auth.reason,
        paymentMethod: req.auth.paymentMethod
    });
    Cost.updateOne({ _id: req.body.id }, cost).then(
        () => {
            res.status(201).json({
                message: 'Cost updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}


exports.delete = (req, res, next) => {
    Cost.deleteOne({ _id: req.body.id }).then(
        (result) => {
            res.status(200).json({
                message: "Cost deleted : " + result.deletedCount
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