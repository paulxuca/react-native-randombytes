var RNRandomBytes = require("react-native").NativeModules.RNRandomBytes;
var { Buffer } = require("buffer");

function toBuffer(nativeStr) {
  return Buffer.from(nativeStr, "base64");
}

export function randomBytes(length, cb) {
  if (!cb) {
    throw new Error("cb must be present.");
  }

  RNRandomBytes.randomBytes(length, function(err, base64String) {
    if (err) {
      cb(err);
    } else {
      cb(null, toBuffer(base64String));
    }
  });
}
