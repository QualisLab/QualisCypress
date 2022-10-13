class DemoPage {
    elements = {
        firstProductName: () => cy.get("#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label > a > div"),
        lastProductName: (lastProduct) => cy.get("#inventory_container > div > div:nth-child(" + lastProduct + ") > div.inventory_item_description > div.inventory_item_label > a > div"),
        sizeListProduct: () => cy.get("#inventory_container > div.inventory_list > div"),
        selectOrder: () => cy.get('select.product_sort_container'),
        title: () => cy.get("span.title")
    };

    firstProductName() {
        this.elements.firstProductName().invoke('text').then((fistNameProduct) => {
            cy.log(fistNameProduct)
            cy.task('setFirstNameProduct', fistNameProduct)
            cy.task('getFirstNameProduct').then((getFirstNameProduct) => {
                cy.log(getFirstNameProduct)
            })
        });
    }

    lastProductName() {
        cy.task('getSizeList').then((size) => {
            this.elements.lastProductName(size).invoke('text').then((secondNameProduct) => {
                cy.log(secondNameProduct)
                cy.task('setSecondNameProduct', secondNameProduct)
                cy.task('getSecondNameProduct').then((getSecondNameProduct) => {
                    cy.log(getSecondNameProduct)
                })
            })
        })
    }

    title() {
        this.elements.title().should('exist');
    }

    selectOrder() {
        return this.elements.selectOrder();
    }

    sizeList() {
        this.elements.sizeListProduct().its('length').then((length) => {
            cy.task('setSizeList', length)
            cy.task('getSizeList').then((getSizeList) => {
            cy.log(getSizeList)
            })
        });
    }
}

module.exports = new DemoPage();


