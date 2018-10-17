import makeJsonRequest from './_jsonRequests';

export const getJson = x => makeJsonRequest('GET', x, false);
export const postJson = (x, y) => makeJsonRequest('POST', x, y);
