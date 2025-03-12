export const updateArray = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === item.id) {
      arr[i] = item;
      break;
    }
  }
  return arr;
};

export const uniqueID = () => {
  return Date.now().toString(36) + Math.random().toString(36);
};

export const countNestedChildren = (item) => {
  if (!item.children || item.children.length === 0) {
    return 0; // No children to count
  }

  // Recursively count nested children
  return item.children.reduce((count, child) => {
    return count + 1 + countNestedChildren(child); // Count the child and its nested children
  }, 0);
};

function findItemWithParent(items, targetId, parent = null) {
  for (const item of items) {
    if (item.id === targetId) {
      return { item, parent };
    }
    if (item.children) {
      const result = findItemWithParent(item.children, targetId, item);
      if (result) return result;
    }
  }
  return null;
}

export function formatDate(date) {
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);

  return formattedDate;
}
export const parseDate = (dateString) => {
  if (!dateString) return new Date(); // Default to today if empty

  const [day, month, year] = dateString.split("/").map(Number);
  return new Date(year, month - 1, day); // Month is 0-based
};
