import * as uuid from "uuid";
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const data =JSON.parse(event.body);
    const params = {
        TableName: process.env.tableName,
        Item: {
            // attributes of the review item a reviewer creates
            ReviewerId: event.requestContext.identity.cognitoIdentityId,  // The id of the reviewer
            ReviewId: uuid.v1(), // A unique uuid
            UiId: data.UiId, // Id of the UI reviewed by the user
            webcamVideo: data.webcamVideo, // Parsed from request body
            screenVideo: data.screenVideo, // Parsed from request body
            textReview: data.textReview, //parsed from request body
            createdAt: Date.now(), // Current Unix timestamp
        },
    };
    await dynamoDb.put(params);

    return params.Item;
});