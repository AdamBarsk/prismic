import React from 'react';
import { Text, Image } from '../../components';

export const BlogPost = ({ data: { data } }) => {
  console.log(data);
  const renderBody = () => (
    <>
      {data.body.map(slice => {
        switch (slice.slice_type) {
          case 'text':
            return <Text text={slice.primary.text} key={slice.primary.slice_type} />;
          case 'quote':
            return <Text text={slice.primary.quote} key={slice.primary.slice_type} />;
          case 'image':
            return <Image data={slice.primary} key={slice.primary.slice_type} />;

          default:
            break;
        }
      })}
    </>
  );

  return (
    <div>
      <Text text={data.title} />
      <p>{data.release_date}</p>
      {renderBody()}
    </div>
  );
};
