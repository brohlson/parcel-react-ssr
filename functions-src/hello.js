const successCode = 200;
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
};

exports.handler = async (event, context) => {
  return {
    statusCode: successCode,
    headers,
    body: JSON.stringify({
      msg: 'And this is a serverless function response 🙂',
    }),
  };
};
