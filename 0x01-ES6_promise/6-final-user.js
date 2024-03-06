import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup (firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(), uploadPhoto()])
    .then((resp) => {
      resp.map((o) => ({
        status: o.status,
        value: o.status === 'fulfilled' ? o.value : String(o.reason)
      }));
    });
}
