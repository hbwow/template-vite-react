import { useDemoQuery } from '@/services/demo';
import { Button } from 'antd';

const Home = () => {
  const {} = useDemoQuery();

  return (
    <div className='text-3xl font-bold underline'>
      <div>Home</div>
      <Button type='primary'>click</Button>
    </div>
  );
};

export default Home;
