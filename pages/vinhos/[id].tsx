import { useRouter } from 'next/router';

const Wine = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Wine: {id}</p>;
};

export default Wine;
