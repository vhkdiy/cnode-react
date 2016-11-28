export default function lastReplyTime(time) {
  let lasttime = new Date(time);
  const between = (Date.now() - Number(lasttime)) / 1000;
  if (between < 3600) {
    return `${~~(between / 60)} 分钟前`
  } else if (between < 86400) {
    return `${~~(between / 3600)} 小时前`
  } else {
    return `${~~(between / 86400)} 天前`
  }
}