
function GetBit(m, n) {
  return (m >> n) & 1;
}
function getLunar() {
  var CalendarData = [0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95]
  var madd = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
  var TheDate = new Date();
  var tgString = "甲乙丙丁戊己庚辛壬癸";
  var dzString = "子丑寅卯辰巳午未申酉戌亥";
  var numString = "一二三四五六七八九十";
  var monString = "正二三四五六七八九十冬腊";
  var weekString = "日一二三四五六";
  var sx = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
  var cYear;
  var cMonth;
  var cDay;
  var cHour;
  var cDateString;
  var DateString;
  var totalmnk;
  var isEnd = false;
  var tmp = TheDate.getYear();
  if (tmp < 1900) { tmp += 1900 };
  var total = (tmp - 2001) * 365
    + Math.floor((tmp - 2001) / 4)
    + madd[TheDate.getMonth()]
    + TheDate.getDate()
    - 23;
  if (TheDate.getYear() % 4 == 0 && TheDate.getMonth() > 1)
    total++;
  for (m = 0; ; m++) {
    k = (CalendarData[m] < 0xfff) ? 11 : 12;
    for (n = k; n >= 0; n--) {
      if (total <= 29 + GetBit(CalendarData[m], n)) {
        isEnd = true;
        break;
      }
      total = total - 29 - GetBit(CalendarData[m], n);
    }
    if (isEnd) break;
  }
  cYear = 2001 + m;
  cMonth = k - n + 1;
  cDay = total;
  if (k == 12) {
    if (cMonth == Math.floor(CalendarData[m] / 0x10000) + 1)
      cMonth = 1 - cMonth;
    if (cMonth > Math.floor(CalendarData[m] / 0x10000) + 1)
      cMonth--;
  }
  cHour = Math.floor((TheDate.getHours() + 3) / 2);
  tmp='';
  tmp += tgString.charAt((cYear - 4) % 10);       //年干
  tmp += dzString.charAt((cYear - 4) % 12);       //年支
  tmp += "年(";
  tmp += sx.charAt((cYear - 4) % 12);
  tmp += ")   ";
  if (cMonth < 1) {
    tmp += "闰";
    tmp += monString.charAt(-cMonth - 1);
  }
  else
    tmp += monString.charAt(cMonth - 1);
  tmp += "月";
  tmp += (cDay < 11) ? "初" : ((cDay < 20) ? "十" : ((cDay < 30) ? "廿" : "卅"));
  if (cDay % 10 != 0 || cDay == 10)
    tmp += numString.charAt((cDay - 1) % 10);
  tmp += "    ";
  if (cHour == 13) tmp += "夜";
  tmp += dzString.charAt((cHour - 1) % 12);
  tmp += "时";
  cDateString = tmp;
  return cDateString;
}

module.exports = {
  getLunar: getLunar
}