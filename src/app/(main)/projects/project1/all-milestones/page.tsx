import SchedulerWrapper from "@/components/schedule/_components/view/schedular-view-filteration";
import { SchedulerProvider } from "@/providers/scheduler-provider";

export default function AllMilestones() {
  return (
    <div className="w-full p-4">
      <SchedulerProvider weekStartsOn="monday">
        <SchedulerWrapper
          stopDayEventSummary={true}
          classNames={{
            tabs: {
              panel: "p-0",
            },
          }}
        />
      </SchedulerProvider>
    </div>
  );
}
