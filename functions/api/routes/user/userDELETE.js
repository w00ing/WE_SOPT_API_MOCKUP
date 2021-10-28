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

  let deletedUser = users.filter((obj) => obj.id === Number(userId))[0];
  if (!deletedUser) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  let remainingUsers = users.filter((o) => o.id !== deletedUser.id).map((o) => _.omit(o, 'password'));

  // remainingUser
  deletedUser = _.omit(deletedUser, 'password');

  res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.USER_DELETE_SUCCESS, { deletedUser, remainingUsers }));
};
