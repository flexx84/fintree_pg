ts
import AWS from 'aws-sdk';
export function initAWS({ accessKey, secretKey, region, bucketName }: any) {
  AWS.config.update({ accessKeyId:accessKey, secretAccessKey:secretKey, region });
  return new AWS.S3({ params:{ Bucket:bucketName } });
}
