# Create core AWS infrastructure

* VPC
* 2 subnets in 2 different AZs
* Internet Gateway
* according routing tables

Command:  

```bash

aws cloudformation create-stack \
--region us-east-2 \
--capabilities CAPABILITY_IAM \
--stack-name stack-infrastructure \
--template-body file://./core-infrastructure-setup.yml


```





