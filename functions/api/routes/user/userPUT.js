const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const users = require('../../../dbMockup/user');

module.exports = async (req, res) => {
  const { userId } = req.params;
  const { name, email, password } = req.body;

  if (!userId) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  const existingUser = users.filter((obj) => obj.id === Number(userId))[0];
  if (!existingUser) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  const updatedUser = { ...existingUser, name, email, password };

  res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.USER_UPDATE_SUCCESS, updatedUser));
};
