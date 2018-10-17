import Future from 'data.task';
import handleResponse from './_handleResponse';

const makeJsonRequest = (method, url, data) =>
  new Future((reject, resolve) => {
    const xhr = new XMLHttpRequest();

    if (!xhr) {
      reject({ error: 'Unable to create a XMLHttp instance.' });
    }

    xhr.onreadystatechange = handleResponse(xhr, reject, resolve);

    xhr.open(method, url);
    xhr.responseType = 'json';

    if (data) {
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      xhr.send(JSON.stringify(data));
    } else {
      xhr.send();
    }
  });

export default makeJsonRequest;
