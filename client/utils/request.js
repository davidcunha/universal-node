import Auth from '~/services/auth';

/**
 /* Apply parameters for each request:
 /* content-type, authorization type, and body
*/
export default ({
  method, authorization, body, ctx,
}) => {
  const request = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (authorization) {
    const { type } = authorization;

    switch (type) {
      case 'bearer': {
        Object.assign(request.headers, {
          Authorization: `Bearer ${Auth.getJwt(ctx)}`,
        });
        break;
      }
      default:
        break;
    }
  }

  if (body) {
    Object.assign(request, { body: JSON.stringify(body) });
  }

  return request;
};
