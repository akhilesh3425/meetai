import { EmptyState } from "@/components/empty-state";

export const ProcessingState = () => {
  return (
    <div className="bg-white roudned-lg shadow p-6 flex flex-col items-center justify-center">
      <EmptyState
        image="/processing.svg"
        title="Meeting is Completed"
        description="This meeting was completed,a summary will appear soon"
      />
    </div>
  );
};
