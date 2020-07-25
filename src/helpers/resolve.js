export default resolve = async (promise) => {
  const resolved = {
    data: null,
    status: null,
    error: null,
    success: null,
  };

  try {
    let response = await promise;
    const { data, status } = response;
    resolved.data = data;
    resolved.status = status;
  } catch (error) {
    resolved.error = error;
    if (error.response) {
      const { statusText, status } = error.response;
      resolved.error = { type: 'responseError', message: statusText, status };
    } else if (error.request) {
      resolved.error = {
        type: 'requestError',
        message: 'No Response Received',
        status: 0,
      };
    } else {
      resolved.error = {
        type: 'unknownError',
        message: 'Something Went Wrong!',
        status: 0,
      };
    }
    resolved.data = {};
  }

  return resolved;
};
