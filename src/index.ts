import {containsOnly0And1} from "./validations"

const messageToEncrypt = process.argv[2];

if(messageToEncrypt == undefined) {
  throw new Error('Nothing to encrypt! Please, pass an argument composed from 0 and 1.');
}

if(!containsOnly0And1(messageToEncrypt)) {
  throw new Error('Invalid message to encrypt! The message must contain only 0 and 1.');
}

console.log('Success');
