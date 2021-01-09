import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";


export const main = handler(async (event, context) => {
    const params = {
        TableName: process.env.tableName,
        KeyConditionExpression: "ReviewerId = :ReviewerId",
        ExpressionAttributeValues: {
            ":ReviewerId": event.requestContext.identity.cognitoIdentityId,
        },
    };
     const result = await dynamoDb.query(params);

     return result.Items;
});