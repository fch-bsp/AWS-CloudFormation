# Create ECS cluster baseado em um  EC2

Command to apply the CloudFormation template

Launchtype _EC2_:  

```bash

aws cloudformation create-stack \

--region us-east-2 \
--stack-name ecs-ec2 \
--capabilities CAPABILITY_IAM \
--template-body file://./ecs-ec2-via-cloudformation.yml

```

---------------------------------------------------------------------------------

Launchtype _Fargate_:  

```bash

--region us-east-2 \
aws cloudformation create-stack \
--stack-name ecs-fargate \
--capabilities CAPABILITY_IAM \
--template-body file://./ecs-fargate-via-cloudformation.yml

```
