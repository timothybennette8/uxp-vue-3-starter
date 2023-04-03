/**
 * Logs duration of process
 * @param {String} label "<label> took xx:xx seconds"
 * @param {function} process the function to be timed
 * @returns null
 */
export const timeThis = async (label, process) => {
  const timeNow = () => {
    return new Date().getTime();
  };

  const msToTime = (duration) => {
    var milliseconds = Math.floor(parseInt(duration % 1000) / 10),
      seconds = parseInt((duration / 1000) % 60),
      minutes = parseInt((duration / (1000 * 60)) % 60),
      hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    if (hours > 0) return `${hours}:${minutes} hours/minutes`;
    if (!hours && minutes > 0) return `${minutes}:${seconds} minutes/seconds`;
    if (!minutes && seconds > 0) return `${seconds}.${milliseconds} seconds`;

    return `0.${milliseconds} seconds`;
  };

  const start = timeNow();

  process();

  const end = timeNow();

  console.log(`${label} took ${msToTime(end - start)}`);
};

/**
 * Reloads plugin
 */
export const reloadPlugin = async () => {
  window.location.reload();
};
