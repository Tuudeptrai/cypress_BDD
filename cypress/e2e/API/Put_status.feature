Feature: PUT status API
    Background: Get tocken
        Given get tocken

    Scenario Outline: Verify PUT status with correct docid

        When PUT the corect "<docid>" with body "<status>"
        Then the response should have status <code>

        Examples:
            | docid                | status         | code |
            | l8pH1GMhrmKxbFpQxqxU | BillingPending | 200  |
            | l8pH1GMhrmKxbFpQxqxU | BillingPending | 400  |
            | l8pH1GMhrmKxbFpQxqUU | NotArrived     | 400  |
            | l8pH1GMhrmKxbFpQxqxU | NotArrived     | 200  |
            | l8pH1GMhrmKxbFpQxqxU | waiting        | 400  |