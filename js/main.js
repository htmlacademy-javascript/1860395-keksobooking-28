const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const author = {
  avatar: `img/avatars/user${getRandomInteger(1, 10)}.png`
};

const title = [
  'Только сегодня',
  'Твоя бабушка выбрала',
  'У нас нет крокодилов в подвале',
  'Шикарный особняк в духе Урюпинска'
];

const type = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const time = [
  '12:00',
  '13:00',
  '14:00'
];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const description = [
  'здесь ни разу не умерла ничья бабушка',
  'здесь нет крокодилов в подвале, но, если очень хочется, можно их встретить в ванной',
  'Убираем дважды в сутки раз в неделю',
  'Роскошный вид на аэропорт'
];

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const lat = getRandomInteger(35.65000, 35.70000);
const lng = getRandomInteger(139.70000, 139.80000);

const address = lat + ', ' + lng;

const offer = {
  title: title[getRandomInteger(0, title.length - 1)],
  location: address,
  price: getRandomInteger(10000, 100000),
  type: type[getRandomInteger(0, type.length - 1)],
  rooms: getRandomInteger(1, 6),
  guests: getRandomInteger(1, 18),
  checkin: time[getRandomInteger(0, time.length - 1)],
  checkout: time[getRandomInteger(0, time.length - 1)],
  features: '',
  description: description[getRandomInteger(0, description.length - 1)],
  photos: ''
};

console.log(offer);

const price = getRandomInteger(100, 1000000);

const createAd = () => {
  return {
    autor: author,
    offer: offer,
    location: address
  };
};

const createAds = () => {

}
