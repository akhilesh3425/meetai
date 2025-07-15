import {
  CircleXIcon,
  CircleCheckIcon,
  LoaderIcon,
  VideoIcon,
} from "lucide-react";
import { CommandSelect } from "@/components/command-select";
import { useMeetingsFilters } from "../../hooks/use-meetings-filter";
import { MeetingStatus } from "../../types";

const options = [
  {
    id: MeetingStatus.Upcoming,
    value: MeetingStatus.Upcoming,
    Children: (
      <div className="flex items-center gap-x-2 capitalize">
        <CircleXIcon />
        {MeetingStatus.Upcoming}
      </div>
    ),
  },

  {
    id: MeetingStatus.Completed,
    value: MeetingStatus.Completed,
    Children: (
      <div className="flex items-center gap-x-2 capitalize">
        <CircleCheckIcon />
        {MeetingStatus.Completed}
      </div>
    ),
  },

  {
    id: MeetingStatus.Active,
    value: MeetingStatus.Active,
    Children: (
      <div className="flex items-center gap-x-2 capitalize">
        <VideoIcon />
        {MeetingStatus.Active}
      </div>
    ),
  },

  {
    id: MeetingStatus.Processing,
    value: MeetingStatus.Processing,
    Children: (
      <div className="flex items-center gap-x-2 capitalize">
        <LoaderIcon />
        {MeetingStatus.Processing}
      </div>
    ),
  },

  {
    id: MeetingStatus.Cancelled,
    value: MeetingStatus.Cancelled,
    Children: (
      <div className="flex items-center gap-x-2 capitalize">
        <CircleXIcon />
        {MeetingStatus.Cancelled}
      </div>
    ),
  },
];

export const MeetingsStatusFilter = () => {
  const [filter, setFilters] = useMeetingsFilters();
  return (
    <CommandSelect
      placeholder="Status"
      className="h-9"
      options={options}
      onSelect={(value) => setFilters({ status: value as MeetingStatus })}
      value={filter.status ?? ""}
    />
  );
};
