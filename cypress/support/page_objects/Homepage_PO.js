/// <reference types="cypress"/>

import Base_PO from "./Base_PO";

class Homepage_PO extends Base_PO{

    navigateToHomePage(path){
        super.navigate(path);
    }
    navigateLogInPage(path){
        super.navigate(path);
    }
    
}
export default Homepage_PO;