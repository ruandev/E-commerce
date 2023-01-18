import * as aws from "aws-sdk";

const endpoint = new aws.Endpoint("s3.us-west-004.backblazeb2.com");
const s3 = new aws.S3({
  endpoint,
  credentials: {
    accessKeyId: "004ef47996b412c0000000004",
    secretAccessKey: "K004Ma2OZ93ByGTb2TTZpwvcVXX/nR4",
  },
});

export const uploadFile = async (
  path: string,
  buffer: any,
  mimetype: string
) => {
  const file = await s3
    .upload({
      Bucket: "MarketPlacePortfolio",
      Key: path,
      Body: buffer,
      ContentType: mimetype,
    })
    .promise();

  return {
    url: file.Location,
    path: file.Key,
  };
};

// export const listFiles = async () => {
//   const file = await s3
//     .listObjects({
//       Bucket: process.env.BACKBLAZE_BUCKET,
//     })
//     .promise();

//   const files = .Contents.map((file) => {
//     return {
//       url: `https://${process.env.BACKBLAZE_BUCKET}.${process.env.BUCKET_ENDPOINT_S3}/${file.Key}`,
//       path: file.Key,
//     };
//   });

//   return files;
// };

// export const deleteFile = async (path: string) => {
//   await s3
//     .deleteObject({
//       Bucket: process.env.BACKBLAZE_BUCKET,
//       Key: path,
//     })
//     .promise();
// };
