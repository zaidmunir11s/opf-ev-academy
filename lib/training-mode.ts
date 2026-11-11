export type TrainingMode = "online" | "on-campus";

export function parseTrainingMode(value?: string | null): TrainingMode | "" {
  if (value === "online" || value === "on-campus") return value;
  return "";
}

export function trainingModeLabel(mode: TrainingMode | ""): string {
  if (mode === "online") return "Online";
  if (mode === "on-campus") return "On-Campus";
  return "";
}
