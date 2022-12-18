const Car = require('../models/car');

// TODO : check params
exports.createCar = (req, res, next) => {
    const car = new Car({
        mileage: req.body.mileage,
        year: req.body.year,
        ownerId: req.auth.userId,
        guestsId: [],
        // specsId: "aaa" // TODO : link to specs Id
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


exports.getSingle = (req, res, next) => {
    Car.findOne({
        _id: req.body.id
    }).then(
        (car) => {
            res.status(200).json(car);
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
    console.log(req.auth.userId);
    Car.find({ownerId: req.auth.userId}).then(
        (cars) => {
            res.status(200).json(cars);
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
    const car = new Car({
        _id: req.body.id,
        date: req.body.date,
        mileage: req.body.mileage,
        year: req.body.year,
    });
    Car.updateOne({ _id: req.body.id }, car).then(
        () => {
            res.status(201).json({
                message: 'Car updated successfully!'
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

// TODO : check inputs and throw errors for security
// check de delete juste sa voiture
// TODO : safe delete
exports.deleteCar = (req, res, next) => {
    Car.deleteOne({ _id: req.body.id }).then(
        (result) => {
            res.status(200).json({
                message: "Car deleted : " + result.deletedCount
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