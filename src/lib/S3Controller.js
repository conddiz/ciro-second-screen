import { S3 } from 'aws-sdk'
import { format } from 'date-fns'

export class S3Controller {
    FOLDER = format(new Date(), 'yyyyMMdd')
    BUCKET = process.env.S3_BUCKET

    static getS3Bucket() {
        return new S3({
            accessKeyId: process.env.S3_KEY,
            secretAccessKey: process.env.S3_SECRET,
            region: process.env.AWS_REGION,
        })
    }

    uploadFile(filename, filestr, callback) {
        const bucket = S3Controller.getS3Bucket()

        const params = {
            Bucket: this.BUCKET,
            Key: this.FOLDER + '/' + filename + '.json',
            Body: filestr,
            ACL: '',
        }

        bucket.upload(params, function (err, data) {
            callback(err, data)
        })
    }
}
