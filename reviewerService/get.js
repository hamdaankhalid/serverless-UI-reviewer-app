import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const params = {
        TableName: process.env.tableName,
        Key: {
            ReviewerId: event.requestContext.identity.cognitoIdentityId,  // The id of the author
            ReviewId: event.pathParameters.id, // The id of the note from the path
          },
    };

    const result = await dynamoDb.get(params);
    if (!result.Item) {
        throw new Error("Item not found.");
    }

    // Return the retrieved item
    return result.Item;

});