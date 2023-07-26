interface Props {
  title: string;
  description?: string;
}

function Heading({ title, description }: Props) {
  return (
    <div className="flex flex-col items-center m-auto">
      <div className="font-semibold text-xl text-black mb-2">{title}</div>
      {description && (
        <div className="text-sm text-gray-400 mb-3">{description}</div>
      )}
    </div>
  );
}

export default Heading;
