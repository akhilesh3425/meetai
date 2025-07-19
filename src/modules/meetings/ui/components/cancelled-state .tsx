import { EmptyState } from "@/components/empty-state";

export const CancelledState = () => {
  return (
    <div className="bg-white roudned-lg shadow p-6 flex flex-col items-center justify-center">
      <EmptyState
        image="/cancelled.svg"
        title="Meeting is Cancelled"
        description="This meeting was cancelled"
      />
    </div>
  );
};
