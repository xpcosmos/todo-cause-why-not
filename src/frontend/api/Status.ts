interface IStatus{
  pending:StatusType,
  onGoing:StatusType,
  complete:StatusType
}

export type StatusType = {
  id: string;
  label: string;
  value: string;
};

const Status: IStatus = {
  pending: {
    id: "0",
    label: "Pending",
    value: "Pending",
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
