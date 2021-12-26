const router = require('express').Router();
const candidatesController = require('../controller/candidates');

router.get('/candidates', candidatesController.GetCandidates);

module.exports = router;