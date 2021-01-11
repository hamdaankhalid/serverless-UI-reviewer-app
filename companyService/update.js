import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.tableName,
        Key:{
            ComapnyId: event.requestContext.identity.cognitoIdentityId,
            UiId: event.pathParameters.id,
        },
        UpdateExpression: "Set task = :task, link = :link, attachment= :attachment",
        ExpressionAttributeValues: {
            ":task": data.task || null, // Parsed from request body
            ":attachment": data.attachment || null, // Parsed from request body
            ":link": data.link || null, //parsed from request body
        },
        ReturnValues: "ALL_NEW",
    };

    await dynamoDb.update(params);

    return { status: true };
});
