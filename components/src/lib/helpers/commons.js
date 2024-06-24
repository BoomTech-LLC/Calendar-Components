import moment from "moment-timezone";

export const isDefined = (value) => value != null;

export function combineClassNames(classNames) {
  if (!classNames || classNames.length === 0) return "";
  return classNames.join(" ") ?? "";
}

export const encodeId = (str) => {
  const id = str.split("");
  let i;
  for (i = 0; i < id.length; i++) {
    switch (id[i]) {
      case "1":
        id[i] = "H9";
        break;
      case "2":
        id[i] = "A8";
        break;
      case "3":
        id[i] = "J7";
        break;
      case "4":
        id[i] = "M6";
        break;
      case "5":
        id[i] = "R5";
        break;
      case "6":
        id[i] = "O4";
        break;
      case "7":
        id[i] = "L3";
        break;
      case "8":
        id[i] = "W2";
        break;
      case "9":
        id[i] = "U1";
        break;
      case "0":
        id[i] = "K0";
        break;
      default:
    }
  }
  const l = id.length;
  const chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (i = 0; i < l * 2 + 2; i = i + Math.ceil(Math.random() * 3)) {
    id.splice(i, 0, chars[Math.ceil(Math.random() * 26)]);
  }
  return id.join("");
};

export const isObjectEmpty = (obj) =>
  !Object.values(obj).some((x) => x !== null && x !== "");

export const stopPropagation = (e) => e.stopPropagation();

export function parseJson(obj) {
  try {
    JSON.parse(obj);
  } catch (e) {
    return obj;
  }
  return JSON.parse(obj);
}

export const isUrl = (url) => {
  return /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
    url
  );
};

export const validateUrl = (url) => {
  if (url.startsWith("http") || url.startsWith("https")) {
    return url;
  }
  return "https://" + url;
};

export const guessOffset = (timezone) => {
  if (timezone.includes("GMT")) return timezone;

  const currentOffsetMinutes = moment.tz(timezone).utcOffset();
  const offsetHours = Math.floor(Math.abs(currentOffsetMinutes) / 60);
  const gmtOffsetString = `GMT${
    currentOffsetMinutes >= 0 ? "+" : "-"
  }${offsetHours}`;

  return gmtOffsetString;
};

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
