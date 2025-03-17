import DataLoader from "dataloader";
import User from "../../types/user";

export const userLoader = new DataLoader(async (ids: readonly string[]) => {
  const numericIds = ids.map(id => parseInt(id, 10)); 

  const users = await User.findAll({
    where: { id: numericIds },
  });

  const userMap = new Map(users.map(user => [user.id, user]));
  return numericIds.map(id => userMap.get(id)); 
});
