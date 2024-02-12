import type { Query } from "@tanstack/query-core";
export declare function getQueryStatusColor({ queryState, observerCount, isStale, }: {
    queryState: Query["state"];
    observerCount: number;
    isStale: boolean;
}): "blue" | "gray" | "purple" | "yellow" | "green";
