import React from 'react';
import News from '../components/Header/News';

const styles = {
  height: '300px',
};
const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>;

export default {
  title: 'News',
  component: News,
  decorators: [CenterDecorator],
  parameters: {
    componentSubtitle: 'Hover to see the news',
  },
};

export const news = () => <News />;
