const Car = require('../models/car');

// TODO : check params
exports.createCar = (req, res, next) => {
    const car = new Car({
        mileage: req.body.mileage,
        year: req.body.year,
        owner: req.auth.userId,
        guests: [],
    });
    car.save().then(
        () => {
            res.status(201).json({
                message: 'Car saved successfully!',
                car: car
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

// TODO : check inputs and throw errors for security
// check de delete juste sa voiture
exports.deleteCar = (req, res, next) => {
    console.log(req.body.id);
    Car.deleteOne({ _id: req.body.id }).then(
        (result) => {
            res.status(200).json({
                message: result.deletedCount
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

// exports.test = (req, res, next) => {
//     res.status(200).json({ "hello": "hello" });
// }