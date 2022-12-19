const Earning = require('../models/earning');

exports.create = (req, res, next) => {
    const earning = new Earning({
        date: Date.now(),
        mileage: req.body.mileage,
        creatorId: req.auth.userId,
        carId: req.body.carId,
        value: req.body.value,
        reason: req.body.reason,
    });

    earning.save().then(
        () => {
            res.status(201).json({
                message: 'Earning saved successfully!',
                earning: earning
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
    Earning.findOne({
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
    Earning.find({carId: req.body.carId}).then(
        (earning) => {
            res.status(200).json(earning);
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
    const earning = new Earning({
        _id: req.body.id,
        date: req.body.date,
        mileage: req.body.mileage,
        creatorId: req.auth.userId,
        carId: req.body.carId,
        value: req.body.value,
        reason: req.body.reason,
    });
    Earning.updateOne({ _id: req.body.id }, earning).then(
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
    Earning.deleteOne({ _id: req.body.id }).then(
        (result) => {
            res.status(200).json({
                message: "Earning deleted : " + result.deletedCount
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