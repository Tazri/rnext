export default function taskReducer(draftTasks, action) {
  switch (action.type) {
    case "added": {
      draftTasks.push({
        id: action.id,
        text: action.text,
      });

      break;
    }
    case "changed": {
      const index = draftTasks.findIndex((task) => task.id === action.task.id);

      draftTasks[index] = action.task;
      break;
    }
    case "deleted": {
      return draftTasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw new Error(`There is a no action about ${action}`);
    }
  }
}
