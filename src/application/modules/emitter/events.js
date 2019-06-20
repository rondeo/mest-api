const names = {
  success: 'success',
  unprocessableEntity: 'unprocessableEntity',
  badRequest: 'badRequest',
  internalServerError: 'internalServerError',
  noContent: 'noContent',
};

const statusCodes = {
  success: 200,
  unprocessableEntity: 422,
  badRequest: 400,
  internalServerError: 500,
  noContent: 204,
};

module.exports = {
  names,
  statusCodes,
};
