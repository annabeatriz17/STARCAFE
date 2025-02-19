class MenuList {
    constructor() {
        this.menu = [];
    }
    addMenu(menu) {
        this.menu.push(menu);
    }
    getAllMenu() {
        return this.menu;
    }
}

module.exports = MenuList;