import Captcha from 'captcha-image';

const captchaImage = new Captcha(
  '35px Arial',
  'center',
  'middle',
  200,
  120,
  '#eee',
  '#111',
  6
).createImage();

function createMarkup(source) {
  return { __html: source };
}

export function MyCaptcha() {
  return <div dangerouslySetInnerHTML={createMarkup(captchaImage)} />;
}