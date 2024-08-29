import { useCallback } from 'react';
import { TagCount } from '../../utility';

export interface TagCloudProps extends React.PropsWithChildren {
  tags: TagCount[];
}

const randomColor = (a: number) => {
  const getRandomValue = (max: number) => Math.floor(Math.random() * max);
  const r = getRandomValue(256);
  const g = getRandomValue(256);
  const b = getRandomValue(256);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const MIN_FONT_SIZE = 12 as const;
const MIN_TRANSPARENCY = 25 as const;
const OFFSET_RANGE = 30; // Define the offset range

export const TagCloud: React.FC<TagCloudProps> = ({ tags }) => {
  const renderTags = useCallback(
    (tag: TagCount, index: number) => {
      // Calculate font size based on count
      const fontSize = `${tag.count * MIN_FONT_SIZE}px`;
      const transparency = (tag.count * MIN_TRANSPARENCY) / 100;
      const { x, y } = getTagPosition(index, tag.count, tags.length);
      return (
        <span
          key={tag.tag}
          className="absolute rounded-full px-3 py-1 font-semibold cursor-default"
          style={{
            fontSize,
            top: `${y}%`,
            left: `${x}%`,
            color: randomColor(transparency),
            transform: 'translate(-50%, -50%)',
            zIndex: tags.length - index,
          }}
        >
          {tag.tag}
        </span>
      );
    },
    [tags.length]
  );

  const getTagPosition = (index: number, count: number, totalTags: number) => {
    const radius = 1 + count * 5;
    const angle = (index / totalTags) * 2 * Math.PI;
    const randomOffsetX = Math.random() * 2 * OFFSET_RANGE - OFFSET_RANGE;
    const randomOffsetY = Math.random() * 2 * OFFSET_RANGE - OFFSET_RANGE;
    let x = 50 + radius * Math.cos(angle) + randomOffsetX;
    let y = 50 + radius * Math.sin(angle) + randomOffsetY;
    if (index === 0) y = x = 50;
    return { x, y };
  };

  return <div className="relative h-96 w-full">{tags?.map(renderTags)}</div>;
};
