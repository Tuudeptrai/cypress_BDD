Feature: Verify document API 

  Background:
    Given get tocken

  Scenario: Sort A-Z with DocumentType
    When I send a GET request to "/api/Patients/08ac3076-fdea-724e-5122-349925f7a4db/documents?DocumentSortCriteria=DocumentType&PageSize=10&PageIndex=1&SortOrder=ASC"
    Then the response status code should be 200
    And the response should have a key "data"
    Then the response "documentType" should be sorted in ascending order

  Scenario: Sort Z-A with DocumentType
    When I send a GET request to "/api/Patients/08ac3076-fdea-724e-5122-349925f7a4db/documents?DocumentSortCriteria=DocumentType&PageSize=10&PageIndex=1&SortOrder=DESC"
    Then the response status code should be 200
    And the response should have a key "data"
    And the response "documentType" should be sorted in descending order

  Scenario: Sort A-Z with Id
    When I send a GET request to "/api/Patients/08ac3076-fdea-724e-5122-349925f7a4db/documents?DocumentSortCriteria=Id&PageSize=10&PageIndex=1&SortOrder=ASC"
    Then the response status code should be 200
    And the response should have a key "data"
    Then the response "id" should be sorted in ascending order

  Scenario: Sort Z-A with Id
    When I send a GET request to "/api/Patients/08ac3076-fdea-724e-5122-349925f7a4db/documents?DocumentSortCriteria=Id&PageSize=10&PageIndex=1&SortOrder=DESC"
    Then the response status code should be 200
    And the response should have a key "data"
    And the response "id" should be sorted in descending order

  Scenario: Sort A-Z with DocumentName
    When I send a GET request to "/api/Patients/08ac3076-fdea-724e-5122-349925f7a4db/documents?DocumentSortCriteria=DocumentName&PageSize=10&PageIndex=1&SortOrder=ASC"
    Then the response status code should be 200
    And the response should have a key "data"
    Then the response "documentName" should be sorted in ascending order

  Scenario: Sort Z-A with DocumentName
    When I send a GET request to "/api/Patients/08ac3076-fdea-724e-5122-349925f7a4db/documents?DocumentSortCriteria=DocumentName&PageSize=10&PageIndex=1&SortOrder=DESC"
    Then the response status code should be 200
    And the response should have a key "data"
    And the response "documentName" should be sorted in descending order

  Scenario: Sort A-Z with CreatedDate
    When I send a GET request to "/api/Patients/08ac3076-fdea-724e-5122-349925f7a4db/documents?DocumentSortCriteria=CreatedDate&PageSize=10&PageIndex=1&SortOrder=ASC"
    Then the response status code should be 200
    And the response should have a key "data"
    Then the response "createdDate" should be sorted in ascending order

  Scenario: Sort Z-A with CreatedDate
    When I send a GET request to "/api/Patients/08ac3076-fdea-724e-5122-349925f7a4db/documents?DocumentSortCriteria=CreatedDate&PageSize=10&PageIndex=1&SortOrder=DESC"
    Then the response status code should be 200
    And the response should have a key "data"
    And the response "createdDate" should be sorted in descending order

 Scenario: Search for documents with DocumentType "DriverLicense" and SearchValue "klkldocument"
    When I send a GET request to "/api/Patients/08ac3076-fdea-724e-5122-349925f7a4db/documents?DocumentSortCriteria=DocumentType&DocumentTypes=DriverLicense&PageSize=10&PageIndex=1&SortOrder=ASC&SearchValue=klkldocument"
    Then the response status code should be 200
    And the response should have a key "data"
    And the response "documentName" should contain "klkldocument"