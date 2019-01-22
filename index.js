let RNRandomBytes = require("react-native").NativeModules.RNRandomBytes;

function toBuffer(nativeStr) {
  return new Buffer(nativeStr, "base64");
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
