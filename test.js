import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 50 }, // ramp up to 50 virtual users
    { duration: '1m', target: 50 },  // stay at 50 users
    { duration: '30s', target: 0 },  // ramp down to 0
  ],
};

export default function () {
  let res = http.get('http://77.37.124.70:3014/news');

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1); // wait 1 second between requests per user
}
