import { check, group } from 'k6';
import http from 'k6/http';

export default function () {
  group('fetch a list of public crocodile', () => {
    const response = http.get('https://test-api.k6.io/public/crocodiles');

    check(response, {
      'response status': res => res.status == 200,
      'response body': res => res.body.length > 4
    });
  });

  group('fetch a single crocodile', () => {
    const expected = {
      "id": 6,
      "name": "Sang Buaya",
      "sex": "F",
      "date_of_birth": "2006-01-28",
      "age": 16,
    };

    const response = http.get('https://test-api.k6.io/public/crocodiles/6');
    console.log(response.body.toString())
    console.log(Object.toString(expected))

    check(response, {
      'response status': res => res.status == 200,
      'response body': res => res.body.toString() == JSON.stringify(expected)
    });
  });

  group('fetch an invalid crocodile', () => {
    const response = http.get('https://test-api.k6.io/public/crocodiles/9999999');

    check(response, {
      'response status': res => res.status == 404,
      'error message': res => JSON.parse(res.body).detail == 'Not found.'
    });
  });
};