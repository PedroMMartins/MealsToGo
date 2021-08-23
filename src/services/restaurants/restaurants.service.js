import { mocks } from "./mock";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  console.log(mocks[location]);
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

restaurantsRequest()
  .then((r) => {
    console.log(r);
  })
  .catch((e) => {
    console.log(e);
  });
