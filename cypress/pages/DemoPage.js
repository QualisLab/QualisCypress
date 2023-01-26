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
            cy.setFirstNameProduct(fistNameProduct)
        });
    }

    lastProductName() {
        this.sizeList()
        cy.getSizeList().then((size) => {
            this.elements.lastProductName(size).invoke('text').then((secondNameProduct) => {
                cy.setLastNameProduct(secondNameProduct)
            })
        })
    }

    title() {
        this.elements.title().should('exist');
    }

    select_selectOrder(order) {
        this.elements.selectOrder().select(order);
    }

    sizeList() {
        this.elements.sizeListProduct().its('length').then((length) => {
            cy.setSizeList(length)
        });
    }

    validate_firstProductName() {
        this.elements.firstProductName().invoke('text').then((fistNameProduct) => {            
            cy.getLastNameProduct().then((getLastNameProduct) => {
                expect(fistNameProduct).to.eq(getLastNameProduct)
            })
        });
    }

    validate_lastProductName() {

        cy.getSizeList().then((size) => {
            this.elements.lastProductName(size).invoke('text').then((secondNameProduct) => {
                cy.getFirstNameProduct().then((getFirstNameProduct) => {
                    expect(secondNameProduct).to.eq(getFirstNameProduct)
                });
            });
        });
    }
        
}

module.exports = new DemoPage();


