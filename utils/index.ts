const BASE_URL = 'https://wine-back-test.herokuapp.com/products';

const pathResolver = (page, name, filter): string => (
  name ? `?page=${page}&name=${name}&filter=${filter}&limit=9`
    : `?page=${page}&filter=${filter}&limit=9`
);

const handleCartProduct = (product, quantity = 1): void => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const productExists = cart.find((p) => p.id === product.id);

  if (!productExists) cart.push({ ...product, quantity });

  let updatedCart = cart.map((p) => ((p.id === product.id) ? { ...product, quantity } : p));

  updatedCart = updatedCart.filter((p) => p.quantity > 0);

  localStorage.setItem('cart', JSON.stringify(updatedCart));
};

export { BASE_URL, pathResolver, handleCartProduct };
