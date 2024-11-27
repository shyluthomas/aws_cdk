import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const level1S3bucket = new CfnBucket(this, 'myfirstlevel1s3construct', {
      versioningConfiguration: {
        status: 'Enabled'
      }
    })

    const level2S3bucket = new Bucket(this, 'myfirstlevel2s3construct', {
      bucketName: "myfirstlevel3buckettest",
     versioned: true
    })

  }
}
