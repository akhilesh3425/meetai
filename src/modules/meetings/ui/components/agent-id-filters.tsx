import { useState } from "react";
import { useTRPC } from "@/trpc/client";
import { useMeetingsFilters } from "../../hooks/use-meetings-filter";
import { useQuery } from "@tanstack/react-query";

import { CommandSelect } from "@/components/command-select";
import { GeneratedAvatar } from "@/components/generated-avatar";

export const AgentIdFilters = () => {
  const [filter, setFilters] = useMeetingsFilters();

  const trpc = useTRPC();

  const [agentSearch, setAgentSearch] = useState("");

  const { data } = useQuery(
    trpc.agents.getMany.queryOptions({
      pageSize: 100,
      search: agentSearch,
    })
  );

  return (
    <CommandSelect
      className="h-9"
      placeholder="Agent"
      options={(data?.items ?? []).map((agent) => ({
        id: agent.id,
        value: agent.id,
        children: (
          <div className="flex items-center gap-x-2 capitalize">
            <GeneratedAvatar
              seed={agent.name}
              variant="botttsNeutral"
              className="size-5"
            />
            {agent.name}
          </div>
        ),
      }))}
      onSelect={(value) => setFilters({ agentId: value })}
      onSearch={setAgentSearch}
      value={filter.agentId ?? ""}
    />
  );
};
