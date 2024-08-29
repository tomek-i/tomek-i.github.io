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
  return (
    <div className="relative h-96 w-full">
      {tags?.map((tag, index) => {
        // Calculate font size based on count
        const fontSize = `${tag.count * MIN_FONT_SIZE}px`;
        const transparency = (tag.count * MIN_TRANSPARENCY) / 100;
        const radius = 1 + tag.count * 5;
        const angle = (index / tags.length) * 2 * Math.PI;
        const randomOffsetX = Math.random() * 2 * OFFSET_RANGE - OFFSET_RANGE; // Random offset between -offsetRange and +offsetRange
        const randomOffsetY = Math.random() * 2 * OFFSET_RANGE - OFFSET_RANGE; // Random offset between -offsetRange and +offsetRange
        let x = 50 + radius * Math.cos(angle) + randomOffsetX;
        let y = 50 + radius * Math.sin(angle) + randomOffsetY;

        if (index === 0) y = x = 50;

        return (
          <span
            key={tag.tag}
            className="absolute rounded-full px-3 py-1 font-semibold text-gray-700"
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
      })}
    </div>
  );
};
