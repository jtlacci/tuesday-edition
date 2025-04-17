interface WriteSectionProps {
  edition: string;
}

export default function WriteSection({ edition }: WriteSectionProps) {
  return (
    <div className="border border-blue-300 p-5 rounded-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">${`WRITE-${edition}ED`}</h2>
      <div className="h-48 border-2 border-blue-200 rounded-md"></div>
      <div className="mt-4 flex justify-end">
        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
          <span className="text-blue-600 font-semibold">Vote</span>
        </div>
      </div>
    </div>
  );
}