export const isServer = () => typeof window === "undefined";
export const limitWords = (words) =>
  words && words.length > 95 ? words.slice(0, 95) + "..." : words;
