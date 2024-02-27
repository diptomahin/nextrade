import dynamic from 'next/dynamic';

const GoogleTranslate = dynamic(() => import('./GoogleTranslate'), {
  ssr: false,
});

const Home = () => {
  return (
    <div>
      <GoogleTranslate />
    </div>
  );
};

export default Home;