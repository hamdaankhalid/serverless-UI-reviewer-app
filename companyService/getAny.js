import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    Select: "ALL_ATTRIBUTES",
    FilterExpression:'UiId=:UiId',
    ExpressionAttributeValues: {
      ':UiId': event.pathParameters.id,
    }
  };

  const result = await dynamoDb.scan(params);
  if (!result.Items) {
    throw new Error("Item not found.");
  }

  // Return the retrieved item
  return result.Items;
});