import { Task } from "../../../db/models";

const createTaskResolver = (
  context: any,
  { userId, name }: { userId: string; name: string }
) => {
  return Task.create({ userId, name });
};

export default createTaskResolver;
