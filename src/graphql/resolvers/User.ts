import { User, Task } from "../../db/models";

const resolvers = {
  tasks: (user: User) => {
    return Task.findAll({
      include: [
        {
          model: User,
          where: { id: user.id }
        }
      ],
      order: [["name", "ASC"]]
    });
  }
};

export default resolvers;
