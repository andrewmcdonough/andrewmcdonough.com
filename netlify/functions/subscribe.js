exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let email;
  try {
    email = JSON.parse(event.body).email;
  } catch {
    return { statusCode: 400, body: 'Bad Request' };
  }

  const res = await fetch('https://andrewcmcdonough.substack.com/api/v1/free', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  return { statusCode: res.ok ? 200 : res.status, body: res.ok ? 'OK' : 'Error' };
};
