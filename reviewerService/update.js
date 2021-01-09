import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.tableName,
        Key:{
            ReviewerId: event.requestContext.identity.cognitoIdentityId,
            ReviewId: event.pathParameters.id,
        },
        UpdateExpression: "Set textReview = :textReview",
        ExpressionAttributeValues: {
            ":textReview": data.textReview || null, // Parsed from request body
        },
        ReturnValues: "ALL_NEW",
    };

    await dynamoDb.update(params);

    return { status: true };
});