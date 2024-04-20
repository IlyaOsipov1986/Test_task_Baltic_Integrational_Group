export const reqContacts = (count) => {
  return new Promise(function (resolve, reject) {
    fetch(`https://randomuser.me/api/?results=${count}`, {
      method: "GET",
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            resolve(data);
          });
        } else {
          response.json().then((data) => {
            reject(data);
          });
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
