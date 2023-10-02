Feature: Search diagnosis and procedure code API

    Background:
        Given get tocken

    Scenario: Search procedure code by code
        When I send a GET request to "/api/Cpt?SearchValue=F1233&PageSize=10&PageIndex=1&SortOrder=DESC"
        Then the response status code should be 200
        And the response should have nested key "data.cpTs[0].code"

    Scenario: Search procedure code by description
        When I send a GET request to "/api/Cpt?SearchValue=Procedure%20Code&PageSize=10&PageIndex=1&SortOrder=ASC"
        Then the response status code should be 200
        And the response should have nested key "data.cpTs[0].description"

    Scenario: Search diagnosis code by code
        When I send a GET request to "/api/ICD?SearchValue=L89154&PageSize=10&PageIndex=1&SortOrder=ASC"
        Then the response status code should be 200
        And the response should have nested key "data.icDs[0].code"

    Scenario: Search diagnosis code by description
        When I send a GET request to "/api/ICD?SearchValue=ICD%20Code&PageSize=10&PageIndex=1&SortOrder=DESC"
        Then the response status code should be 200
        And the response should have nested key "data.icDs[0].description"

