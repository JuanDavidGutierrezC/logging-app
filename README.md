# logging-app

This project contains source code and supporting files for a serverless application that you can deploy with the SAM CLI. It includes the following files and folders.


## Package the application

```bash
sam package --template-file template.yaml --s3-bucket logging-app-code --output-template-file packaged.yaml
```

The above command has the following parameters:

* **template-file**: Cloudformation file.
* **s3-bucket**: S3 bucket used by SAM to store the lambda code. (This bucket must be previously created).
* **output-template-file**: File that contains the final Cloudformation code.

## Deploy the application

```bash
sam deploy --template-file ./packaged.yaml --stack-name logging-app --capabilities CAPABILITY_IAM
```

The above command has the following parameters:

* **template-file**: File that contains the code to deploy in cloudformation (is the output file generated in the package section)
* **stack-name**: Name of the stack in Cloudformation.
* **capabilities**: Define permissions used to create the defined services.