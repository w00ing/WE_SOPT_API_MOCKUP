const _ = require('lodash');
const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const users = require('../../../dbMockup/user');

module.exports = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  let user = users.filter((obj) => obj.id === Number(userId))[0];
  if (!user) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  user = _.omit(user, 'password');

  res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.USER_GET_SUCCESS, user));
};
