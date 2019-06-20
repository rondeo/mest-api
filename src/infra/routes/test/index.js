const express = require('express');
const actionRunner = require('../../middlewares/action-runner');
const TestFlowActionFactory = require('../../factories/actions/test-flow-action');

const user = express.Router();

const router = () => {
  user.route('/flow').post((req, res) => actionRunner(req, res, TestFlowActionFactory));

  return user;
};

module.exports = router;