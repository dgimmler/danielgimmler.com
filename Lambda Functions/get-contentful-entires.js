const contentful = require('contentful');

const CONFIG = {
  space: '<space id>',
  accessToken: '<access token>'
}

const client = contentful.createClient({
  space: CONFIG.space,
  accessToken: CONFIG.accessToken
})

exports.handler = async (event) => {
  var responseBody = { "Reason" : "Content type not valid" };

  try{
    // return different content types if type query param provided
    var contentType = event.queryStringParameters.type.toString().toLowerCase();

    // ABOUT ME
    if(contentType === "aboutme"){
      return client.getEntries(Object.assign({
          content_type: 'aboutMe'
      }))
        .then((res) => {
          responseBody = res.items[0].fields;

          return {
            "statusCode": 200,
            "headers": {
              "Access-Control-Allow-Origin": "*"
            },
            "body": JSON.stringify(responseBody)
          }
        });
    }

    // SOCIAL MEDIA LINK
    if(contentType === "socialmedialink"){
      return client.getEntries(Object.assign({
          content_type: 'socialMediaLink'
      }))
        .then((res) => {
          responseBody = res.items;

          return {
            "statusCode": 200,
            "headers": {
              "Access-Control-Allow-Origin": "*"
            },
            "body": JSON.stringify(responseBody)
          }
        });
    }

    // COPYRIGHT
    if(contentType === "copyright"){
      return client.getEntries(Object.assign({
          content_type: 'copyright'
      }))
        .then((res) => {
          responseBody = res.items[0].fields;

          return {
            "statusCode": 200,
            "headers": {
              "Access-Control-Allow-Origin": "*"
            },
            "body": JSON.stringify(responseBody)
          }
        });
    }

    // RESUME ITEM
    if(contentType === "resumeitem"){
      return client.getEntries(Object.assign({
          content_type: 'resumeItem'
      }, { "order" : "fields.order" }))
        .then((res) => {
          responseBody = res.items;

          return {
            "statusCode": 200,
            "headers": {
              "Access-Control-Allow-Origin": "*"
            },
            "body": JSON.stringify(responseBody)
          }
        });
    }

    // PROJECT
    if(contentType === "project"){
      return client.getEntries(Object.assign({
          content_type: 'project'
      }, { "order" : "fields.order" }))
        .then((res) => {
          responseBody = res.items;

          return {
            "statusCode": 200,
            "headers": {
              "Access-Control-Allow-Origin": "*"
            },
            "body": JSON.stringify(responseBody)
          }
        });
    }
  } catch(err){
    try{
      // return all entries if no query param provided
      return client.getEntries()
        .then((res) => {
          responseBody = res.items;

          return {
            "statusCode": 200,
            "headers": {
              "Access-Control-Allow-Origin": "*"
            },
            "body": JSON.stringify(responseBody)
          }
        });
    } catch(e){
      // error
      responseBody = { "Reason" : e };

      return {
        "statusCode": 500,
        "headers": {
          "Access-Control-Allow-Origin": "*"
        },
        "body": JSON.stringify(responseBody)
      };
    }
  }
};
