const express = require("express");

const router = express.Router();

const Property = require('../models/properties-model');

// Get all Properties
router.get("/", (req, res) => {
    Property.prototype
        .getAll()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.send(err);
        });
});

// Create new Property
router.post("/create", (req, res) => {
    Property.prototype
        .create(req.body)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.send(err);
        });
});

// Update Property by ID
router.post("/update", (req, res) => {
    Property.prototype
        .updateByID(req.body.id)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.send(err);
        });
});

// Get Property by ID
router.get("/:id", (req, res) => {
    Property.prototype
        .getById(req.body.id)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.send(err);
        });
});

// Delete Property
router.post("/delete", (req, res) => {
    Property.prototype
        .remove(req.body.id)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.send(err);
        });
});


module.exports = router;