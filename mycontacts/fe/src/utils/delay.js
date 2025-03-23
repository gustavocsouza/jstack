export default function delay(ms = 1000) {
  return new Promise((reselve) => {
    setTimeout(() => { reselve(); }, ms);
  });
}
