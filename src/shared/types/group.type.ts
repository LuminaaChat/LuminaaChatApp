export type Group = {
  _id: string;
  __v: number;
  name: string;
  description: string;
  color: string;
  icon: string;
  division: string;
  owners: string[];
  members: string[];
  channels: string[];
  minRole: string;
  visible: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
