'use strict';

const crypto = require('crypto');
const _ = require('lodash');

function encrypt_text(text) {
  return new Promise(function(resolve, reject) {
    console.log("in encrypt");
    const encryptStr = _encrypt(text);
    console.log({ encrypt: encryptStr });
    resolve(encryptStr);
})
}

function _encrypt(crypt = ''){
  crypt = _.isObject(crypt) ? JSON.stringify(crypt) : crypt;
  const cipher = crypto.createCipher('aes-256-ctr', 'abcdefg1234567890!@#$%^&*()');
  return cipher.update(crypt, 'utf8', 'hex');
}

module.exports.encrypt_text = encrypt_text;