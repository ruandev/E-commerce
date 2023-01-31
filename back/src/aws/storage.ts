import * as aws from "aws-sdk";
import { s3DeleteDir } from "@zvs001/s3-utils";
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

const listFiles = async (path: string) => {
  const { Contents } = await s3
    .listObjects({
      Bucket: "MarketPlacePortfolio",
    })
    .promise();

  const files = Contents.map((file) => {
    return {
      url: `https://MarketPlacePortfolio.s3.us-west-004.backblazeb2.com/${file.Key}`,
      path: file.Key,
    };
  });
  const filterFiles = files.filter((element) => {
    const b = element.path.split("/");
    if (b[0] === path) {
      return element;
    }
  });
  return filterFiles;
};

export const deleteFile = async (path: string) => {
  await s3
    .deleteObject({
      Bucket: "MarketPlacePortfolio",
      Key: path,
    })
    .promise();
};

export const deleteFolder = async (path: string) => {
  await s3DeleteDir(s3, {
    Bucket: "MarketPlacePortfolio",
    Prefix: `${path}/`,
  });
};
