const levelSupport = (user) => {
    const currentTime = new Date();
    const currentTimeUnix = Math.floor(currentTime.getTime() / 1000);

    const registerTime = new Date(user.registerDate);
    const registerTimeUnix = Math.floor(registerTime.getTime() / 1000);

    const totalTime = Math.max(currentTimeUnix - registerTimeUnix, 2419200);

    const totalDonat = user.donats.reduce(
      (total, donat) => {
      return total = total + donat.amount;
      }, 0);

    return ((totalDonat / 40) * (2419200 / totalTime)).toFixed(2);
  };

  const currentCount = (user) => {
    const currentTime = new Date();
    const currentTimeUnix = Math.floor(currentTime.getTime() / 1000);

    const currentDonat = user.donats.reduce(
      (current, donat) => {
        return currentTimeUnix - donat.end_time <= 2419200 
          ? current = current + donat.amount
          : current;
      }, 0);

    return currentDonat / 40;
  };

  const totalCount = (user) => {
    const currentTime = new Date();
    const currentTimeUnix = Math.floor(currentTime.getTime() / 1000);

    const totalDonat = user.donats.reduce(
      (total, donat) => {
        return currentTimeUnix - donat.end_time > 2419200 
          ? total = total + donat.amount
          : total;
      }, 0);

    return totalDonat / 40;
  };

  const indicators = {
    levelSupport,
    currentCount,
    totalCount,
  };

  export default indicators;