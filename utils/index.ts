const BASE_URL = 'https://wine-back-test.herokuapp.com/products';

const pathResolver = (page, name, filter): string => (
  name ? `?page=${page}&name=${name}&filter=${filter}&limit=9`
    : `?page=${page}&filter=${filter}&limit=9`
);

export { BASE_URL, pathResolver };
