  export const fakeRequest = async () => {
    await new Promise((res, rej) => {
      setTimeout(1000);
      res("ok");
    });
  };