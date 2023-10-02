import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51NvymwSFYJVvVUURie802iA3Nhl8KBhpimFvOTamFIXPiw0B3ReM6G2ypkX33vsbjQvkRIPZOVEWorrrdFfkeIJm00q4hVjOqU');
  }
  return stripePromise;
};

export default getStripe;