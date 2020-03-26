const items = [];
const hideCheckedItems = false;

function findById(id) {
  return this.items.find(item => item.id === id);
}
const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};


function addItem(item) {
  this.items.push(item);
}

function findAndUpdate(id, newData) {
  const item = this.findById(id);
  Object.assign(item, newData);
}


export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndUpdate,
  findAndDelete,
};
