export type StatusType = {
  id: string;
  label: string;
  value: string;
};

const Status: Record<string, StatusType> = {
  pending: {
    id: "0",
    label: "Pending",
    value: "Pedining",
  },
  onGoing: {
    id: "1",
    label: "On Going",
    value: "OnGoing",
  },
  complete: {
    id: "2",
    label: "Complete",
    value: "Complete",
  },
};

export default Status;
