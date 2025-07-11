'use client';
interface ContentCardProps {
  title: string;
  image: string;
  description: string;
  actionLabel: string;
  onClick: () => void;
}

const ContentCard = ({
  title,
  image,
  description,
  actionLabel,
  onClick,
}: ContentCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800 transition-all hover:scale-[1.02]">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-black dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
        <button
          onClick={onClick}
          className="mt-4 px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
};

export default ContentCard;
