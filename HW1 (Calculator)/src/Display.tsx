const Display = ({ display }: { display: string }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-4 text-right text-xl font-medium">
      {display}
    </div>
  );
};

export default Display;
