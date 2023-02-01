import { s3DeleteDir } from "@zvs001/s3-utils";
import * as aws from "aws-sdk";
import { config } from "dotenv";
config();

const endpoint = new aws.Endpoint(process.env.BB_ENDPOINT);
const s3 = new aws.S3({
  endpoint,
  credentials: {
    accessKeyId: process.env.BB_KEY_ID,
    secretAccessKey: process.env.BB_SECRET_KEY,
  },
});

export const uploadFile = async (
  path: string,
  buffer: any,
  mimetype: string
) => {
  const file = await s3
    .upload({
      Bucket: process.env.BUCKET,
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

export const deleteFile = async (path: string) => {
  await s3
    .deleteObject({
      Bucket: process.env.BUCKET,
      Key: path,
    })
    .promise();
};

export const deleteFolder = async (path: string) => {
  await s3DeleteDir(s3, {
    Bucket: process.env.BUCKET,
    Prefix: `${path}/`,
  });
};
