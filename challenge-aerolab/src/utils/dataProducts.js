const option = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDY0ZWI0NGQ2ZTU4NDAwMWE4NTZhZWYiLCJpYXQiOjE2ODQzMzU0Mjh9.zq0NiLBTQWG7D9foayDwXEMGgd96-XZgksbV_FmORq0`,
  },
};

const url = 'https://coding-challenge-api.aerolab.co/products';

export default async function getData() {
  const res = await fetch(url, option);
  return res.json();
}
