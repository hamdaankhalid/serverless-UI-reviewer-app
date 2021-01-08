# User Interface Review

## Idea:
Companies pay to upload their UI mocks and see how long users take to complete given tasks

## Authentication and Authorization:
* AWS COGNITO user pools

## Databse:
* DynamoDB

## Companies:
* Pay by storage of mocks (STRIPE)
* Upload (Create) mocks 
* Delete
* Update ????
* Read
* Read/ID

## UI Schema:
* CompanyId
* UiId
* Task/Notes
* Attachment
* Link

## Reviewers:
* Create Review
* Cannot Update A Review but I guess still make one but not expose those endpoints in front end
* Read all their reviews
* Read/ID of a review

## Review Schema:
* ReviewId
* UiId
* WebCam Video Object
* Screen Recorded Video
* text-review
